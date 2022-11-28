$("#token_edit").validate({

	submitHandler: function (form) {
		$('.show_text').show();
		start_loader();
		$(".deploy").hide();
		token_id = $("#token_id").val();
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
		if (token_name == "" || token_symbol == "" || token_decimal == "" || token_owner == "") {
			$.growl.error({
				message: ("Please Fill Token Name,Token Symbol,Token Owner  !")
			}, {})
			$(".deploy").show();
			$('.show_text').hide();
			stop_loader();
		}
		else {
			$.ajax({
				url: base_url + "/contract/edit",
				type: "POST",
				data: {
					token_id: token_id,
					token_address: token_address,
					token_name: token_name,
					token_symbol: token_symbol,
					token_decimal: token_decimal,
					user_address: token_owner,
					contract_address: "created",
					token_type: token_typecheck,
					network_type: network_type,
					future_minting: future_minting,
					branded_report: branded_report,
					white_label: white_label,
					network_type: network_type,
					scan_verification: scan_verification,
					contract_type: "1",
				},
				success: async function (resp) {
					stop_loader();

					$.growl.notice({
						message: ("Token Contract Updated Successfully")
					});
					$('.show_text').hide();
					stop_loader();
					saidMessage = true;
					saidAjax = true;

					setTimeout(function () {
						window.location.href = base_url + '/my-contract';
					}, 3000);
				}
			})
		}
	}
});
$("#editdeflationary_form").validate({

	submitHandler: function (form) {
		$('.show_text').show();
		start_loader();
		$(".deploy").hide();

		token_id = $("#token_id").val();
		//common
		token_name = $("#token_name").val();
		token_symbol = $("#token_symbol").val();
		decimal_value = $("#decimal_value").val();
		transactiontax = $("#transactiontax").val();
		token_supply = $("#token_supply").val();


		//Buyback
		transactionreceive = $("#transactionreceive").val();
		burn_fee = $("#burn_fee").val();

		//Selection
		bybacktax = $("input[name='bybacktax']:checked").val();
		automaticlp = $("input[name='automaticlp']:checked").val();

		//auto lp
		liqudity_fee = $("#liqudity_fee").val();
		max_tx_amount = $("#max_tx_amount").val();
		max_token_amount = $("#max_token_amount").val();
		routeraddress = $("#routeraddress").val();
		network_type = $("#network_id").val();

		if (bybacktax == "on") {
			result = {
				token_id: token_id,
				token_name: token_name,
				token_symbol: token_symbol,
				token_decimal: decimal_value,
				transactiontax: transactiontax,
				transactionreceive: transactionreceive,
				burn_fee: burn_fee,
				type: "1",
				token_supply: token_supply,
				network_type: network_type,
			};
		}
		if (automaticlp == "on") {
			result = {
				token_id: token_id,
				token_name: token_name,
				token_symbol: token_symbol,
				token_decimal: decimal_value,
				transactiontax: transactiontax,
				liqudity_fee: liqudity_fee,
				type: "2",
				token_supply: token_supply,
				network_type: network_type,
				routeraddress: routeraddress,
				max_tx_amount: max_tx_amount,
				max_token_amount: max_token_amount,
			};
		}


		$.ajax({
			url: base_url + "/deflationarycontract/edit",
			type: "POST",
			data: result,
			success: function (resp) {
				stop_loader();

				$.growl.notice({
					message: ("Deflationary Updated Successfully")
				});
				$('.show_text').hide();
				stop_loader();
				saidMessage = true;
				saidAjax = true;

				setTimeout(function () {
					window.location.href = base_url + '/my-contract';
				}, 3000);
			}
		})
	}
});
$("#editcrowdsale_form").validate({

	submitHandler: function (form) {

		try {
			$('.show_text').show();
			start_loader();
			$(".deploy").hide();

			token_id = $("#token_id").val();
			contract_name = $("#contract_name").val();
			token_name = $("#token_name").val();
			token_address = $("#token_address").val();
			token_symbol = $("#token_symbol").val();
			decimal_value = $("#decimal_value").val();
			token_type = $("input[name='token_type']:checked").val();
			token_owner = $("#token_owner").val();
			token_rate = $("#token_rate").val();
			hard_cap_token = $("#hard_cap_token").val();
			soft_cap_token = $("#soft_cap_token").val();
			start_date = $("#start_date").val();
			start_time = $("#start_time").val();
			finish_date = $("#finish_date").val();
			finish_time = $("#finish_time").val();
			whitelist = $("input[name='whitelist']:checked").val();
			changing_date = $("input[name='changing_date']:checked").val();
			transferable = $("input[name='transferable']:checked").val();
			min_max_investment = $("input[name='min_max_investment']:checked").val();
			minimum_investment = $("#minimum_investment").val();
			maximum_investment = $("#maximum_investment").val();
			etherscan_verification = $("input[name='etherscan_verification']:checked").val();
			network_type = $("#network_id").val();
			if (whitelist == "on") {

				whitelist_addresses = [];
				for (let i = 0; i < $("#addresssize").val(); i++) {
					var address = $("#whitelist_address_" + i).val();
					if (address != "") {
						whitelist_addresses.push(address);
					}
				}


			}




			$.ajax({
				url: base_url + "/crowdsale/edit",
				type: "POST",
				data: {
					token_id: token_id,
					token_name: token_name,
					token_rate: token_rate,
					token_address: token_address,
					contract_name: contract_name,
					token_symbol: token_symbol,
					token_decimal: decimal_value,
					token_type: token_type,
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
					whitelist_address: whitelist_addresses,
				},
				success: function (resp) {
					stop_loader();

					$.growl.notice({
						message: ("Crowd Sale Updated Successfully")
					});
					$('.show_text').hide();
					stop_loader();
					saidMessage = true;
					saidAjax = true;

					setTimeout(function () {
						window.location.href = base_url + '/my-contract';
					}, 3000);
				}
			})

		}
		catch (e) {
			alert(e);
		}
	}
});
$('#airdrop_formedit').validate({

	submitHandler: function (form) {
		$('.show_text').show();
		start_loader();
		$(".deploy").hide();

		token_id = $("#token_id").val();
		token_name = $("#token_name").val();
		manage_address = $("#manage_address").val();
		token_address = $("#tokencontractaddress").val();
		network_type = $("#network_id").val();

		$.ajax({
			url: base_url + "/airdrop/edit",
			type: "POST",
			data: {
				token_id: token_id,
				token_name: token_name,
				manage_address: manage_address,
				token_address: token_address,
				network_type: network_type,
			},

			success: function (resp) {

				stop_loader();

				$.growl.notice({
					message: ("Air Contract Updated Successfully")
				});
				$('.show_text').hide();
				stop_loader();


				setTimeout(function () {
					window.location.href = base_url + '/my-contract';
				}, 3000);
			}
		});
	}

});



$("#editwill_contract_form").validate({

	submitHandler: function (form) {

		$('.show_text').show();
		start_loader();
		$(".deploy").hide();
		token_id = $("#token_id").val();
		contract_name = $("#contract_name").val();
		management_address = $("#management_address").val();
		beneficiary_address = $("#beneficiary_address").val();
		bsPoints = $("#bsPoints").val();
		email = $("#email").val();
		email_notification = $("#email_notification").val();
		transaction = $("#transaction").val();
		expiration = $("#expiration").val();
		sharevalue = $("#sharevalue").val();
		will_contract_expiration = $("#will_contract_expiration").val();
		cancel_contract = $("input[name='cancel_contract']:checked").val();
		confirm_contract = $("input[name='confirm_contract']:checked").val();
		network_type = $("#network_id").val();

		$.ajax({
			url: base_url + "/willcontract/edit",
			type: "POST",
			data: {
				token_id: token_id,
				management_address: management_address,
				contract_name: contract_name,
				beneficiary_address: beneficiary_address,
				token_decimal: token_decimal,
				bsPoints: bsPoints,
				sharevalue: sharevalue,
				email: email,
				network_type: network_type,
				email_notification: email_notification,
				transaction: transaction,
				expiration: expiration,
				will_contract_expiration: will_contract_expiration,
				cancel_contract: cancel_contract,
				confirm_contract: confirm_contract,
			},
			success: function (resp) {
				stop_loader();

				$.growl.notice({
					message: ("Will Contract Updated Successfully")
				});
				$('.show_text').hide();
				stop_loader();
				saidMessage = true;
				saidAjax = true;

				setTimeout(function () {
					window.location.href = base_url + '/my-contract';
				}, 3000);
			}
		})
	}
});


$("#editlostkeytoken_form").validate({

	submitHandler: function (form) {

		$('.show_text').show();
		start_loader();
		$(".deploy").hide();
		token_id = $("#token_id").val();
		reserve_address_1 = $("#reserve_address_1").val();
		bsPoints_1 = $("#bsRange_1").val();
		bsPoints_2 = $("#bsRange_2").val();
		bsPoints_3 = $("#bsRange_3").val();
		bsPoints_4 = $("#bsRange_4").val();
		bsPoints_5 = $("#bsRange_5").val();
		email_1 = $("#email_1").val();
		email_2 = $("#email_2").val();
		email_3 = $("#email_3").val();
		email_4 = $("#email_4").val();
		email_5 = $("#email_5").val();
		reserve_address_2 = $("#reserve_address_2").val();
		reserve_address_3 = $("#reserve_address_3").val();
		reserve_address_4 = $("#reserve_address_4").val();
		reserve_address_5 = $("#reserve_address_5").val();
		token_name = $("#contract_name").val();
		network_type = $("#network_id").val();
		lost_key_id = $("#token_name").val();


		$.ajax({
			url: base_url + "/lostkeytoken/edit",
			type: "POST",
			data: {
				token_id: token_id,
				management_address: management_address,
				token_id: token_id,
				lost_key_id: lost_key_id,
				reserve_address_1: reserve_address_1,
				reserve_address_2: reserve_address_2,
				reserve_address_3: reserve_address_3,
				reserve_address_4: reserve_address_4,
				reserve_address_5: reserve_address_5,
				bsPoints_1: bsPoints_1,
				bsPoints_2: bsPoints_2,
				bsPoints_3: bsPoints_3,
				bsPoints_4: bsPoints_4,
				bsPoints_5: bsPoints_5,
				email_1: email_1,
				email_2: email_2,
				email_3: email_3,
				email_4: email_4,
				email_5: email_5,
				token_name: token_name,
				network_type: network_type,
			},
			success: function (resp) {
				stop_loader();

				$.growl.notice({
					message: ("Lostkey Token Updated Successfully")
				});
				$('.show_text').hide();
				stop_loader();
				saidMessage = true;
				saidAjax = true;

				setTimeout(function () {
					window.location.href = base_url + '/my-contract';
				}, 3000);
			}
		})
	}
});


$("#editlostkey_form").validate({

	submitHandler: function (form) {

		$('.show_text').show();
		start_loader();
		$(".deploy").hide();
		token_id = $("#token_id").val();
		reserve_address_1 = $("#reserve_address_1").val();
		bsPoints_1 = $("#bsRange_1").val();
		bsPoints_2 = $("#bsRange_2").val();
		bsPoints_3 = $("#bsRange_3").val();
		bsPoints_4 = $("#bsRange_4").val();
		bsPoints_5 = $("#bsRange_5").val();
		email_1 = $("#email_1").val();
		email_2 = $("#email_2").val();
		email_3 = $("#email_3").val();
		email_4 = $("#email_4").val();
		email_5 = $("#email_5").val();
		reserve_address_2 = $("#reserve_address_2").val();
		reserve_address_3 = $("#reserve_address_3").val();
		reserve_address_4 = $("#reserve_address_4").val();
		reserve_address_5 = $("#reserve_address_5").val();
		token_name = $("#contract_name").val();
		lost_key_id = $("#token_name").val();

		network_type = $("#network_id").val();

		$.ajax({
			url: base_url + "/lostkeycontract/edit",
			type: "POST",
			data: {
				token_id: token_id,
				management_address: management_address,
				token_id: token_id,
				lost_key_id: lost_key_id,
				reserve_address_1: reserve_address_1,
				reserve_address_2: reserve_address_2,
				reserve_address_3: reserve_address_3,
				reserve_address_4: reserve_address_4,
				reserve_address_5: reserve_address_5,
				bsPoints_1: bsPoints_1,
				bsPoints_2: bsPoints_2,
				bsPoints_3: bsPoints_3,
				bsPoints_4: bsPoints_4,
				bsPoints_5: bsPoints_5,
				email_1: email_1,
				email_2: email_2,
				email_3: email_3,
				email_4: email_4,
				email_5: email_5,
				token_name: token_name,
			},
			success: function (resp) {
				stop_loader();

				$.growl.notice({
					message: ("Lostkey Contract Updated Successfully")
				});
				$('.show_text').hide();
				stop_loader();
				saidMessage = true;
				saidAjax = true;

				setTimeout(function () {
					window.location.href = base_url + '/my-contract';
				}, 3000);
			}
		})
	}
});