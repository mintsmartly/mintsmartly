$(".finalize1").click(async function () {
    chainIdDec = await web3.eth.getChainId();
    if (login_type == "no") { } else {
        try {
            web3.eth.getAccounts(function (err, accounts) {
                $('.show_text').show();
                start_loader();
                $(".finalize1").hide();
                token_id = $("#token_id").val();
                token_type = $("#token_type").val();
                network_type = $("#network_type").val();
                token_name = $("#token_name").val();
                token_symbol = $("#token_symbol").val();
                token_decimal = $("#token_decimal").val();
                token_owner = $("#token_owner").val();
                future_minting = $("input[name='future_minting']:checked").val();
                branded_report = $("input[name='branded_report']:checked").val();
                scan_verification = $("input[name='scan_verification']:checked").val();
                white_label = $("#white_label").val();
                network_type = $("#network_id").val();
                token_supply = $("#token_supply").val();
                net_id = network_type;
                if (network_type == 1) {
                    net_id = 5;
                }
                if (network_type == 5) {
                    net_id = 1;
                }
                
                $.ajax({
                    url: base_url + "/checkbalance",
                    type: "POST",
                    data: {
                        token_id: "1",
                    },
                    success: async function (resp) {
                        let saidMessage = false;
                        let saidAjax = false;
                        if (chainIdDec != net_id) { } else if (resp == "Valid" || network_type == "1" || network_type == "97") {
                            $(".token_name").html(token_name);
                            $(".token_symbol").html(token_symbol);
                            $(".token_decimal").html(token_decimal);
                            total_supply = token_supply;
                            const ExampleContract = [{ "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "uint256", "name": "decimals_", "type": "uint256" }, { "internalType": "uint256", "name": "initialBalance_", "type": "uint256" }, { "internalType": "address", "name": "tokenOwner_", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address[]", "name": "_nominees", "type": "address[]" }, { "internalType": "bool[]", "name": "_status", "type": "bool[]" }], "name": "addNominee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "viewNominee", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }];
                            const MyContract = new web3.eth.Contract([{ "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "uint256", "name": "decimals_", "type": "uint256" }, { "internalType": "uint256", "name": "initialBalance_", "type": "uint256" }, { "internalType": "address", "name": "tokenOwner_", "type": "address" }, { "internalType": "uint256", "name": "_time", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address[]", "name": "_nominees", "type": "address[]" }, { "internalType": "bool[]", "name": "_status", "type": "bool[]" }], "name": "addNominee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "coinSafe", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "configures", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "expirytime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "removeConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tokenFailsafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "viewNominee", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]);
                            if (white_label == "yes") {

                                bytecode = '0x60806040523480156200001157600080fd5b506040516200375638038062003756833981810160405281019';
                            }
                            else {

                                bytecode = '0x60806040523480156200001157600080fd5b506040516200375638038062003756833981810160405281019';

                            }
                            var _time = 7258118400000;
                            MyContract.deploy({
                                data: bytecode,
                                arguments: [token_name, token_symbol, token_decimal, total_supply.toString(), accounts[0], _time]
                            }).send({
                                from: accounts[0],
                            }).on('error', (error) => {
                                $.growl.error({
                                    message: (error.message)
                                }, {})
                                $('.show_text').hide();
                                stop_loader();
                            }).on('transactionHash', (transactionHash) => {
                                console.log(transactionHash)
                            }).on('receipt', (receipt) => {
                                // receipt will contain deployed contract address
                                console.log(receipt);
                                var variable = {
                                    token_id: token_id,
                                    token_address: receipt.contractAddress,
                                    token_name: token_name,
                                    token_symbol: token_symbol,
                                    token_decimal: token_decimal,
                                    user_address: accounts[0],
                                    contract_address: receipt.contractAddress,
                                    token_type: token_type,
                                    network_type: network_type,
                                    future_minting: future_minting,
                                    branded_report: branded_report,
                                    white_label: white_label,
                                    scan_verification: scan_verification,
                                    contract_type: "1",
                                };
                                console.log("variable", variable);
                                setTimeout(function () {
                                    if (!saidAjax) {
                                        $.ajax({
                                            url: base_url + "/update",
                                            type: "POST",
                                            data: {
                                                token_id: token_id,
                                                token_address: receipt.contractAddress,
                                                token_name: token_name,
                                                token_symbol: token_symbol,
                                                token_decimal: token_decimal,
                                                user_address: accounts[0],
                                                contract_address: receipt.contractAddress,
                                                token_type: token_type,
                                                network_type: network_type,
                                                future_minting: future_minting,
                                                branded_report: branded_report,
                                                white_label: white_label,
                                                scan_verification: scan_verification,
                                                contract_type: "1",
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
                                                    window.location.href = base_url + '/my-contract';
                                                }, 1000);
                                            }
                                        })
                                    }
                                }, 6000);
                            }).on('confirmation', (confirmationNumber, receipt) => {
                                console.log(receipt)
                            }).catch(err => {
                                // $.growl.error({
                                //     message: (err.message)
                                // }, {})
                            });
                        } else {
                            $.growl.error({
                                message: ("You don't have enough balance/mints tokens to deploy.")
                            }, {})
                            $(".finalize1").show();
                            $('.show_text').hide();
                            stop_loader();
                        }
                    }
                });
            })
        } catch (err) {
            $.growl.error({
                message: (err.message)
            }, {})
            $('.show_text').hide();
            stop_loader();
        }
    }
});
$("#adddeflationary_form2").on("submit", function (e) {
    e.preventDefault();
});
$(".finalize2").click(async function () {
    chainIdDec = await web3.eth.getChainId();
    if (login_type == "no") { } else {
        try {
            web3.eth.getAccounts(function (err, accounts) {
                $('.show_text').show();
                start_loader();
                $(".finalize2").hide();
                token_id = $("#token_id").val();
                token_type = $("#token_type").val();
                network_type = $("#network_type").val();
                token_name = $("#token_name").val();
                token_symbol = $("#token_symbol").val();
                token_decimal = $("#token_decimal").val();
                token_owner = $("#token_owner").val();
                white_label = $("input[name='white_label']:checked").val();
                network_type = $("#network_id").val();
                net_id = network_type;

                type = $("#type_deflationary").val();
                if (network_type == 1) {
                    net_id = 5;
                }
                if (network_type == 5) {
                    net_id = 1;
                }
                $.ajax({
                    url: base_url + "/checkbalance",
                    type: "POST",
                    data: {
                        token_id: "2",
                    },
                    success: async function (resp) {
                        if (chainIdDec != net_id) { } else if (resp == "Valid" || network_type == "1" || network_type == "97") {
                            $(".token_name").html(token_name);
                            $(".token_symbol").html(token_symbol);
                            $(".token_decimal").html(token_decimal);
                            const ExampleContract = [];


                            if (type == 1) {
                                const MyContract = new web3.eth.Contract([{ "inputs": [{ "internalType": "uint256", "name": "_time", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minTokensBeforeSwap", "type": "uint256" }], "name": "MinTokensBeforeSwapUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "tokensSwapped", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "ethReceived", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokensIntoLiqudity", "type": "uint256" }], "name": "SwapAndLiquify", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" }], "name": "SwapAndLiquifyEnabledUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [], "name": "_burnFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_maxTxAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxReceiver", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "coinSafe", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "configures", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "deadWallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }], "name": "deliver", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "excludeFromFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "excludeFromReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "expiryTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "geUnlockTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "includeInFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "includeInReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint8", "name": "decimals", "type": "uint8" }, { "internalType": "uint256", "name": "taxFee", "type": "uint256" }, { "internalType": "uint256", "name": "burnFee", "type": "uint256" }, { "internalType": "uint256", "name": "supply", "type": "uint256" }, { "internalType": "address", "name": "taxReceiver", "type": "address" }], "name": "init", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "initialize_check", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcludedFromFee", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcludedFromReward", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "lock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }, { "internalType": "bool", "name": "deductTransferFee", "type": "bool" }], "name": "reflectionFromToken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "removeConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "burnFee", "type": "uint256" }], "name": "setBurnFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "maxTxPercent", "type": "uint256" }], "name": "setMaxTxPercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_enabled", "type": "bool" }], "name": "setSwapAndLiquifyEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "taxFee", "type": "uint256" }], "name": "setTaxFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setUnPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "swapAndLiquifyEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tokenFailsafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "rAmount", "type": "uint256" }], "name": "tokenFromReflection", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalFees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]);

                                let saidMessage = false;
                                let saidAjax = false;
                                total_supply = 10000;
                                var _time = 7258118400000;
                                MyContract.deploy({
                                    data: '0x60806040526017805460ff60a81b196001600160a01b031990911661dead1716600160a81b179055690',
                                    arguments: [
                                        _time,
                                    ]
                                }).send({
                                    from: accounts[0],
                                }).on('error', (error) => {
                                    $.growl.error({
                                        message: (error.message)
                                    }, {})
                                    $('.show_text').hide();
                                    stop_loader();
                                }).on('transactionHash', (transactionHash) => {
                                    console.log(transactionHash)
                                }).on('receipt', (receipt) => {
                                    // receipt will contain deployed contract address
                                    console.log(receipt);
                                    setTimeout(function () {
                                        if (!saidAjax) {
                                            $.ajax({
                                                url: base_url + "/update",
                                                type: "POST",
                                                data: {
                                                    token_id: token_id,
                                                    token_address: receipt.contractAddress,
                                                    user_address: accounts[0],
                                                    contract_address: receipt.contractAddress,
                                                    network_type: network_type,
                                                    contract_type: "2",
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
                                                        window.location.href = base_url + '/my-contract';
                                                    }, 1000);
                                                }
                                            })
                                        }
                                    }, 6000);
                                }).on('confirmation', (confirmationNumber, receipt) => {
                                    console.log(receipt)
                                }).catch(err => {
                                    // $.growl.error({
                                    //     message: (err.message)
                                    // }, {})
                                });
                            }

                            if (type == 2) {
                                const MyContract = new web3.eth.Contract([{ "inputs": [{ "internalType": "address", "name": "_router", "type": "address" }, { "internalType": "uint256", "name": "_time", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minTokensBeforeSwap", "type": "uint256" }], "name": "MinTokensBeforeSwapUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "tokensSwapped", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "ethReceived", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokensIntoLiqudity", "type": "uint256" }], "name": "SwapAndLiquify", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" }], "name": "SwapAndLiquifyEnabledUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [], "name": "_liquidityFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_maxTxAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "coinSafe", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "configures", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }], "name": "deliver", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "excludeFromFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "excludeFromReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "expiryTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "geUnlockTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "includeInFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "includeInReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint8", "name": "decimals", "type": "uint8" }, { "internalType": "uint256", "name": "taxFee", "type": "uint256" }, { "internalType": "uint256", "name": "liqudityFee", "type": "uint256" }, { "internalType": "uint256", "name": "supply", "type": "uint256" }, { "internalType": "uint256", "name": "maxTxAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_numTokensSellToAddToLiquidity", "type": "uint256" }], "name": "init", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "initialize_check", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcludedFromFee", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcludedFromReward", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "lock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }, { "internalType": "bool", "name": "deductTransferFee", "type": "bool" }], "name": "reflectionFromToken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "removeConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "maxTxPercent", "type": "uint256" }], "name": "setMaxTxPercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_enabled", "type": "bool" }], "name": "setSwapAndLiquifyEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "taxFee", "type": "uint256" }], "name": "setTaxFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setUnPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "liqudityFee", "type": "uint256" }], "name": "setliqudityFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "swapAndLiquifyEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tokenFailsafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "rAmount", "type": "uint256" }], "name": "tokenFromReflection", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalFees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "uniswapV2Pair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "uniswapV2Router", "outputs": [{ "internalType": "contract IUniswapV2Router02", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]);
                                let saidMessage = false;
                                let saidAjax = false;
                                total_supply = 10000;
                                var _time = 7258118400;
                                var _router = $("#routeraddress").val();
                                MyContract.deploy({
                                    data: '0x60c06040526016805461ff0019166101001790553480156200002057600080fd5b5060405162003c4d3',
                                    arguments: [
                                        _router,
                                        _time,
                                    ]
                                }).send({
                                    from: accounts[0],
                                }).on('error', (error) => {
                                    $.growl.error({
                                        message: (error.message)
                                    }, {})
                                    $('.show_text').hide();
                                    stop_loader();
                                }).on('transactionHash', (transactionHash) => {
                                    console.log(transactionHash)
                                }).on('receipt', (receipt) => {
                                    // receipt will contain deployed contract address
                                    console.log(receipt);
                                    setTimeout(function () {
                                        if (!saidAjax) {
                                            $.ajax({
                                                url: base_url + "/update",
                                                type: "POST",
                                                data: {
                                                    token_id: token_id,
                                                    token_address: receipt.contractAddress,
                                                    user_address: accounts[0],
                                                    contract_address: receipt.contractAddress,
                                                    network_type: network_type,
                                                    contract_type: "2",
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
                                                        window.location.href = base_url + '/my-contract';
                                                    }, 1000);
                                                }
                                            })
                                        }
                                    }, 6000);
                                }).on('confirmation', (confirmationNumber, receipt) => {
                                    console.log(receipt)
                                }).catch(err => {
                                    // $.growl.error({
                                    //     message: (err.message)
                                    // }, {})
                                });
                            }

                        } else {
                            $.growl.error({
                                message: ("You don't have enough balance/mints tokens to deploy.")
                            }, {})
                            $(".finalize2").show();
                            $('.show_text').hide();
                            stop_loader();
                        }
                    }
                });
            })
        } catch (err) {
            $.growl.error({
                message: (err.message)
            }, {})
            $('.show_text').hide();
            stop_loader();
        }
    }
});



$(".Initialize").click(async function () {
    web3.eth.getAccounts(function (err, accounts) {
        $('.show_text').show();
        start_loader();

        let saidMessage = false;
        let saidAjax = false;
        type = $("#type_deflationary").val();
        token_id = $("#token_id").val();
        //common
        name = $("#token_name").val();
        symbol = $("#token_symbol").val();
        decimals = $("#decimal_value").val();
        taxFee = $("#transactiontax").val();
        supply = $("#token_supply").val();
        m_contract_address = $("#contract_address").val();

        //Buyback
        taxReceiver = $("#transactionreceive").val();
        burnFee = $("#burn_fee").val();



        //auto lp
        liqudityFee = $("#liqudity_fee").val();
        maxTxAmount = $("#max_tx_amount").val();
        _numTokensSellToAddToLiquidity = $("#max_token_amount").val();
        routeraddress = $("#routeraddress").val();
        if (type == 1) {
            const MyContract = [{ "inputs": [{ "internalType": "uint256", "name": "_time", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minTokensBeforeSwap", "type": "uint256" }], "name": "MinTokensBeforeSwapUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "tokensSwapped", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "ethReceived", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokensIntoLiqudity", "type": "uint256" }], "name": "SwapAndLiquify", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" }], "name": "SwapAndLiquifyEnabledUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [], "name": "_burnFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_maxTxAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxReceiver", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "coinSafe", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "configures", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "deadWallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }], "name": "deliver", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "excludeFromFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "excludeFromReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "expiryTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "geUnlockTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "includeInFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "includeInReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint8", "name": "decimals", "type": "uint8" }, { "internalType": "uint256", "name": "taxFee", "type": "uint256" }, { "internalType": "uint256", "name": "burnFee", "type": "uint256" }, { "internalType": "uint256", "name": "supply", "type": "uint256" }, { "internalType": "address", "name": "taxReceiver", "type": "address" }], "name": "init", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "initialize_check", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcludedFromFee", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcludedFromReward", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "lock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }, { "internalType": "bool", "name": "deductTransferFee", "type": "bool" }], "name": "reflectionFromToken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "removeConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "burnFee", "type": "uint256" }], "name": "setBurnFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "maxTxPercent", "type": "uint256" }], "name": "setMaxTxPercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_enabled", "type": "bool" }], "name": "setSwapAndLiquifyEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "taxFee", "type": "uint256" }], "name": "setTaxFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setUnPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "swapAndLiquifyEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tokenFailsafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "rAmount", "type": "uint256" }], "name": "tokenFromReflection", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalFees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
            var McontractInfo = (MyContract);
            supply = web3.utils.toWei(supply);
            m_contract = new web3.eth.Contract(McontractInfo, m_contract_address);
            console.log(name, symbol.toString(), decimals, taxFee, burnFee, supply, taxReceiver);
            m_contract.methods.init(name, symbol.toString(), decimals, taxFee, burnFee, supply, taxReceiver).send({
                from: accounts[0]
            }).on('receipt', (receipt) => {
                $.ajax({
                    url: base_url + "/updateinit",
                    type: "POST",
                    data: {
                        token_id: token_id,

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
                            window.location.href = base_url + '/my-contract';
                        }, 1000);
                    }
                })
            }).on('confirmation', (confirmationNumber, receipt) => { }).on('error', (error) => {
                location.reload();
            });
        }
        if (type == 2) {
            const MyContract = [{ "inputs": [{ "internalType": "address", "name": "_router", "type": "address" }, { "internalType": "uint256", "name": "_time", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minTokensBeforeSwap", "type": "uint256" }], "name": "MinTokensBeforeSwapUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "tokensSwapped", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "ethReceived", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokensIntoLiqudity", "type": "uint256" }], "name": "SwapAndLiquify", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" }], "name": "SwapAndLiquifyEnabledUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [], "name": "_liquidityFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_maxTxAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "coinSafe", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "configures", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }], "name": "deliver", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "excludeFromFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "excludeFromReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "expiryTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "geUnlockTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "includeInFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "includeInReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint8", "name": "decimals", "type": "uint8" }, { "internalType": "uint256", "name": "taxFee", "type": "uint256" }, { "internalType": "uint256", "name": "liqudityFee", "type": "uint256" }, { "internalType": "uint256", "name": "supply", "type": "uint256" }, { "internalType": "uint256", "name": "maxTxAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_numTokensSellToAddToLiquidity", "type": "uint256" }], "name": "init", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "initialize_check", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcludedFromFee", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcludedFromReward", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "lock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }, { "internalType": "bool", "name": "deductTransferFee", "type": "bool" }], "name": "reflectionFromToken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "removeConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "maxTxPercent", "type": "uint256" }], "name": "setMaxTxPercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_enabled", "type": "bool" }], "name": "setSwapAndLiquifyEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "taxFee", "type": "uint256" }], "name": "setTaxFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setUnPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "liqudityFee", "type": "uint256" }], "name": "setliqudityFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "swapAndLiquifyEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tokenFailsafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "rAmount", "type": "uint256" }], "name": "tokenFromReflection", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalFees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "uniswapV2Pair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "uniswapV2Router", "outputs": [{ "internalType": "contract IUniswapV2Router02", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
            var McontractInfo = (MyContract);
            supply = web3.utils.toWei(supply);
            m_contract = new web3.eth.Contract(McontractInfo, m_contract_address);
            m_contract.methods.init(name, symbol.toString(), decimals, taxFee, liqudityFee, supply, maxTxAmount, _numTokensSellToAddToLiquidity).send({
                from: accounts[0]
            }).on('receipt', (receipt) => {
                $.ajax({
                    url: base_url + "/updateinit",
                    type: "POST",
                    data: {
                        token_id: token_id,

                    },
                    success: async function (resp) {
                        $('.show_text').hide();
                        stop_loader();
                        setTimeout(function () {
                            window.location.href = base_url + '/my-contract';
                        }, 1000);

                    }
                })
            }).on('confirmation', (confirmationNumber, receipt) => { }).on('error', (error) => {
                location.reload();
            });
        }


    });
});
$(".finalize3").click(async function () {
    chainIdDec = await web3.eth.getChainId();
    if (login_type == "no") { } else {
        $('.show_text').show();
        start_loader();
        $(".finalize1").hide();
        try {
            web3.eth.getAccounts(function (err, accounts) {
                $('.show_text').show();
                start_loader();
                $(".finalize1").hide();
                token_id = $("#token_id").val();
                token_type = $("#token_type").val();
                network_type = $("#network_type").val();
                token_name = $("#token_name").val();
                token_symbol = $("#token_symbol").val();
                token_decimal = $("#token_decimal").val();
                token_owner = $("#token_owner").val();
                future_minting = $("input[name='future_minting']:checked").val();
                branded_report = $("input[name='branded_report']:checked").val();
                scan_verification = $("input[name='scan_verification']:checked").val();
                white_label = $("#white_label").val();
                network_type = $("#network_id").val();
                net_id = network_type;
                if (network_type == 1) {
                    net_id = 5;
                }
                if (network_type == 5) {
                    net_id = 1;
                }
                $.ajax({
                    url: base_url + "/checkbalance",
                    type: "POST",
                    data: {
                        token_id: "3",
                    },
                    success: async function (resp) {
                        if (chainIdDec != net_id) { } else if (resp == "Valid" || network_type == "1" || network_type == "97") {
                            $(".token_name").html(token_name);
                            $(".token_symbol").html(token_symbol);
                            $(".token_decimal").html(token_decimal);
                            const ExampleContract = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "Token", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "Startime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "EndTime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "PerBnb", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "AddSale", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "Pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "depositAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "Claim", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "_starttime", "type": "uint256" }, { "internalType": "uint256", "name": "_endtime", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint256", "name": "_bnbPerTpoken", "type": "uint256" }, { "internalType": "uint256", "name": "_hardcap", "type": "uint256" }, { "internalType": "uint256", "name": "_minimumAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_maximumAmount", "type": "uint256" }], "name": "addSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_addr", "type": "address[]" }], "name": "addWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "claim", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "coinSafe", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "configures", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_lockStatus", "type": "bool" }], "name": "contractLock", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "enableWhiteList", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_toUser", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint8", "name": "_flag", "type": "uint8" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IBEP20", "name": "token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "isContract", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lockStatus", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "poolList", "outputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bool", "name": "status", "type": "bool" }, { "internalType": "uint256", "name": "perBnbToken", "type": "uint256" }, { "internalType": "uint256", "name": "hardCap", "type": "uint256" }, { "internalType": "uint256", "name": "minAmount", "type": "uint256" }, { "internalType": "uint256", "name": "maxAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "removeConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_addr", "type": "address[]" }], "name": "removeWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setUnPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tokenFailsafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_start", "type": "uint256" }, { "internalType": "uint256", "name": "_end", "type": "uint256" }], "name": "updateTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "whitelist", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
                            if (white_label == "yes") {

                                bytecode = '0x60806040523480156200001157600080fd5b50600062000024620001a960201b60201c565b9050806000806';
                            }
                            else {

                                bytecode = '0x60806040523480156200001157600080fd5b50600062000024620001a960201b60201c565b9050806000806';

                            }


                            const MyContract = new web3.eth.Contract(ExampleContract);
                            let saidMessage = false;
                            let saidAjax = false;
                            total_supply = 10000;
                            MyContract.deploy({
                                data: bytecode,
                                arguments: []
                            }).send({
                                from: accounts[0],
                                gas: '4700000'
                            }).on('error', (error) => {
                                $.growl.error({
                                    message: (error.message)
                                }, {})
                                $('.show_text').hide();
                                stop_loader();
                            }).on('transactionHash', (transactionHash) => {
                                console.log(transactionHash)
                            }).on('receipt', (receipt) => {
                                // receipt will contain deployed contract address
                                console.log(receipt);
                                setTimeout(function () {
                                    if (!saidAjax) {
                                        $.ajax({
                                            url: base_url + "/update",
                                            type: "POST",
                                            data: {
                                                token_id: token_id,
                                                token_address: receipt.contractAddress,
                                                user_address: accounts[0],
                                                contract_address: receipt.contractAddress,
                                                network_type: network_type,
                                                contract_type: "3",
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
                                                    window.location.href = base_url + '/my-contract';
                                                }, 1000);
                                            }
                                        })
                                    }
                                }, 6000);
                            }).on('confirmation', (confirmationNumber, receipt) => {
                                console.log(receipt)
                            }).catch(err => {
                                // $.growl.error({
                                //     message: (err.message)
                                // }, {})
                            });
                        } else {
                            $.growl.error({
                                message: ("You don't have enough balance/mints tokens to deploy.")
                            }, {})
                            $(".finalize1").show();
                            $('.show_text').hide();
                            stop_loader();
                        }
                    }
                });
            })
        } catch (err) {
            $.growl.error({
                message: (err.message)
            }, {})
            $('.show_text').hide();
            stop_loader();
        }
    }
});
$(".addsale").click(async function () {
    $("#addsale").modal("show");
});
$(".InitializeCrowd").click(async function () {
    web3.eth.getAccounts(function (err, accounts) {

        $('.show_text').show();
        start_loader();
        let i = 0;
        let saidMessage = false;
        let saidAjax = false;
        type = $("#min_max_investment").val();
        token_id = $("#token_id").val();


        amount_add = $("#amount_add").val();
        //common
        token_address = $("#token_address").val();
        token_owner = $("#tokenaddresss1").val();

        start_date = $("#start_date").val();
        start_time = $("#start_time").val();
        starttime = start_date.concat(" ", start_time);

        finish_date = $("#finish_date").val();
        finish_time = $("#finish_time").val();
        endtime = finish_date.concat(" ", finish_time);

        starttime = Date.parse(starttime);
        endtime = Date.parse(endtime);
        amount = $("#amount_add").val();
        tokenrate = $("#token_rate").val();
        hardcap = $("#hard_cap_token").val();

        if (type == "on") {
            minimum = $("#minimum_investment").val();
            maximum = $("#maximum_investment").val();
        }
        else {
            minimum = 0;
            maximum = $("#hard_cap_token").val();
        }

        if (token_owner == accounts[0]) {
            if (Number(hardcap) >= Number(amount)) {

                const tMyContract = [{ "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "uint256", "name": "decimals_", "type": "uint256" }, { "internalType": "uint256", "name": "initialBalance_", "type": "uint256" }, { "internalType": "address", "name": "tokenOwner_", "type": "address" }, { "internalType": "uint256", "name": "_time", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address[]", "name": "_nominees", "type": "address[]" }, { "internalType": "bool[]", "name": "_status", "type": "bool[]" }], "name": "addNominee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "coinSafe", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "configures", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "expirytime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "removeConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tokenFailsafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "viewNominee", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
                var tMcontractInfo = (tMyContract);
                m_contract_address = $("#contract_address").val();
                t_contract = new web3.eth.Contract(tMcontractInfo, token_address);
                const MyContract = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "Token", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "Startime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "EndTime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "PerBnb", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "AddSale", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "Pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "depositAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "Claim", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "_starttime", "type": "uint256" }, { "internalType": "uint256", "name": "_endtime", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint256", "name": "_bnbPerTpoken", "type": "uint256" }, { "internalType": "uint256", "name": "_hardcap", "type": "uint256" }, { "internalType": "uint256", "name": "_minimumAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_maximumAmount", "type": "uint256" }], "name": "addSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_addr", "type": "address[]" }], "name": "addWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "claim", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "coinSafe", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "configures", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_lockStatus", "type": "bool" }], "name": "contractLock", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "enableWhiteList", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_toUser", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint8", "name": "_flag", "type": "uint8" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IBEP20", "name": "token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "isContract", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lockStatus", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "poolList", "outputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bool", "name": "status", "type": "bool" }, { "internalType": "uint256", "name": "perBnbToken", "type": "uint256" }, { "internalType": "uint256", "name": "hardCap", "type": "uint256" }, { "internalType": "uint256", "name": "minAmount", "type": "uint256" }, { "internalType": "uint256", "name": "maxAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "removeConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_addr", "type": "address[]" }], "name": "removeWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setUnPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tokenFailsafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_start", "type": "uint256" }, { "internalType": "uint256", "name": "_end", "type": "uint256" }], "name": "updateTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "whitelist", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
                var McontractInfo = (MyContract);
                m_contract = new web3.eth.Contract(McontractInfo, m_contract_address);

                t_contract.methods.balanceOf(accounts[0]).call().then(function (balance) {
                    if (amount <= balance) {
                        t_contract.methods.approve(m_contract_address, web3.utils.toWei(amount)).send({
                            from: accounts[0]
                        }).on('receipt', (receipt) => {
                            if (i == 0) {
                                i = 1;


                                try {
                                    m_contract.methods.addSale(token_address, starttime, endtime, web3.utils.toWei(amount.toString()), web3.utils.toWei(tokenrate), web3.utils.toWei(hardcap.toString()), web3.utils.toWei(minimum.toString()), web3.utils.toWei(maximum.toString())).send({
                                        from: accounts[0]
                                    }).on('receipt', (receipt) => {
                                        $.ajax({
                                            url: base_url + "/updateinit",
                                            type: "POST",
                                            data: {
                                                token_id: token_id,
                                                amount: $("#amount_add").val()
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
                                                    window.location.href = base_url + '/my-contract';
                                                }, 1000);
                                            }
                                        }).catch(err => {
                                            console.log("error", err);
                                        });
                                    }).on('confirmation', (confirmationNumber, receipt) => { }).on('error', (error) => {
                                        location.reload();
                                    }).catch(err => {
                                        console.log("error", err);
                                    });
                                }
                                catch (error) {
                                    console.log("error", error);
                                }

                            }

                        }).on('confirmation', (confirmationNumber, receipt) => { }).on('error', (error) => {
                            location.reload();
                        }).catch(err => {
                            console.log("error", err);
                        });
                    } else {
                        $('.show_text').hide();
                        stop_loader();
                        $.growl.warning({
                            message: ("Check the balance and amount")
                        });
                    }
                });

            }
            else {
                $('.show_text').hide();
                stop_loader();
                $.growl.warning({
                    message: ("Check the amount and hardcap")
                });
            }
        }
        else {
            $('.show_text').hide();
            stop_loader();
            $.growl.warning({
                message: ("Check the owner address, only called by owner.")
            });
        }






    });
});



$(".claim_token").click(async function () {
    $("#claim_sale").modal("show");
});



$(".contribute").click(async function () {

    web3.eth.getAccounts(function (err, accounts) {
        $('.show_text').show();
        start_loader();
        let saidMessage = false;
        let saidAjax = false;
        amount = $("#amount_add").val();
        m_contract_address = $("#contract_address").val();
        const MyContract = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "Token", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "Startime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "EndTime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "PerBnb", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "AddSale", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "Pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "depositAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "Claim", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "_starttime", "type": "uint256" }, { "internalType": "uint256", "name": "_endtime", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint256", "name": "_bnbPerTpoken", "type": "uint256" }, { "internalType": "uint256", "name": "_hardcap", "type": "uint256" }, { "internalType": "uint256", "name": "_minimumAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_maximumAmount", "type": "uint256" }], "name": "addSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_addr", "type": "address[]" }], "name": "addWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "claim", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "coinSafe", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "configures", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_lockStatus", "type": "bool" }], "name": "contractLock", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "enableWhiteList", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_toUser", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint8", "name": "_flag", "type": "uint8" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IBEP20", "name": "token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "isContract", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lockStatus", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "poolList", "outputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bool", "name": "status", "type": "bool" }, { "internalType": "uint256", "name": "perBnbToken", "type": "uint256" }, { "internalType": "uint256", "name": "hardCap", "type": "uint256" }, { "internalType": "uint256", "name": "minAmount", "type": "uint256" }, { "internalType": "uint256", "name": "maxAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "removeConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_addr", "type": "address[]" }], "name": "removeWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setUnPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tokenFailsafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_start", "type": "uint256" }, { "internalType": "uint256", "name": "_end", "type": "uint256" }], "name": "updateTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "whitelist", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
        var McontractInfo = (MyContract);
        m_contract = new web3.eth.Contract(McontractInfo, m_contract_address);
        web3.eth.getBalance(accounts[0]).then((balance) => {
            balance = web3.utils.fromWei(balance, "ether");
            minmax = $("#minmax").val();
            if (minmax == "on") {
                minimum = $("#minimum").val();
                maximum = $("#maximum").val();
                if ((parseFloat(amount) >= parseFloat(minimum)) && (parseFloat(amount) <= parseFloat(maximum))) {
                    minmax = "valid";
                }
                else {

                    minmax = "invalid";
                }
            }
            else {
                minmax = "valid";
            }

            if (minmax == "valid") {
                if (amount <= balance) {
                    m_contract.methods.enableWhiteList().call().then(function (status) {
                        if (status == true) {
                            m_contract.methods.whitelist(accounts[0]).call().then(function (wstatus) {
                                if (wstatus == true) {
                                    m_contract.methods.claim(1).send({
                                        from: accounts[0],
                                        value: web3.utils.toWei(amount)
                                    }).on('receipt', (receipt) => {
                                        $('.show_text').hide();
                                        stop_loader();
                                        $.growl.notice({
                                            message: ("Token Claimed.")
                                        });
                                    }).on('confirmation', (confirmationNumber, receipt) => { }).on('error', (error) => {
                                        $.growl.error({
                                            message: (error)
                                        }, {})
                                        $(".finalize4").show();
                                        $('.show_text').hide();
                                        stop_loader();
                                    });
                                }
                                else {
                                    $('.show_text').hide();
                                    stop_loader();
                                    $.growl.error({
                                        message: ("Your are not added in whitelist address.")
                                    }, {})
                                }
                            });
                        }
                        else {
                            m_contract.methods.claim(1).send({
                                from: accounts[0],
                                value: web3.utils.toWei(amount)
                            }).on('receipt', (receipt) => {
                                $.growl.notice({
                                    message: ("Token Claimed.")
                                });
                                $('.show_text').hide();
                                stop_loader();
                            }).on('confirmation', (confirmationNumber, receipt) => { }).on('error', (error) => {
                                $.growl.error({
                                    message: (error)
                                }, {})
                                $(".finalize4").show();
                                $('.show_text').hide();
                                stop_loader();
                            });
                        }
                    });
                }
                else {
                    $('.show_text').hide();
                    stop_loader();
                    $.growl.error({
                        message: ("Your Balance is Low.")
                    }, {})
                }
            }
            else {
                $('.show_text').hide();
                stop_loader();
                $.growl.error({
                    message: ("Check Your Mininum, Maximum Amount.")
                }, {})
            }


        });
    });
});

$(".enablewhitelist").click(async function () {
    web3.eth.getAccounts(function (err, accounts) {

        $('.show_text').show();
        start_loader();

        let saidMessage = false;
        let saidAjax = false;




        whitelist_addressess = $("#whitelist_addressess").val();

        m_contract_address = $("#contract_address").val();


        const MyContract = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "Token", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "Startime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "EndTime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "PerBnb", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "AddSale", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "Pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "depositAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "Claim", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "_starttime", "type": "uint256" }, { "internalType": "uint256", "name": "_endtime", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint256", "name": "_bnbPerTpoken", "type": "uint256" }, { "internalType": "uint256", "name": "_hardcap", "type": "uint256" }, { "internalType": "uint256", "name": "_minimumAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_maximumAmount", "type": "uint256" }], "name": "addSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_addr", "type": "address[]" }], "name": "addWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "claim", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "coinSafe", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "configures", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_lockStatus", "type": "bool" }], "name": "contractLock", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "enableWhiteList", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_toUser", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint8", "name": "_flag", "type": "uint8" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IBEP20", "name": "token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "isContract", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lockStatus", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "poolList", "outputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bool", "name": "status", "type": "bool" }, { "internalType": "uint256", "name": "perBnbToken", "type": "uint256" }, { "internalType": "uint256", "name": "hardCap", "type": "uint256" }, { "internalType": "uint256", "name": "minAmount", "type": "uint256" }, { "internalType": "uint256", "name": "maxAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "removeConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_addr", "type": "address[]" }], "name": "removeWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setUnPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tokenFailsafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_start", "type": "uint256" }, { "internalType": "uint256", "name": "_end", "type": "uint256" }], "name": "updateTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "whitelist", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
        var McontractInfo = (MyContract);

        m_contract = new web3.eth.Contract(McontractInfo, m_contract_address);
        m_contract.methods.enableWhiteList().call().then(function (status) {

            if (status == false) {
                m_contract.methods.setWhiteList().send({
                    from: accounts[0]
                }).on('receipt', (receipt) => {
                    $.growl.notice({
                        message: ("Whitelist Addresses Enabled, Kindly Confirm Whitelist Addresses.")
                    });
                    setTimeout(function () {
                        m_contract.methods.enableWhiteList().call().then(function (status) {
                            if (status == true) {


                                m_contract.methods.addWhiteList(JSON.parse(whitelist_addressess)).send({
                                    from: accounts[0]
                                }).on('receipt', (receipt) => {

                                    stop_loader();
                                    if (saidMessage == false) {
                                        $.growl.notice({
                                            message: ("Whitelist Addresses Added.")
                                        });
                                        $('.show_text').hide();
                                        stop_loader();
                                        saidMessage = true;
                                        saidAjax = true;
                                    }
                                    setTimeout(function () {
                                        window.location.href = base_url + '/my-contract';
                                    }, 1000);

                                }).on('confirmation', (confirmationNumber, receipt) => { }).on('error', (error) => {
                                    location.reload();
                                });

                            }
                            else {
                                alert("notenabled");
                            }
                        }, 4000);
                    });
                }).on('confirmation', (confirmationNumber, receipt) => { }).on('error', (error) => {
                    $.growl.error({
                        message: (error)
                    }, {})
                    $(".finalize4").show();
                    $('.show_text').hide();
                    stop_loader();
                });

            }
            else {
                $.growl.error({
                    message: ("Already Enabled.")
                }, {})
                $(".finalize4").show();
                $('.show_text').hide();
                stop_loader();

            }
        });











    });
});


async function checkcrowd(sale, token_address) {

    try {
        const MyContract = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "Token", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "Startime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "EndTime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "PerBnb", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "AddSale", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "Pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "depositAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "Claim", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "_starttime", "type": "uint256" }, { "internalType": "uint256", "name": "_endtime", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint256", "name": "_bnbPerTpoken", "type": "uint256" }, { "internalType": "uint256", "name": "_hardcap", "type": "uint256" }, { "internalType": "uint256", "name": "_minimumAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_maximumAmount", "type": "uint256" }], "name": "addSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_addr", "type": "address[]" }], "name": "addWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "claim", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "coinSafe", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "configures", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_lockStatus", "type": "bool" }], "name": "contractLock", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "enableWhiteList", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_toUser", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint8", "name": "_flag", "type": "uint8" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IBEP20", "name": "token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "isContract", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lockStatus", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "poolList", "outputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bool", "name": "status", "type": "bool" }, { "internalType": "uint256", "name": "perBnbToken", "type": "uint256" }, { "internalType": "uint256", "name": "hardCap", "type": "uint256" }, { "internalType": "uint256", "name": "minAmount", "type": "uint256" }, { "internalType": "uint256", "name": "maxAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "removeConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_addr", "type": "address[]" }], "name": "removeWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setUnPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tokenFailsafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_start", "type": "uint256" }, { "internalType": "uint256", "name": "_end", "type": "uint256" }], "name": "updateTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "whitelist", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
        var McontractInfo = (MyContract);
        token_contract_selected = new web3.eth.Contract(McontractInfo, token_address);
        token_contract_selected.methods.totalAmount().call().then(function (totalAmount) {
            totalAmount = web3.utils.fromWei(totalAmount, "ether");
            total = sale;
            remain = sale - totalAmount;
            percent = (totalAmount / total) * 100;
            $(".remain").html(remain);
            $("#progress").attr("aria-valuemax", percent);
            $("#progress").attr("style", "width:" + percent + "%");
            $(".percent").html(percent + "%");

        });
    } catch (err) {
        $.growl.error({
            message: ("Enter Valid Token Address  !")
        }, {})
    }
}

// function isWhatPercentOf(numA, numB) {
//   return (numA / numB) * 100;
// }

$(".finalize4").click(async function () {
    chainIdDec = await web3.eth.getChainId();
    if (login_type == "no") { } else {
        $('.show_text').show();
        start_loader();
        $(".finalize4").hide();
        try {
            web3.eth.getAccounts(function (err, accounts) {
                $('.show_text').show();
                start_loader();
                $(".finalize4").hide();
                token_id = $("#token_id").val();
                token_type = $("#token_type").val();
                network_type = $("#network_type").val();
                token_name = $("#token_name").val();
                token_symbol = $("#token_symbol").val();
                token_decimal = $("#token_decimal").val();
                token_owner = $("#token_owner").val();
                future_minting = $("input[name='future_minting']:checked").val();
                branded_report = $("input[name='branded_report']:checked").val();
                scan_verification = $("input[name='scan_verification']:checked").val();
                white_label = $("input[name='white_label']:checked").val();
                network_type = $("#network_id").val();
                token_address = $("#token_address").val();
                net_id = network_type;
                if (network_type == 1) {
                    net_id = 5;
                }
                if (network_type == 5) {
                    net_id = 1;
                }
                $.ajax({
                    url: base_url + "/checkbalance",
                    type: "POST",
                    data: {
                        token_id: "4",
                    },
                    success: async function (resp) {
                        if (chainIdDec != net_id) { } else if (resp == "Valid" || network_type == "1" || network_type == "97") {
                            $(".token_name").html(token_name);
                            $(".token_symbol").html(token_symbol);
                            $(".token_decimal").html(token_decimal);
                            token_address = token_address;
                            let saidMessage = false;
                            let saidAjax = false;
                            var airdropContract = new web3.eth.Contract([{ "inputs": [{ "internalType": "contract IBEP20", "name": "_token", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "coinSafe", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "configures", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "contract IBEP20", "name": "_token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "removeConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_addr", "type": "address[]" }, { "internalType": "uint256[]", "name": "_amt", "type": "uint256[]" }], "name": "sendTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setUnPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IBEP20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tokenFailsafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]);

                            var airdrop = airdropContract.deploy({
                                data: '0x608060405234801561001057600080fd5b5060405161103338038061103383398101604081905261002f916',
                                arguments: [
                                    token_address,
                                ]
                            }).send({
                                from: accounts[0],
                                gas: '4700000'
                            }, function (e, contract) {
                                console.log(e, contract);
                                if (typeof contract.address !== 'undefined') {
                                    console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
                                }
                            }).on('error', (error) => {
                                $.growl.error({
                                    message: (error.message)
                                }, {})
                                $('.show_text').hide();
                                stop_loader();
                            }).on('transactionHash', (transactionHash) => {
                                console.log(transactionHash)
                            }).on('receipt', (receipt) => {
                                // receipt will contain deployed contract address
                                console.log(receipt);
                                setTimeout(function () {
                                    if (!saidAjax) {
                                        $.ajax({
                                            url: base_url + "/update",
                                            type: "POST",
                                            data: {
                                                token_id: token_id,
                                                token_address: token_address,
                                                token_name: token_name,
                                                token_symbol: token_symbol,
                                                token_decimal: token_decimal,
                                                user_address: accounts[0],
                                                contract_address: receipt.contractAddress,
                                                token_type: token_type,
                                                network_type: network_type,
                                                future_minting: future_minting,
                                                branded_report: branded_report,
                                                white_label: white_label,
                                                scan_verification: scan_verification,
                                                contract_type: "4",
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
                                                    window.location.href = base_url + '/my-contract';
                                                }, 1000);
                                            }
                                        })
                                    }
                                }, 6000);
                            }).on('confirmation', (confirmationNumber, receipt) => {
                                console.log(receipt)
                            }).catch(err => {
                                // $.growl.error({
                                //     message: (err.message)
                                // }, {})
                            });
                        } else {
                            $.growl.error({
                                message: ("You don't have enough balance/mints tokens to deploy.")
                            }, {})
                            $(".finalize4").show();
                            $('.show_text').hide();
                            stop_loader();
                        }
                    }
                });
            })
        } catch (err) {
            $.growl.error({
                message: (err.message)
            }, {})
            $('.show_text').hide();
            stop_loader();
        }
    }
});
$(".finalize5").click(async function () {
    chainIdDec = await web3.eth.getChainId();
    if (login_type == "no") { } else {
        $('.show_text').show();
        start_loader();
        $(".finalize5").hide();
        try {
            web3.eth.getAccounts(function (err, accounts) {
                $('.show_text').show();
                start_loader();
                $(".finalize5").hide();
                token_id = $("#token_id").val();
                token_type = $("#token_type").val();
                network_type = $("#network_type").val();
                token_name = $("#token_name").val();
                token_symbol = $("#token_symbol").val();
                token_decimal = $("#token_decimal").val();
                token_owner = $("#token_owner").val();
                future_minting = $("input[name='future_minting']:checked").val();
                branded_report = $("input[name='branded_report']:checked").val();
                scan_verification = $("input[name='scan_verification']:checked").val();
                contract_address = $("#contract_address").val();


                network_type = $("#network_id").val();
                net_id = network_type;
                let saidMessage = false;
                let saidAjax = false;
                if (network_type == 1) {
                    net_id = 5;
                }
                if (network_type == 5) {
                    net_id = 1;
                }
                $.ajax({
                    url: base_url + "/checkbalance",
                    type: "POST",
                    data: {
                        token_id: "5",
                    },
                    success: async function (resp) {
                        if (chainIdDec != net_id) { } else if (resp == "Valid" || network_type == "1" || network_type == "97") {
                            $(".token_name").html(token_name);
                            $(".token_symbol").html(token_symbol);
                            $(".token_decimal").html(token_decimal);
                            const ExampleContract = [{
                                "inputs": [],
                                "stateMutability": "nonpayable",
                                "type": "constructor"
                            }];


                            // receipt will contain deployed contract address

                            setTimeout(function () {
                                if (!saidAjax) {
                                    $.ajax({
                                        url: base_url + "/update",
                                        type: "POST",
                                        data: {
                                            token_id: token_id,
                                            token_address: contract_address,
                                            user_address: accounts[0],
                                            contract_address: "Lostkey_" + contract_address,
                                            network_type: network_type,
                                            contract_type: "5",
                                        },
                                        success: async function (resp) {
                                            stop_loader();
                                            if (saidMessage == false) {
                                                $.growl.notice({
                                                    message: ("Contract Deployed Successfully, Deployed contract address is " + contract_address)
                                                });
                                                $('.show_text').hide();
                                                stop_loader();
                                                saidMessage = true;
                                                saidAjax = true;
                                            }
                                            setTimeout(function () {
                                                window.location.href = base_url + '/my-contract';
                                            }, 1000);
                                        }
                                    })
                                }
                            }, 2000);

                        } else {
                            $.growl.error({
                                message: ("You don't have enough balance/mints tokens to deploy.")
                            }, {})
                            $(".finalize5").show();
                            $('.show_text').hide();
                            stop_loader();
                        }
                    }
                });
            })
        } catch (err) {
            $.growl.error({
                message: (err.message)
            }, {})
            $('.show_text').hide();
            stop_loader();
        }
    }
});
$(".finalize6").click(async function () {

    chainIdDec = await web3.eth.getChainId();
    if (login_type == "no") { } else {
        $('.show_text').show();
        start_loader();
        $(".finalize5").hide();
        try {
            web3.eth.getAccounts(function (err, accounts) {
                $('.show_text').show();
                start_loader();
                $(".finalize6").hide();
                token_id = $("#token_id").val();
                token_type = $("#token_type").val();
                network_type = $("#network_type").val();
                token_name = $("#token_name").val();
                token_symbol = $("#token_symbol").val();
                token_decimal = $("#token_decimal").val();
                token_owner = $("#token_owner").val();
                future_minting = $("input[name='future_minting']:checked").val();
                branded_report = $("input[name='branded_report']:checked").val();
                scan_verification = $("input[name='scan_verification']:checked").val();
                contract_address = $("#contract_address").val();


                network_type = $("#network_id").val();
                net_id = network_type;
                let saidMessage = false;
                let saidAjax = false;
                if (network_type == 1) {
                    net_id = 5;
                }
                if (network_type == 5) {
                    net_id = 1;
                }
                $.ajax({
                    url: base_url + "/checkbalance",
                    type: "POST",
                    data: {
                        token_id: "5",
                    },
                    success: async function (resp) {
                        if (chainIdDec != net_id) { } else if (resp == "Valid" || network_type == "1" || network_type == "97") {
                            $(".token_name").html(token_name);
                            $(".token_symbol").html(token_symbol);
                            $(".token_decimal").html(token_decimal);
                            const ExampleContract = [{
                                "inputs": [],
                                "stateMutability": "nonpayable",
                                "type": "constructor"
                            }];


                            // receipt will contain deployed contract address

                            setTimeout(function () {
                                if (!saidAjax) {
                                    $.ajax({
                                        url: base_url + "/update",
                                        type: "POST",
                                        data: {
                                            token_id: token_id,
                                            token_address: contract_address,
                                            user_address: accounts[0],
                                            contract_address: "LostkeyC_" + contract_address,
                                            network_type: network_type,
                                            contract_type: "6",
                                        },
                                        success: async function (resp) {
                                            stop_loader();
                                            if (saidMessage == false) {
                                                $.growl.notice({
                                                    message: ("Contract Deployed Successfully, Deployed contract address is " + contract_address)
                                                });
                                                $('.show_text').hide();
                                                stop_loader();
                                                saidMessage = true;
                                                saidAjax = true;
                                            }
                                            setTimeout(function () {
                                                window.location.href = base_url + '/my-contract';
                                            }, 1000);
                                        }
                                    })
                                }
                            }, 2000);

                        } else {
                            $.growl.error({
                                message: ("You don't have enough balance/mints tokens to deploy.")
                            }, {})
                            $(".finalize5").show();
                            $('.show_text').hide();
                            stop_loader();
                        }
                    }
                });
            })
        } catch (err) {
            $.growl.error({
                message: (err.message)
            }, {})
            $('.show_text').hide();
            stop_loader();
        }
    }
});

$(".set_lostkeytoken").click(async function () {
    web3.eth.getAccounts(function (err, accounts) {
        $('.show_text').show();
        start_loader();
        let saidMessage = false;
        let saidAjax = false;


        m_contract_address = $("#contract_address").val();
        owner_address = $("#tokenaddresss").val();
        reserve_address_1 = $("#reserve_address_1").val();
        reserve_address_2 = $("#reserve_address_2").val();
        reserve_address_3 = $("#reserve_address_3").val();
        reserve_address_4 = $("#reserve_address_4").val();
        reserve_address_5 = $("#reserve_address_5").val();
        token_id = $("#token_id").val();
        address = [];
        if (reserve_address_1 != null && reserve_address_1 != "") {
            address.push(reserve_address_1);
        }
        if (reserve_address_2 != null && reserve_address_2 != "") {
            address.push(reserve_address_2);
        }
        if (reserve_address_3 != null && reserve_address_3 != "") {
            address.push(reserve_address_3);
        }
        if (reserve_address_4 != null && reserve_address_4 != "") {
            address.push(reserve_address_4);
        }
        if (reserve_address_5 != null && reserve_address_5 != "") {
            address.push(reserve_address_5);
        }

        const MyContract = [{ "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "uint256", "name": "decimals_", "type": "uint256" }, { "internalType": "uint256", "name": "initialBalance_", "type": "uint256" }, { "internalType": "address", "name": "tokenOwner_", "type": "address" }, { "internalType": "uint256", "name": "_time", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address[]", "name": "_nominees", "type": "address[]" }, { "internalType": "bool[]", "name": "_status", "type": "bool[]" }], "name": "addNominee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "coinSafe", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "configures", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "expirytime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "removeConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tokenFailsafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "viewNominee", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
        var McontractInfo = (MyContract);
        m_contract = new web3.eth.Contract(McontractInfo, m_contract_address);
        if (owner_address == accounts[0]) {
            m_contract.methods.setConfig(address).send({
                from: accounts[0]
            }).on('receipt', (receipt) => {
                $.ajax({
                    url: base_url + "/updatelost",
                    type: "POST",
                    data: {
                        token_id: token_id,
                    },
                    success: async function (resp) {
                        $('.show_text').hide();
                        stop_loader();
                        setTimeout(function () {
                            window.location.href = base_url + '/my-contract';
                        }, 1000);
                    }
                })
            }).on('confirmation', (confirmationNumber, receipt) => { }).on('error', (error) => {
                location.reload();
            });
        }
        else {
            $('.show_text').hide();
            stop_loader();
            $.growl.error({
                message: ("You are not the owner address.")
            }, {})
        }

    });
});


$(".token_transfer").click(async function () {
    id = $(this).attr("id");

    web3.eth.getAccounts(function (err, accounts) {
        $('.show_text').show();
        start_loader();
        let saidMessage = false;
        let saidAjax = false;


        m_contract_address = $("#contract_address").val();
        reserve_address = $("#reserve_address_" + id).val();
        share = $("#bsRange_" + id).val();

        token_id = $("#token_id").val();
        if (reserve_address == accounts[0]) {
            const MyContract = [{ "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "uint256", "name": "decimals_", "type": "uint256" }, { "internalType": "uint256", "name": "initialBalance_", "type": "uint256" }, { "internalType": "address", "name": "tokenOwner_", "type": "address" }, { "internalType": "uint256", "name": "_time", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address[]", "name": "_nominees", "type": "address[]" }, { "internalType": "bool[]", "name": "_status", "type": "bool[]" }], "name": "addNominee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "coinSafe", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "configures", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "expirytime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "removeConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tokenFailsafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "viewNominee", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
            var McontractInfo = (MyContract);
            m_contract = new web3.eth.Contract(McontractInfo, m_contract_address);
            m_contract.methods.balanceOf(m_contract_address).call().then(function (totalSupply) {
                m_contract.methods.decimals().call().then(function (decimals) {
                    totalSupply = totalSupply / 10 ** decimals;
                    console.log("totalSupply", totalSupply);
                    value = percentage(totalSupply, share);

                    value = value * 10 ** decimals;
                    console.log("value", value);
                    if (value > 0) {
                        m_contract.methods.tokenFailsafe(reserve_address, BigInt(value)).send({
                            from: accounts[0]
                        }).on('receipt', (receipt) => {
                            $.ajax({
                                url: base_url + "/updatelost",
                                type: "POST",
                                data: {
                                    token_id: token_id,
                                },
                                success: async function (resp) {
                                    $('.show_text').hide();
                                    stop_loader();
                                    setTimeout(function () {
                                        window.location.href = base_url + '/my-contract';
                                    }, 1000);
                                }
                            })
                        }).on('confirmation', (confirmationNumber, receipt) => { }).on('error', (error) => {
                            location.reload();
                        });
                    }
                    else {
                        $('.show_text').hide();
                        stop_loader();
                        $.growl.error({
                            message: ("Contract does not have token balance to transfer.")
                        }, {})
                    }

                });
            });
        }
        else {
            $('.show_text').hide();
            stop_loader();
            $.growl.error({
                message: ("You are not the reserved address.")
            }, {})
        }

    });
});


$(".coin_transfer").click(async function () {
    id = $(this).attr("id");

    web3.eth.getAccounts(function (err, accounts) {
        $('.show_text').show();
        start_loader();
        let saidMessage = false;
        let saidAjax = false;


        m_contract_address = $("#contract_address").val();
        reserve_address = $("#reserve_address_" + id).val();
        share = $("#bsRange_" + id).val();

        token_id = $("#token_id").val();
        if (reserve_address == accounts[0]) {
            const MyContract = [{ "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "uint256", "name": "decimals_", "type": "uint256" }, { "internalType": "uint256", "name": "initialBalance_", "type": "uint256" }, { "internalType": "address", "name": "tokenOwner_", "type": "address" }, { "internalType": "uint256", "name": "_time", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address[]", "name": "_nominees", "type": "address[]" }, { "internalType": "bool[]", "name": "_status", "type": "bool[]" }], "name": "addNominee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "coinSafe", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "configures", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "expirytime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "failSafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "removeConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_confi", "type": "address[]" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tokenFailsafe", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "viewNominee", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
            var McontractInfo = (MyContract);
            m_contract = new web3.eth.Contract(McontractInfo, m_contract_address);

            m_contract.methods.decimals().call().then(async function (decimals) {
                balance = await web3.eth.getBalance(m_contract_address);
                balance1 = balance;

                balance = balance / 10 ** decimals;

                value = percentage(balance, share);

                value = value * 10 ** decimals;


                if (balance1 > 0.001) {


                    m_contract.methods.coinSafe(reserve_address, BigInt(value)).send({
                        from: accounts[0]
                    }).on('receipt', (receipt) => {
                        $.ajax({
                            url: base_url + "/updatelost",
                            type: "POST",
                            data: {
                                token_id: token_id,
                            },
                            success: async function (resp) {
                                $('.show_text').hide();
                                stop_loader();
                                setTimeout(function () {
                                    window.location.href = base_url + '/my-contract';
                                }, 1000);
                            }
                        })
                    }).on('confirmation', (confirmationNumber, receipt) => { }).on('error', (error) => {
                        location.reload();
                    });
                }
                else {
                    $('.show_text').hide();
                    stop_loader();
                    $.growl.error({
                        message: ("No coin balance in the contract.")
                    }, {})
                }
            });


        }
        else {
            $('.show_text').hide();
            stop_loader();
            $.growl.error({
                message: ("You are not the reserved address.")
            }, {})
        }

    });
});



function percentage(num, per) {
    return (num / 100) * per;
}


$(".finalize7").click(async function () {
    chainIdDec = await web3.eth.getChainId();
    if (login_type == "no") { } else {
        $('.show_text').show();
        start_loader();
        $(".finalize7").hide();
        try {
            web3.eth.getAccounts(function (err, accounts) {
                $('.show_text').show();
                start_loader();
                $(".finalize7").hide();
                token_id = $("#token_id").val();
                token_type = $("#token_type").val();
                network_type = $("#network_type").val();
                token_name = $("#token_name").val();
                token_symbol = $("#token_symbol").val();
                token_decimal = $("#token_decimal").val();
                token_owner = $("#token_owner").val();
                future_minting = $("input[name='future_minting']:checked").val();
                branded_report = $("input[name='branded_report']:checked").val();
                scan_verification = $("input[name='scan_verification']:checked").val();
                white_label = $("input[name='white_label']:checked").val();
                network_type = $("#network_id").val();
                net_id = network_type;
                if (network_type == 1) {
                    net_id = 5;
                }
                if (network_type == 5) {
                    net_id = 1;
                }
                $.ajax({
                    url: base_url + "/checkbalance",
                    type: "POST",
                    data: {
                        token_id: "7",
                    },
                    success: async function (resp) {
                        if (chainIdDec != net_id) { } else if (resp == "Valid" || network_type == "1" || network_type == "97") {
                            $(".token_name").html(token_name);
                            $(".token_symbol").html(token_symbol);
                            $(".token_decimal").html(token_decimal);
                            const ExampleContract = [{
                                "inputs": [],
                                "stateMutability": "nonpayable",
                                "type": "constructor"
                            }];
                            const MyContract = new web3.eth.Contract(ExampleContract);
                            let saidMessage = false;
                            let saidAjax = false;
                            total_supply = 10000;                            
                        } else {
                            $.growl.error({
                                message: ("You don't have enough balance/mints tokens to deploy.")
                            }, {})
                            $(".finalize7").show();
                            $('.show_text').hide();
                            stop_loader();
                        }
                    }
                });
            })
        } catch (err) {
            $.growl.error({
                message: (err.message)
            }, {})
            $('.show_text').hide();
            stop_loader();
        }
    }
});