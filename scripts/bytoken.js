function startProcess() {
	$('.show_text').show();
	start_loader();
	if ($('#inp_amount').val() > 0) {

		EThAppDeploy.loadEtherium();
	} else {

		$.growl.warning({ message: ("Please Enter Valid Amount") });
		$('.show_text').hide();
		stop_loader();
	}
}
EThAppDeploy = {
	loadEtherium: async () => {
		if (typeof window.ethereum !== 'undefined') {
			EThAppDeploy.web3Provider = ethereum;
			EThAppDeploy.requestAccount(ethereum);
		} else {
			alert(
				"Not able to locate an Ethereum connection, please install a Metamask wallet"
			);
		}
	},
	/****
	* Request A Account
	* **/
	requestAccount: async (ethereum) => {
		ethereum
			.request({
				method: 'eth_requestAccounts'
			})
			.then((resp) => {
				//do payments with activated account
				EThAppDeploy.payNow(ethereum, resp[0]);
			})
			.catch((err) => {
				// Some unexpected error.
				console.log(err);
			});
	},
	/***
	*
	* Do Payment
	* */
	payNow: async (ethereum, from) => {
		var amount = $('#inp_amount').val();
		var address = $('#address').val();
		var sendvalue = $('#plan').val();
		if (sendvalue == 3) {
			currency = "BNB";
		}
		if (sendvalue == 4) {
			currency = "ETH";
		}


		const chainIdDec = await web3.eth.getChainId();
		if (chainIdDec == 1 || chainIdDec == 56) {
			ethereum
				.request({
					method: 'eth_sendTransaction',
					params: [{
						from: from,
						to: address,
						value: '0x' + ((amount * 1000000000000000000).toString(16)),
					},],
				})
				.then((txHash) => {
					if (txHash) {
						console.log(txHash);
						$.growl.notice({ message: ("Transaction Confirmed") });
						storeTransaction(txHash, amount, currency);
					} else {
						console.log("Something went wrong. Please try again");
						$('.show_text').hide();
						stop_loader();
						$.growl.notice({ message: ("Something went wrong. Please try again") });
					}
				})
				.catch((error) => {
					console.log(error);
					$('.show_text').hide();
					stop_loader();
				});
		}
		else {
			$('.show_text').hide();
			stop_loader();
			$.growl.warning({ message: ("Wrong Network. Please try again.") });
		}




	},
}
function storeTransaction(txHash, amount, currency) {


	$.ajax({
		url: base_url + '/buy-token/payment/metamask',
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		},
		type: 'POST',
		data: {
			txHash: txHash,
			amount: amount,
			currency: currency,
		},
		success: function (response) {
			// reload page after success
			$('.show_text').hide();
			stop_loader();
			window.location.reload();
		}
	});
}