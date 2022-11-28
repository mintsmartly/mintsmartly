$(".create1").click(function (event) {
    if (login_type == "no") {


    }
    else {
        $('.show_text').show();
        start_loader();
        $(".deploy").hide();
        token_type = $("#token_type").val();
        network_type = $("#network_type").val();
        token_address = $("#network_type").val();
        token_name = $("#token_name").val();
        token_symbol = $("#token_symbol").val();
        token_decimal = $("#token_decimal").val();
        token_supply = $("#token_supply").val();
        token_typecheck = $("input[name='token_type']:checked").val();
        token_owner = $("#token_owner").val();
        future_minting = $("input[name='future_minting']:checked").val();
        branded_report = $("input[name='branded_report']:checked").val();
        scan_verification = $("input[name='scan_verification']:checked").val();
        white_label = $("input[name='white_label']:checked").val();
        network_type = $("#network_id").val();
        if (token_name == "" || token_symbol == "" || token_decimal == "" || token_owner == "" || token_supply == "") {
            $.growl.error({
                message: ("Please Fill Token Name,Token Symbol,Token Owner,Token Supply  !")
            }, {})
            $(".deploy").show();
            $('.show_text').hide();
            stop_loader();
        } else {
            $.ajax({
                url: base_url + "/store",
                type: "POST",
                data: {
                    token_address: token_address,
                    token_name: token_name,
                    token_symbol: token_symbol,
                    token_decimal: token_decimal,
                    user_address: token_owner,
                    token_supply: token_supply,
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
                        message: ("Token Contract Created Successfully")
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








//airdrop
$(".create4").on("click", function (e) {

    if (login_type == "no") {


    }
    else {

        token_name = $("#token_name").val();
        manage_address = $("#manage_address").val();
        token_address = $("#tokencontractaddress").val();
        network_type = $("#network_id").val();
        token_decimal = $(".token_decimal").html();
        token_symbol = $(".token_symbol").html();
        if (token_name != "" || token_address != "") {
            $.ajax({
                url: base_url + "/addairdropcontract",
                type: "POST",
                data: {
                    token_name: token_name,
                    manage_address: manage_address,
                    token_address: token_address,
                    network_type: network_type,
                    token_symbol: token_symbol,
                    token_decimal: token_decimal,
                },
                success: async function (resp) {
                    stop_loader();

                    $.growl.notice({
                        message: ("Airdrop Contract Created Successfully")
                    });
                    $('.show_text').hide();
                    stop_loader();

                    setTimeout(function () {
                        window.location.href = base_url + '/my-contract';

                    }, 3000);
                }
            });
        }
        else {
            $.growl.error({
                message: ("Please Provide Token Name,Token Symbol,Token Owner  !")
            }, {})
            $(".deploy").show();
            $('.show_text').hide();
            stop_loader();
        }
    }
    e.preventDefault();
});



//lost key contact
$(".create6").click(function () {

});

//Will Contract
$(".create7").click(function () {

});