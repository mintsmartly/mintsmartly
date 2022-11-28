
if (typeof web3 !== "undefined") {
	window.web3 = new Web3(web3.currentProvider);
	web3.eth.getAccounts(function (err, accounts) {
		console.log("err", err);
		var ff = web3.eth.net.getId();
		ff.then(async function (result) {
			const chainIdHex = web3.currentProvider.chainId;
			const chainIdDec = await web3.eth.getChainId();
			console.log(chainIdHex);
			console.log(chainIdDec);



		});
		if (err != null) { } else if (accounts.length == 0) {
			getAccount();
		} else {
			getAccount();
			localStorage.setItem('network_selectd', "metac");
			// $.growl.notice({ message: ("Wallet successfully connected.") });
		}
	})
} else {
	$.growl.error({
		message: ("Wallet extension not added on your browser. Please install one.")
	});
}
async function getAccount() {
	if (typeof ethereum !== "undefined") {
		const accounts = await ethereum.enable();
		accounts1 = accounts;
		web3.eth.getBalance(accounts[0], function (error, result) {
			var get_bal = parseFloat(result) / 1000000000000000000;
			$('.connect_meta').attr('style', 'display: none !important');
			$(".connected_meta").show();
			/*$(".select_net").hide();*/
			if (localStorage.getItem('network_selectd') == "walletc") {
				$(".selcted_n_img").attr("src", base_url + "/assets/front/images/wallet.png");
			} else {
				$(".selcted_n_img").attr("src", base_url + "/assets/front/images/meta-mask.png");
			}
			if (accounts[0]) {
				$("._address_eth_").html(accounts[0].substring(0, 6) + "..." + accounts[0].substring(38, 50));
				$(".select_net_address").show();
				$(".select_net_farm").hide();
				$(".connected").show();
			} else {
				$("._address_eth_").html("Connect Wallet");
				$(".select_net_farm").show();
				$(".select_net_address").hide();
			}
			$("._eth_balance_h").html(get_bal.toString());
			$("._eth_balance_").html(get_bal.toString());
		});
		localStorage.setItem('network_selectd', "metac");

	} else {
		$.growl.error({
			message: ("Wallet extension not added on your browser")
		});
	}
}


web3.eth.getAccounts(function (err, accounts) {
	$(".signup").click(async function () {
		var refcode = $('#refcode').val();
		console.log('refcode', refcode);
		web3.eth.personal.sign("Hello " + accounts[0], accounts[0], "test password!").then(function (result1) {
			web3.eth.personal.ecRecover("Hello " + accounts[0], result1).then(function (result2) {
				if (accounts[0].toLowerCase() == result2.toLowerCase()) {

					var address = result2;
					var key = result1;
					var refcode = $('#refcode').val();

					$.ajax({
						type: 'POST',
						data: 'refcode=' + refcode,
						url: base_url + '/register/metamsk/' + address + '/' + key,
						success: (res1) => {
							if (res1 == "valid") {

								window.location.href = base_url + '/dashboard';
							}
							if (res1 == "failed") {
								window.location.href = base_url + '/login';
							}



						}
					});

				}
			});
		});
	});
});
async function url_redirect(location) {
	const chainIdDec = await web3.eth.getChainId();
	network_typecheck = $("input[name='network']:checked").val();
	network_chain = $("input[name='network_chain']:checked").val();
	if (network_typecheck == "ETH") {
		if (network_chain == 1) {
			if (chainIdDec == 5) {
				window.location.href = location + "/1/yes";
			} else {
				try {
					await web3.currentProvider.request({
						method: "wallet_switchEthereumChain",
						params: [{
							chainId: "0x5"
						}]
					});
					window.location.href = location + "/1/yes";
				} catch (error) {
					$.growl.warning({
						message: (error.message)
					}, {});
				}
			}
		} else {
			if (chainIdDec == 1) {
				window.location.href = location + "/5/no";
			} else {
				try {
					await web3.currentProvider.request({
						method: "wallet_switchEthereumChain",
						params: [{
							chainId: "0x1"
						}]
					});
					window.location.href = location + "/5/no";
				} catch (error) {
					$.growl.warning({
						message: (error.message)
					}, {});
				}
			}
		}
	}
	if (network_typecheck == "BSC") {
		if (network_chain == 1) {
			if (chainIdDec == 97) {
				window.location.href = location + "/97/yes";
			} else {
				try {
					await web3.currentProvider.request({
						method: "wallet_switchEthereumChain",
						params: [{
							chainId: "0x61"
						}]
					});
					window.location.href = location + "/97/yes";
				} catch (error) {
					$.growl.warning({
						message: (error.message)
					}, {});
				}
			}
		} else {
			if (chainIdDec == 56) {
				window.location.href = location + "/56/no";
			} else {
				try {
					await web3.currentProvider.request({
						method: "wallet_switchEthereumChain",
						params: [{
							chainId: "0x38"
						}]
					});
					window.location.href = location + "/56/no";
				} catch (error) {
					$.growl.warning({
						message: (error.message + "Hii")
					}, {});
					if (error.code === 4902) {
						try {
							await web3.currentProvider.request({
								method: "wallet_addEthereumChain",
								params: [{
									chainId: "0x38",
									chainName: "BSC Mainnet",
									rpcUrls: ["https://dataseed1.binance.org/"],
									nativeCurrency: {
										name: "Binance",
										symbol: "BNB",
										decimals: 18,
									},
									blockExplorerUrls: ["https://bscscan.com/"],
								},],
							});
						} catch (error) {
							$.growl.warning({
								message: (error.message)
							}, {});
						}
					}
				}
			}
		}
	}
}
$(".deploy1").click(async function () {
	url_redirect(deploy_url1);
});
$(".deploy2").click(async function () {
	url_redirect(deploy_url2);
});
$(".deploy3").click(async function () {
	url_redirect(deploy_url3);
});
$(".deploy4").click(async function () {
	url_redirect(deploy_url4);
});
$(".deploy5").click(async function () {
	url_redirect(deploy_url5);
});
$(".deploy6").click(async function () {
	url_redirect(deploy_url6);
});
$(".deploy7").click(async function () {
	url_redirect(deploy_url7);
});

$(".add_to_metamask").click(async function () {
	var address = $("#address").val();
	var symbol = $("#symbol").val();
	var decimals = $("#decimals").val();

	ethereum.request({ method: "wallet_watchAsset", params: { type: "ERC20", options: { address: address, symbol: symbol, decimals: decimals, image: "" } } });
});


$(".add_wallet").click(async function () {

	var no = $("#add_wallet_no").val();
	no++;

	if ($(".benefeciary_" + no).hasClass("hide")) {
		$(".benefeciary_" + no).show();
		$(".benefeciary_" + no).addClass("active");
		$("#add_wallet_no").val(no);

	}

	if ($(".benefeciary_1").hasClass("active") && $(".benefeciary_2").hasClass("active")) {
		$("#bsRange_1").val(50);
		range(1);
		$("#bsRange_2").val(50);
		range(2);

	}

	if ($(".benefeciary_1").hasClass("active") && $(".benefeciary_2").hasClass("active") && $(".benefeciary_3").hasClass("active")) {
		$("#bsRange_1").val(40);
		range(1);
		$("#bsRange_2").val(40);
		range(2);
		$("#bsRange_3").val(20);
		range(3);

	}

	if ($(".benefeciary_1").hasClass("active") && $(".benefeciary_2").hasClass("active") && $(".benefeciary_3").hasClass("active") && $(".benefeciary_4").hasClass("active")) {
		$("#bsRange_1").val(40);
		range(1);
		$("#bsRange_2").val(20);
		range(2);
		$("#bsRange_3").val(20);
		range(3);
		$("#bsRange_4").val(20);
		range(4);


	}

	if ($(".benefeciary_1").hasClass("active") && $(".benefeciary_2").hasClass("active") && $(".benefeciary_3").hasClass("active") && $(".benefeciary_4").hasClass("active") && $(".benefeciary_5").hasClass("active")) {
		$("#bsRange_1").val(20);
		range(1);
		$("#bsRange_2").val(20);
		range(2);
		$("#bsRange_3").val(20);
		range(3);
		$("#bsRange_4").val(20);
		range(4);
		$("#bsRange_5").val(20);
		range(5);


	}


	if (no == 5) {
		$(".add_wallet_div").hide();
	}
	else {
		$(".add_wallet_div").show();
	}

});

function range(no) {
	// $("#bsRange_"+no).attr("disabled","true");
	var val = ($("#bsRange_" + no).val() - $("#bsRange_" + no).attr('min')) / ($("#bsRange_" + no).attr('max') - $("#bsRange_" + no).attr('min'));
	$("#bsRange_" + no).css('background-image',
		'-webkit-gradient(linear, left top, right top, '
		+ 'color-stop(' + val + ', #FA7E7E), '
		+ 'color-stop(' + val + ', #C4C4C4)'
		+ ')'
	);
	var left = val * 100;
	var msThb = val * 22;
	if (left >= 100) {
		$("#bsRange_" + no).parent().find('.pointValue').css({ "left": "calc(" + left + "% - " + msThb + "px)" });
	}
	else if (left >= 75) {
		$("#bsRange_" + no).parent().find('.pointValue').css({ "left": "calc(" + left + "% - " + msThb + "px)" });
	}
	else if (left >= 11) {
		$("#bsRange_" + no).parent().find('.pointValue').css({ "left": "calc(" + left + "% - " + msThb + "px)" });
	}
	else {
		$("#bsRange_" + no).parent().find('.pointValue').css({ "left": "calc(" + left + "% - " + msThb + "px)" });
	}

	$("#bsRange_" + no).parent().find('.pointValue').html($("#bsRange_" + no).val() + "%");

}

$(".add_whitelist_div").click(async function () {

	var no = $("#add_whitelist_no").val();
	no++;


	$(".whitelist_" + no).show();
	$(".whitelist_" + no).addClass("active");
	$("#add_whitelist_no").val(no);

	if (no == 10) {
		$(".add_wallet_div").hide();
	}
	else {
		$(".add_wallet_div").show();
	}

});


$(".finalize").click(function () {
	try {
		web3.eth.getAccounts(function (err, accounts) {
			$('.show_text').show();
			start_loader();
			$(".deploy").hide();
			token_type = $("#token_type").val();
			network_type = $("#token_type").val();
			token_address = $("#network_type").val();
			token_name = $("#token_name").val();
			token_symbol = $("#token_symbol").val();
			token_decimal = $("#token_decimal").val();
			token_typecheck = $("input[name='token_type']:checked").val();
			token_owner = $("#token_owner").val();
			future_minting = $("input[name='future_minting']:checked").val();
			branded_report = $("input[name='branded_report']:checked").val();
			scan_verification = $("input[name='scan_verification']:checked").val();

			white_label = $("input[name='white_label']:checked").val();
			network_type = $("#network_id").val();

			$(".token_name").html(token_name);
			$(".token_symbol").html(token_symbol);
			$(".token_decimal").html(token_decimal);
			const ExampleContract = [{
				"inputs": [{
					"internalType": "string",
					"name": "name_",
					"type": "string"
				}, {
					"internalType": "string",
					"name": "symbol_",
					"type": "string"
				}, {
					"internalType": "uint256",
					"name": "decimals_",
					"type": "uint256"
				}, {
					"internalType": "uint256",
					"name": "initialBalance_",
					"type": "uint256"
				}, {
					"internalType": "address",
					"name": "tokenOwner_",
					"type": "address"
				}, {
					"internalType": "address payable",
					"name": "feeReceiver_",
					"type": "address"
				}],
				"stateMutability": "payable",
				"type": "constructor"
			}, {
				"anonymous": false,
				"inputs": [{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}, {
					"indexed": true,
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}, {
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}],
				"name": "Approval",
				"type": "event"
			}, {
				"anonymous": false,
				"inputs": [{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				}, {
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				}, {
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}],
				"name": "Transfer",
				"type": "event"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}, {
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}],
				"name": "allowance",
				"outputs": [{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}, {
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}],
				"name": "approve",
				"outputs": [{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}],
				"stateMutability": "nonpayable",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "account",
					"type": "address"
				}],
				"name": "balanceOf",
				"outputs": [{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [],
				"name": "decimals",
				"outputs": [{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}, {
					"internalType": "uint256",
					"name": "subtractedValue",
					"type": "uint256"
				}],
				"name": "decreaseAllowance",
				"outputs": [{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}],
				"stateMutability": "nonpayable",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}, {
					"internalType": "uint256",
					"name": "addedValue",
					"type": "uint256"
				}],
				"name": "increaseAllowance",
				"outputs": [{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}],
				"stateMutability": "nonpayable",
				"type": "function"
			}, {
				"inputs": [],
				"name": "name",
				"outputs": [{
					"internalType": "string",
					"name": "",
					"type": "string"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [],
				"name": "symbol",
				"outputs": [{
					"internalType": "string",
					"name": "",
					"type": "string"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [],
				"name": "totalSupply",
				"outputs": [{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				}, {
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}],
				"name": "transfer",
				"outputs": [{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}],
				"stateMutability": "nonpayable",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "sender",
					"type": "address"
				}, {
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				}, {
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}],
				"name": "transferFrom",
				"outputs": [{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}],
				"stateMutability": "nonpayable",
				"type": "function"
			}];
			const MyContract = new web3.eth.Contract(ExampleContract);
			let saidMessage = false;
			let saidAjax = false;
			total_supply = 10000;
			MyContract.deploy({
				data: '608060405260405162000dcb38038062000dcb833981016040819052620000269162000272565b858584868584600490805190602',
				arguments: [token_name, token_symbol, token_decimal, total_supply.toString(), accounts[0], accounts[0]]
			}).send({
				from: accounts[0],
			}).on('error', (error) => {
				$.growl.error({
					message: (error.message)
				}, {})
			}).on('transactionHash', (transactionHash) => {
				console.log(transactionHash)
			}).on('receipt', (receipt) => {
				// receipt will contain deployed contract address
				console.log(receipt);
				setTimeout(function () {
					if (!saidAjax) {

						$.ajax({
							url: base_url + "/store",
							type: "POST",
							data: {
								token_address: token_address,
								token_name: token_name,
								token_symbol: token_symbol,
								token_decimal: token_decimal,
								user_address: accounts[0],
								contract_address: receipt.contractAddress,
								token_type: token_typecheck,
								network_type: network_type,
								future_minting: future_minting,
								branded_report: branded_report,
								white_label: white_label,
								network_type: network_type,
								scan_verification: scan_verification,
							},
							success: async function (resp) {
								stop_loader();
								if (saidMessage == false) {
									$.growl.notice({
										message: ("Contract Deployed Successfully, Deployed contract address is " + receipt.contractAddress)
									});
									$('.show_text').hide();
									stop_loader();
									saidMessage = true;
									saidAjax = true;
								}
								setTimeout(function () {
									window.reload();
								}, 6000);
							}
						})
					}
				}, 6000);
			}).on('confirmation', (confirmationNumber, receipt) => {
				console.log(receipt)
			}).catch(err => {
				$.growl.error({
					message: (err.message)
				}, {})
			});
		})
	} catch (err) {
		$.growl.error({
			message: (err.message)
		}, {})
	}
});
const m_tokencontract_abi = [{
	"inputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "constructor"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "Approval",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "MinterAdded",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "MinterRemoved",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Paused",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "PauserAdded",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "PauserRemoved",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "from",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "to",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "Transfer",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Unpaused",
	"type": "event"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "addMinter",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "addPauser",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}],
	"name": "allowance",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "approve",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "balanceOf",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "burn",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "burnFrom",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "decimals",
	"outputs": [{
		"internalType": "uint8",
		"name": "",
		"type": "uint8"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "subtractedValue",
		"type": "uint256"
	}],
	"name": "decreaseAllowance",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "addedValue",
		"type": "uint256"
	}],
	"name": "increaseAllowance",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "isMinter",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "isPauser",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "mint",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "name",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [],
	"name": "pause",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [],
	"name": "renounceMinter",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [],
	"name": "renouncePauser",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "symbol",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "totalSupply",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "to",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "transfer",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "to",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "transferFrom",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [],
	"name": "unpause",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}];
var MTokencontractInfo = (m_tokencontract_abi);
web3.eth.getAccounts(function (err, accounts) {
	$("#manage_address").val(accounts[0]);
	$("#token_owner").val(accounts[0]);
	$("#investment_storage_address").val(accounts[0]);
});
async function checktoken(token_address) {
	try {
		token_contract_selected = new web3.eth.Contract(MTokencontractInfo, token_address);
		token_contract_selected.methods.symbol().call().then(function (symbol) {
			token_contract_selected.methods.name().call().then(function (name) {
				token_contract_selected.methods.decimals().call().then(function (token_decimal) {
					$("#token_name").val(name);
					$(".token_symbol").html(symbol);
					$(".token_decimal").html(token_decimal);
					$("#token_name").val(name);
					$("#token_symbol").val(symbol);
					$("#token_decimal").val(token_decimal);
				});
			});
		});
	} catch (err) {
		$.growl.error({
			message: ("Enter Valid Token Address  !")
		}, {})
	}
}

async function checkcrowdtoken(token_address) {
	try {
		token_contract_selected = new web3.eth.Contract(MTokencontractInfo, token_address);
		token_contract_selected.methods.symbol().call().then(function (symbol) {
			token_contract_selected.methods.name().call().then(function (name) {
				token_contract_selected.methods.decimals().call().then(function (token_decimal) {
					$("#token_name").val(name);
					$("#token_symbol").val(symbol);
					$("#decimal_value").val(token_decimal);
				});
			});
		});
	} catch (err) {
		$.growl.error({
			message: ("Enter Valid Token Address  !")
		}, {})
	}
}


$("#token_address").keyup(function () {


	tokencontractaddress = $("#token_address").val();
	checkcrowdtoken(tokencontractaddress);
});


$("#tokencontractaddress").keyup(function () {


	tokencontractaddress = $("#tokencontractaddress").val();
	$("#token_name").val("---");
	$(".token_symbol").html("---");
	$(".token_decimal").html("---");
	$("#token_name").val("---");
	$("#token_symbol").val("---");
	$("#token_decimal").val("---");
	checktoken(tokencontractaddress);
});



$(".airdrop").click(function () {
	try {
		web3.eth.getAccounts(function (err, accounts) {
			$('.show_text').show();
			start_loader();
			$(".airdrop").hide();
			token_name = $("#token_name").val();
			token_address = $("#token_address").val();
			token_owner = accounts[0];
			token_decimal = $(".token_decimal").html();
			token_symbol = $(".token_symbol").html();
			if (token_address == "" || token_decimal == "" || token_owner == "" || token_name != "---") {
				$.growl.error({
					message: ("Please Fill Token Contract Address,Token Symbol,Token Owner  !")
				}, {})
				$(".airdrop").show();
				$('.show_text').hide();
				stop_loader();
			}
			$(".token_name").html(token_name);
			$(".token_address").html(token_address);
			const ExampleContract = [{
				"inputs": [{
					"internalType": "contract IBEP20",
					"name": "_token",
					"type": "address"
				}],
				"stateMutability": "nonpayable",
				"type": "constructor"
			}, {
				"anonymous": false,
				"inputs": [{
					"indexed": true,
					"internalType": "address",
					"name": "previousOwner",
					"type": "address"
				}, {
					"indexed": true,
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}],
				"name": "OwnershipTransferred",
				"type": "event"
			}, {
				"inputs": [],
				"name": "owner",
				"outputs": [{
					"internalType": "address",
					"name": "",
					"type": "address"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [],
				"name": "renounceOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address[]",
					"name": "_addr",
					"type": "address[]"
				}, {
					"internalType": "uint256[]",
					"name": "_amt",
					"type": "uint256[]"
				}],
				"name": "sendTokens",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}, {
				"inputs": [],
				"name": "token",
				"outputs": [{
					"internalType": "contract IBEP20",
					"name": "",
					"type": "address"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}],
				"name": "transferOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}];
			const MyContract = new web3.eth.Contract(ExampleContract);
			let saidMessage = false;
			let saidAjax = false;
			total_supply = 10000;
			MyContract.deploy({
				data: '608060405234801561001057600080fd5b5060405162000ecd38038062000ecd83398181016040528101906100349190610146565',
				arguments: [token_address]
			}).send({
				from: accounts[0],
				gas: '20000000'
			}).on('error', (error) => {
				$.growl.error({
					message: (error)
				}, {})
			}).on('transactionHash', (transactionHash) => {
				console.log(transactionHash)
			}).on('receipt', (receipt) => {
				// receipt will contain deployed contract address
				console.log(receipt);
				setTimeout(function () {
					if (!saidAjax) {
						$.ajax({
							url: base_url + "/store",
							type: "POST",
							data: {
								token_address: token_address,
								token_name: token_name,
								token_symbol: token_symbol,
								token_decimal: token_decimal,
								user_address: accounts[0],
								contract_address: receipt.contractAddress
							},
							success: async function (resp) {
								stop_loader();
								if (saidMessage == false) {
									$.growl.notice({
										message: ("Contract Deployed Successfully, Deployed contract address is " + receipt.contractAddress)
									});
									$('.show_text').hide();
									stop_loader();
									saidMessage = true;
									saidAjax = true;
								}
								setTimeout(function () {
									window.reload();
								}, 6000);
							}
						})
					}
				}, 6000);
			}).on('confirmation', (confirmationNumber, receipt) => {
				console.log(receipt)
			}).catch(err => {
				$.growl.error({
					message: (err.message)
				}, {})
			});
		})
	} catch (err) {
		$.growl.error({
			message: (err.message)
		}, {})
	}
});

//lost key token
$(".crowdsale").click(function () {
	alert('crowdsale');

	contract_name = $("#contract_name").val();
	token_name = $("#token_name").val();
	token_symbol = $("#token_symbol").val();
	decimal_value = $("#decimal_value").val();
	token_type = $("input[name='token_type']:checked").val();
	token_owner = $("#token_owner").val();
	investment_storage_address = $("#investment_storage_address").val();
	token_rate = $("#token_rate").val();
	hard_cap_token = $("#hard_cap_token").val();
	soft_cap_token = $("#soft_cap_token").val();
	start_date = $("#start_date").val();
	start_time = $("#start_time").val();
	finish_date = $("#finish_date").val();
	finish_time = $("#finish_time").val();
	whitelist = $("#whitelist").val();
	changing_date = $("#changing_date").val();
	transferable = $("#transferable").val();
	min_max_investment = $("#min_max_investment").val();
	minimum_investment = $("#minimum_investment").val();
	maximum_investment = $("#maximum_investment").val();
	etherscan_verification = $("#etherscan_verification").val();
	network_type = $("#network_id").val();

	$.ajax({
		url: base_url + "/addcrowdsalecontract",
		type: "POST",
		data: {
			token_name: token_name,
			contract_name: contract_name,
			token_symbol: token_symbol,
			token_decimal: decimal_value,
			token_type: token_type,
			investment_storage_address: investment_storage_address,
			token_owner: token_owner,
			hard_cap_token: hard_cap_token,
			soft_cap_token: soft_cap_token,
			start_date: start_date,
			start_time: start_time,
			finish_date: finish_date,
			finish_time: finish_time,
			whitelist: whitelist,
			changing_date: changing_date,
			transferable: transferable,
			min_max_investment: min_max_investment,
			minimum_investment: minimum_investment,
			maximum_investment: maximum_investment,
			etherscan_verification: etherscan_verification,
			network_type: network_type,
		},
		success: async function (resp) {
			stop_loader();
			if (saidMessage == false) {
				$.growl.notice({
					message: ("sucess ")
				});
				$('.show_text').hide();
				stop_loader();
				saidMessage = true;
				saidAjax = true;
			}
			setTimeout(function () {
			}, 6000);
		}
	});
});
$(".crowdsale_button").click(function () {
	try {
		web3.eth.getAccounts(function (err, accounts) {
			$('.show_text').show();
			start_loader();
			$(".crowdsale").hide();
			contract_name = $("#contract_name").val();
			token_name = $("#token_name").val();
			token_symbol = $("#token_symbol").val();
			decimal_value = $("#decimal_value").val();
			tkTyNm = $("input[name='tkTyNm']:checked").val();
			token_owner = $("#token_owner").val();
			investment_storage_address = $("#investment_storage_address").val();
			token_rate = $("#token_rate").val();
			hard_cap_token = $("#hard_cap_token").val();
			soft_cap_token = $("#soft_cap_token").val();
			start_date = $("#start_date").val();
			start_time = $("#start_time").val();
			finish_date = $("#finish_date").val();
			finish_time = $("#finish_time").val();
			whitelist = $("#whitelist").val();
			changing_date = $("#changing_date").val();
			transferable = $("#transferable").val();
			min_max_investment = $("#min_max_investment").val();
			minimum_investment = $("#minimum_investment").val();
			maximum_investment = $("#maximum_investment").val();
			etherscan_verification = $("#etherscan_verification").val();
			// if(contract_name == "" || token_name == "" || token_symbol == "" || decimal_value != "---") {
			// 	$.growl.error({
			// 		message: ("Please Fill Token Name,Token Symbol,Token Owner  !")
			// 	}, {})
			// 	$(".airdrop").show();
			// 	$('.show_text').hide();
			// 	stop_loader();
			// }
			$(".token_name").html(token_name);
			$(".token_address").html(token_address);
			const ExampleContract = [{
				"inputs": [{
					"internalType": "contract IBEP20",
					"name": "_token",
					"type": "address"
				}],
				"stateMutability": "nonpayable",
				"type": "constructor"
			}, {
				"anonymous": false,
				"inputs": [{
					"indexed": true,
					"internalType": "address",
					"name": "previousOwner",
					"type": "address"
				}, {
					"indexed": true,
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}],
				"name": "OwnershipTransferred",
				"type": "event"
			}, {
				"inputs": [],
				"name": "owner",
				"outputs": [{
					"internalType": "address",
					"name": "",
					"type": "address"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [],
				"name": "renounceOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address[]",
					"name": "_addr",
					"type": "address[]"
				}, {
					"internalType": "uint256[]",
					"name": "_amt",
					"type": "uint256[]"
				}],
				"name": "sendTokens",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}, {
				"inputs": [],
				"name": "token",
				"outputs": [{
					"internalType": "contract IBEP20",
					"name": "",
					"type": "address"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}],
				"name": "transferOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}];
			const MyContract = new web3.eth.Contract(ExampleContract);
			let saidMessage = false;
			let saidAjax = false;
			total_supply = 10000;
			MyContract.deploy({
				data: '608060405234801561001057600080fd5b5060405162000ecd38038062000ecd83398181016040528101906100349190610146565',
				arguments: [token_address]
			}).send({
				from: accounts[0],
				gas: '20000000'
			}).on('error', (error) => {
				$.growl.error({
					message: (error)
				}, {})
			}).on('transactionHash', (transactionHash) => {
				console.log(transactionHash)
			}).on('receipt', (receipt) => {
				// receipt will contain deployed contract address
				console.log(receipt);
				setTimeout(function () {
					if (!saidAjax) {
						$.ajax({
							url: base_url + "/store",
							type: "POST",
							data: {
								token_address: token_address,
								token_name: token_name,
								token_symbol: token_symbol,
								token_decimal: token_decimal,
								user_address: accounts[0],
								contract_address: receipt.contractAddress
							},
							success: async function (resp) {
								stop_loader();
								if (saidMessage == false) {
									$.growl.notice({
										message: ("Contract Deployed Successfully, Deployed contract address is " + receipt.contractAddress)
									});
									$('.show_text').hide();
									stop_loader();
									saidMessage = true;
									saidAjax = true;
								}
								setTimeout(function () {
									window.reload();
								}, 6000);
							}
						})
					}
				}, 6000);
			}).on('confirmation', (confirmationNumber, receipt) => {
				console.log(receipt)
			}).catch(err => {
				$.growl.error({
					message: (err.message)
				}, {})
			});
		})
	} catch (err) {
		$.growl.error({
			message: (err.message)
		}, {})
	}
});


//sample will contract
contract_name = $("#contract_name").val();
management_address = $("#management_address").val();
email = $("#email").val();
beneficiary_address = $("#beneficiary_address").val();
share = $("#share").val();
email_notification = $("#email_notification").val();
expiration = $("#expiration").val();
will_contract_expiration = $("#will_contract_expiration").val();
cancel_contract = $("#cancel_contract").val();
confirm_contract = $("#confirm_contract").val();

//sample lost key
token_name = $("#token_name").val();
network_id = $("#network_id").val();
token_symbol = $("#token_symbol").val();
token_decimal = $("#token_decimal").val();
token_type1 = $("#token_type1").val();
token_type2 = $("#token_type2").val();
token_owner = $("#token_owner").val();
future_minting = $("#future_minting").val();
branded_report = $("#branded_report").val();
scan_verification = $("#scan_verification").val();
white_label = $("#white_label").val();

//sample lost key contract
contract_name = $("#contract_name").val();
management_address = $("#management_address").val();
reserve_address = $("#reserve_address").val();
bsPoints = $("#bsPoints").val();
email = $("#email").val();
wallet_activity = $("#wallet_activity").val();
contract_expiration_date = $("#contract_expiration_date").val();
due_date = $("#due_date").val();


//sample lost key token
token_name = $("#token_name").val();
management_address = $("#management_address").val();
reserve_address = $("#reserve_address").val();
bsPoints = $("#bsPoints").val();
email = $("#email").val();
wallet_activity = $("#wallet_activity").val();
contract_expiration_date = $("#contract_expiration_date").val();
due_date = $("#due_date").val();

//lost key token
$(".addlostkeytoken").click(function () {
	alert('token');

	token_name = $("#token_name").val();
	management_address = $("#management_address").val();
	reserve_address = $("#reserve_address").val();
	bsPoints = $("#bsPoints").val();
	email = $("#email").val();
	wallet_activity = $("#wallet_activity").val();
	contract_expiration_date = $("#contract_expiration_date").val();
	due_date = $("#due_date").val();
	network_type = $("#network_id").val();


	$.ajax({
		url: base_url + "/addlostkeytoken",
		type: "POST",
		data: {
			management_address: management_address,
			token_name: token_name,
			reserve_address: reserve_address,
			token_decimal: token_decimal,
			bsPoints: bsPoints,
			email: email,
			network_type: network_type,

			wallet_activity: wallet_activity,
			contract_expiration_date: contract_expiration_date,
			due_date: due_date,
			network_type: network_type,
		},
		success: async function (resp) {
			stop_loader();
			if (saidMessage == false) {
				$.growl.notice({
					message: ("sucess ")
				});
				$('.show_text').hide();
				stop_loader();
				saidMessage = true;
				saidAjax = true;
			}
			setTimeout(function () {
				window.reload();
			}, 6000);
		}
	});
});

//lost key token
$(".willcontract").click(function () {

	contract_name = $("#contract_name").val();
	management_address = $("#management_address").val();
	beneficiary_address = $("#beneficiary_address").val();
	bsPoints = $("#bsPoints").val();
	email = $("#email").val();
	email_notification = $("#email_notification").val();
	transaction = $("#transaction").val();

	expiration = $("#expiration").val();
	will_contract_expiration = $("#will_contract_expiration").val();
	cancel_contract = $("#cancel_contract").val();
	confirm_contract = $("#confirm_contract").val();
	network_type = $("#network_id").val();

	$.ajax({
		url: base_url + "/willcontract",
		type: "POST",
		data: {
			management_address: management_address,
			contract_name: contract_name,
			beneficiary_address: beneficiary_address,
			token_decimal: token_decimal,
			bsPoints: bsPoints,
			email: email,
			network_type: network_type,
			email_notification: email_notification,
			transaction: transaction,
			expiration: expiration,
			will_contract_expiration: will_contract_expiration,
			cancel_contract: cancel_contract,
			confirm_contract: confirm_contract,
		},
		success: async function (resp) {
			stop_loader();
			if (saidMessage == false) {
				$.growl.notice({
					message: ("sucess ")
				});
				$('.show_text').hide();
				stop_loader();
				saidMessage = true;
				saidAjax = true;
			}
			setTimeout(function () {
			}, 6000);
		}
	});
});
$(".addwillcontract_button").click(function () {
	alert("test");
	try {
		web3.eth.getAccounts(function (err, accounts) {
			$('.show_text').show();
			start_loader();
			$(".deploy").hide();
			contract_name = $("#contract_name").val();
			management_address = $("#management_address").val();
			email = $("#email").val();
			beneficiary_address = $("#beneficiary_address").val();
			share = $("#share").val();
			email_notification = $("#email_notification").val();
			expiration = $("#expiration").val();
			will_contract_expiration = $("#will_contract_expiration").val();
			cancel_contract = $("#cancel_contract").val();
			confirm_contract = $("#confirm_contract").val();
			network_type = $("#network_id").val();
			$(".token_name").html(token_name);
			$(".token_symbol").html(token_symbol);
			$(".token_decimal").html(token_decimal);
			const ExampleContract = [{
				"inputs": [{
					"internalType": "string",
					"name": "name_",
					"type": "string"
				}, {
					"internalType": "string",
					"name": "symbol_",
					"type": "string"
				}, {
					"internalType": "uint256",
					"name": "decimals_",
					"type": "uint256"
				}, {
					"internalType": "uint256",
					"name": "initialBalance_",
					"type": "uint256"
				}, {
					"internalType": "address",
					"name": "tokenOwner_",
					"type": "address"
				}, {
					"internalType": "address payable",
					"name": "feeReceiver_",
					"type": "address"
				}],
				"stateMutability": "payable",
				"type": "constructor"
			}, {
				"anonymous": false,
				"inputs": [{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}, {
					"indexed": true,
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}, {
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}],
				"name": "Approval",
				"type": "event"
			}, {
				"anonymous": false,
				"inputs": [{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				}, {
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				}, {
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}],
				"name": "Transfer",
				"type": "event"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}, {
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}],
				"name": "allowance",
				"outputs": [{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}, {
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}],
				"name": "approve",
				"outputs": [{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}],
				"stateMutability": "nonpayable",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "account",
					"type": "address"
				}],
				"name": "balanceOf",
				"outputs": [{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [],
				"name": "decimals",
				"outputs": [{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}, {
					"internalType": "uint256",
					"name": "subtractedValue",
					"type": "uint256"
				}],
				"name": "decreaseAllowance",
				"outputs": [{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}],
				"stateMutability": "nonpayable",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}, {
					"internalType": "uint256",
					"name": "addedValue",
					"type": "uint256"
				}],
				"name": "increaseAllowance",
				"outputs": [{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}],
				"stateMutability": "nonpayable",
				"type": "function"
			}, {
				"inputs": [],
				"name": "name",
				"outputs": [{
					"internalType": "string",
					"name": "",
					"type": "string"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [],
				"name": "symbol",
				"outputs": [{
					"internalType": "string",
					"name": "",
					"type": "string"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [],
				"name": "totalSupply",
				"outputs": [{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}],
				"stateMutability": "view",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				}, {
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}],
				"name": "transfer",
				"outputs": [{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}],
				"stateMutability": "nonpayable",
				"type": "function"
			}, {
				"inputs": [{
					"internalType": "address",
					"name": "sender",
					"type": "address"
				}, {
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				}, {
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}],
				"name": "transferFrom",
				"outputs": [{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}],
				"stateMutability": "nonpayable",
				"type": "function"
			}];
			const MyContract = new web3.eth.Contract(ExampleContract);
			let saidMessage = false;
			let saidAjax = false;
			total_supply = 10000;
			MyContract.deploy({
				data: '608060405260405162000dcb38038062000dcb833981016040819052620000269162000272565b858584868584600490805190602',
				arguments: [token_name, token_symbol, token_decimal, total_supply.toString(), accounts[0], accounts[0]]
			}).send({
				from: accounts[0],
			}).on('error', (error) => {
				$.growl.error({
					message: (error.message)
				}, {})
			}).on('transactionHash', (transactionHash) => {
				console.log(transactionHash)
			}).on('receipt', (receipt) => {
				// receipt will contain deployed contract address
				console.log(receipt);
				setTimeout(function () {
					if (!saidAjax) {

						$.ajax({
							url: base_url + "/store",
							type: "POST",
							data: {
								token_address: token_address,
								token_name: token_name,
								token_symbol: token_symbol,
								token_decimal: token_decimal,
								user_address: accounts[0],
								contract_address: receipt.contractAddress,
								token_type: token_typecheck,
								network_type: network_type,
								future_minting: future_minting,
								branded_report: branded_report,
								white_label: white_label,
								network_type: network_type,
								scan_verification: scan_verification,
							},
							success: async function (resp) {
								stop_loader();
								if (saidMessage == false) {
									$.growl.notice({
										message: ("Contract Deployed Successfully, Deployed contract address is " + receipt.contractAddress)
									});
									$('.show_text').hide();
									stop_loader();
									saidMessage = true;
									saidAjax = true;
								}
								setTimeout(function () {
									window.reload();
								}, 6000);
							}
						})
					}
				}, 6000);
			}).on('confirmation', (confirmationNumber, receipt) => {
				console.log(receipt)
			}).catch(err => {
				$.growl.error({
					message: (err.message)
				}, {})
			});
		})
	} catch (err) {
		$.growl.error({
			message: (err.message)
		}, {})
	}
});