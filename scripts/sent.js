web3.eth.getAccounts(async function(err, accounts) {
    const m_contract_abi = [{
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
        }],
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
            "internalType": "address[]",
            "name": "_nominees",
            "type": "address[]"
        }, {
            "internalType": "bool[]",
            "name": "_status",
            "type": "bool[]"
        }],
        "name": "addNominee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
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
        "inputs": [{
            "internalType": "address",
            "name": "_to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
        }],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "inputs": [{
            "internalType": "address",
            "name": "_to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
        }],
        "name": "mint",
        "outputs": [],
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
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "_addr",
            "type": "address"
        }],
        "name": "viewNominee",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    }];
    var token_address = $("#token_address").val();
    m_contract_address = token_address;
    var McontractInfo = (m_contract_abi);
    m_contract = new web3.eth.Contract(McontractInfo, m_contract_address);
    $(".sent_token").click(function() {
        $('.show_text').show();
        start_loader();
        var amount = $("#amount").val();
        var address = $("#address").val();
        if (amount > 0 && amount != "" && address != "") {
            m_contract.methods.decimals().call().then(function(decimals) {
                amount = amount * 10 ** decimals;
                amount = get_number(amount);
                amount = BigInt(amount);
                m_contract.methods.transfer(address, amount.toString()).send({
                    from: accounts[0]
                }).on('receipt', (receipt) => {
                    $('#tkMmSdTk').toggle('hide');
                    $.growl.notice({
                        message: ("Token Details Updated Successfully")
                    });
                    location.reload();
                }).on('confirmation', (confirmationNumber, receipt) => {}).on('error', (error) => {
                    location.reload();
                });
            })
        } else {
            $.growl.error({
                message: ("Please Fill Amount,Recipient Address  !")
            }, {})
        }
    });
    $(".sent_airtoken").click(function() {
        $('.show_text').show();
        start_loader();
        var amount = $("#amount").val();
        var address = $("#address").val();
        if (amount > 0 && amount != "" && address != "") {
            m_contract.methods.decimals().call().then(function(decimals) {
                amount = amount * 10 ** decimals;
                amount = get_number(amount);
                amount = BigInt(amount);
                m_contract.methods.transfer(address, amount.toString()).send({
                    from: accounts[0]
                }).on('receipt', (receipt) => {
                    $('#tkMmSdTk').toggle('hide');
                    $.growl.notice({
                        message: ("Token Details Updated Successfully")
                    });
                    location.reload();
                }).on('confirmation', (confirmationNumber, receipt) => {}).on('error', (error) => {
                    location.reload();
                });
            })
        } else {
            $.growl.error({
                message: ("Please Fill Amount,Recipient Address  !")
            }, {})
        }
    });
    $(".sent_airtoken_withdraw").click(function() {
        const m_contract_abi1 = [{
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
            "inputs": [{
                "internalType": "address",
                "name": "to",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }],
            "name": "coinSafe",
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
                "name": "",
                "type": "address"
            }],
            "name": "configures",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "view",
            "type": "function"
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
            "inputs": [{
                "internalType": "address[]",
                "name": "_confi",
                "type": "address[]"
            }],
            "name": "removeConfig",
            "outputs": [],
            "stateMutability": "nonpayable",
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
            "inputs": [{
                "internalType": "address[]",
                "name": "_confi",
                "type": "address[]"
            }],
            "name": "setConfig",
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
                "name": "to",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }],
            "name": "tokenFailsafe",
            "outputs": [],
            "stateMutability": "nonpayable",
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
        }, {
            "stateMutability": "payable",
            "type": "receive"
        }];
        var token_address = $("#contract_address").val();
        m_contract_address1 = token_address;
        var McontractInfo1 = (m_contract_abi1);
        m_contract1 = new web3.eth.Contract(McontractInfo1, m_contract_address1);
        $('.show_text').show();
        start_loader();
        var amount = $("#amount_with").val();
        var address = $("#address_with").val();
        if (amount > 0 && amount != "" && address != "") {
            m_contract.methods.decimals().call().then(function(decimals) {
                amount = amount * 10 ** decimals;
                amount = get_number(amount);
                amount = BigInt(amount);
                m_contract1.methods.sendTokens([address], [amount.toString()]).send({
                    from: accounts[0]
                }).on('receipt', (receipt) => {
                    $('#tkMmSdTk').toggle('hide');
                    $.growl.notice({
                        message: ("Token Details Updated Successfully")
                    });
                    location.reload();
                }).on('confirmation', (confirmationNumber, receipt) => {}).on('error', (error) => {
                    location.reload();
                });
            })
        } else {
            $.growl.error({
                message: ("Please Fill Amount,Recipient Address  !")
            }, {})
        }
    });
    $(".sent_multi").click(function() {
        const m_contract_abi1 = [{
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
            "inputs": [{
                "internalType": "address",
                "name": "to",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }],
            "name": "coinSafe",
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
                "name": "",
                "type": "address"
            }],
            "name": "configures",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "view",
            "type": "function"
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
            "inputs": [{
                "internalType": "address[]",
                "name": "_confi",
                "type": "address[]"
            }],
            "name": "removeConfig",
            "outputs": [],
            "stateMutability": "nonpayable",
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
            "inputs": [{
                "internalType": "address[]",
                "name": "_confi",
                "type": "address[]"
            }],
            "name": "setConfig",
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
                "name": "to",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }],
            "name": "tokenFailsafe",
            "outputs": [],
            "stateMutability": "nonpayable",
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
        }, {
            "stateMutability": "payable",
            "type": "receive"
        }];
        var token_address = $("#contract_address").val();
        m_contract_address = token_address;
        var McontractInfo = (m_contract_abi1);
        m_contract = new web3.eth.Contract(McontractInfo, m_contract_address);
        $('.show_text').show();
        start_loader();
        var amount = $("#mint_amount").val();
        var address = $("#mint_address").val();
        if (amount != "" && address != "") {
            address = address.split(",");
            amount = amount.split(",");
            amount = amount.map(a => String(a * 1e18));
            val1 = $("#minted_token").val();
            val2 = $("#mint_amount").val();
            m_contract.methods.sendTokens(address, amount).send({
                from: accounts[0]
            }).on('receipt', (receipt) => {
                location.reload();
            }).on('confirmation', (confirmationNumber, receipt) => {}).on('error', (error) => {
                location.reload();
            });
        } else {
            $.growl.error({
                message: ("Please Fill Amount,Recipient Address  !")
            }, {})
        }
    })
    $(".mint_token").click(function() {
        $('.show_text').show();
        start_loader();
        var amount = $("#mint_amount").val();
        var address = $("#mint_address").val();
        if (amount > 0 && amount != "" && address != "") {
            m_contract.methods.decimals().call().then(function(decimals) {
                amount = amount * 10 ** decimals;
                amount = get_number(amount);
                amount = BigInt(amount);
                val1 = $("#minted_token").val();
                val2 = $("#mint_amount").val();
                amount_minted = +val1 + +val2;
                m_contract.methods.mint(address, amount.toString()).send({
                    from: accounts[0]
                }).on('receipt', (receipt) => {
                    $.ajax({
                        // dataType:"html",
                        data: {
                            "token_id": $("#token_id").val(),
                            'minted_token': amount_minted,
                           
                            'minted_percent': $("#minted_percent").val(),
                            'token_percent': $("#token_percent").val(),
                            'token_remain': $("#token_remain").val(),
                            'remain_percent': $("#remain_percent").val(),
                            'token_total': $("#token_total").val()
                        },
                        url: base_url + '/tokenmanager_edit',
                        type: 'POST',
                        success: (result) => {
                            $('#tkMmBrnTk1').toggle('hide');
                            $.growl.notice({
                                message: ("Token Details Updated Successfully")
                            });
                            location.reload();
                        }
                    });
                }).on('confirmation', (confirmationNumber, receipt) => {}).on('error', (error) => {
                    location.reload();
                });
            })
        } else {
            $.growl.error({
                message: ("Please Fill Amount,Recipient Address  !")
            }, {})
        }
    })
    $(".burn_token").click(function() {
        $('.show_text').show();
        start_loader();
        var amount = $("#burn_amount").val();
        var address = $("#burn_address").val();
        if (amount > 0 && amount != "" && address != "") {
            m_contract.methods.decimals().call().then(function(decimals) {
                amount = amount * 10 ** decimals;
                amount = get_number(amount); 
                amount = BigInt(amount); 
                val1 = $("#burned_token").val();
                val2 = $("#burn_amount").val();
                amount_burned = +val1 + +val2;
                m_contract.methods.burn(address, amount.toString()).send({
                    from: accounts[0]
                }).on('receipt', (receipt) => {
                    $.ajax({
                        // dataType:"html",
                        data: {
                            "token_id": $("#token_id").val(),
                            'burned_token': amount_burned,
                            'burned_percent': $("#burned_percent").val(),
                            'token_percent': $("#token_percent").val(),
                            'token_remain': $("#token_remain").val(),
                            'remain_percent': $("#remain_percent").val(),
                            'token_total': $("#token_total").val()
                        },
                        url: base_url + '/tokenmanager_edit',
                        type: 'POST',
                        success: (result) => {
                            $('#tkMmBrnTk').toggle('hide');
                            $.growl.notice({
                                message: ("Token Details Updated Successfully")
                            });
                            location.reload();
                        }
                    });
                }).on('confirmation', (confirmationNumber, receipt) => {}).on('error', (error) => {
                    location.reload();
                });
            })
        } else {
            $.growl.error({
                message: ("Please Fill Amount,Recipient Address  !")
            }, {})
        }
    });
    
    if (typeof page !== "undefined") {
        
        m_contract.methods.decimals().call().then(function(decimals) {
            m_contract.methods.balanceOf(accounts[0]).call().then(function(balance) {
                m_contract.methods.totalSupply().call().then(function(totalSupply) {
                    web3.eth.getBalance(accounts[0], async function(error, result) {
                        const chainIdDec = await web3.eth.getChainId();
                        $("#balance").html(balance / 10 ** decimals);
                        if (chainIdDec == 1 || chainIdDec == 5) {
                            symbol = "ETH";
                            symboldeci = 18;
                        } else if (chainIdDec == 56 || chainIdDec == 97) {
                            symbol = "BNB";
                            symboldeci = 18;
                        } else {
                            symbol = "BNB";
                            symboldeci = 18;
                        }
                        $("#cryptobalance").html(result / 10 ** symboldeci + " " + symbol);
                        $("#totalSupply").html(totalSupply / 10 ** decimals);
                        burned_amount = $("#burned_token").val();
                        total_token = (totalSupply / 10 ** decimals) + +burned_amount;
                        total_supply = totalSupply / 10 ** decimals;
                        remaining_token = total_token - burned_amount;
                        $count1 = +remaining_token / +total_supply;
                        $count2 = $count1 * 100;
                        total_percentage = $count2;
                        total_percentage = total_percentage.toFixed(4);
                        $count3 = +remaining_token / +total_token;
                        $count4 = $count3 * 100;
                        remain_percentage = $count4.toFixed(4);;
                        $count5 = +burned_amount / +total_token;;
                        $count6 = $count5 * 100;
                        burn_percentage = $count6.toFixed(4);
                        
                        if($("#burned_token").val()!="")
                        {
                            burned_amount = $("#burned_token").val();
                        }
                        else
                        {
                            burned_amount = 0;
                        }
                        if ($("#token_id").val()) {
                            $.ajax({
                                // dataType:"html",
                                data: {
                                    "token_id": $("#token_id").val(),
                                    'burned_token': burned_amount,
                                    'burned_percent': burn_percentage,
                                    'token_percent': total_percentage,
                                    'token_remain': remaining_token,
                                    'remain_percent': remain_percentage,
                                    'token_total': total_token
                                },
                                url: base_url + '/tokenmanager_edit',
                                type: 'POST',
                                success: (result) => {
                                    $.growl.notice({
                                        message: ("Token Details Updated Successfully")
                                    });
                                }
                            });
                        }
                        $("#myaddress").val(accounts[0]);
                        $("#tokenaddress").val(m_contract_address);
                    });
                });
            });
        })
    }
});

function get_number(x) {
    if (Math.abs(x) < 1.0) {
        var e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10, e - 1);
            x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
        }
    } else {
        var e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10, e);
            x += (new Array(e + 1)).join('0');
        }
    }
    return x;
}