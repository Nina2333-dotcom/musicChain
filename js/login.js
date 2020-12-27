console.log("ERC720")

let accounts = [];

if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}

console.log("isMetaMask：" + ethereum.isMetaMask)

$(".enableEthereumButton").click(function () {
        // alert("enableEthereumButton")
        // ethereum.request({ method: 'eth_requestAccounts' });
        getAccount()

    }
)

async function getProdID(_index) {
    myContract.methods.getProdId(_index).call({from: accounts[0]}).then(
        function (result) {
            console.log("getProdID", result)
            $("#pitem" + _index).html(result.r_token);
            $("#tokenIndex" + _index).html(result.r_index);

        }
    );

}


async function getAccount() {
    accounts = await ethereum.request({method: 'eth_requestAccounts'});
    const account = accounts[0];
    // showAccount.innerHTML = account;
    $(".showAccount").html(account);
    // getBalance();
    // ErcAddress();
}


ethereum.on('accountsChanged', function (accounts) {
    console.log("accountsChanged");
    getAccount()
});

ethereum.on('chainChanged', (chainId) => {
    console.log("chainId", chainId);

});


let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const contractAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_musicNa",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_musicIP",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_musType",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_musicOwner",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "_cost",
                "type": "uint32"
            },
            {
                "internalType": "string",
                "name": "_musicWordSign",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_musicHash",
                "type": "string"
            }
        ],
        "name": "addMusic",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "peo_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "peo_passw",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "peo_addr",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "peo_type",
                "type": "string"
            }
        ],
        "name": "addPeople",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "tokenURI",
                "type": "string"
            }
        ],
        "name": "awardItem",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "burnToken",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_user1",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_user2",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_musicTokenId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_musicNa",
                "type": "string"
            },
            {
                "internalType": "uint32",
                "name": "_cost",
                "type": "uint32"
            }
        ],
        "name": "byMusicCopyright",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_musicNa",
                "type": "string"
            },
            {
                "internalType": "uint32",
                "name": "_cost",
                "type": "uint32"
            }
        ],
        "name": "changeCost",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "_musicNa",
                "type": "string"
            }
        ],
        "name": "getMusicAddress",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "_musicNa",
                "type": "string"
            }
        ],
        "name": "getMusicBasic",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "_musicNa",
                "type": "string"
            }
        ],
        "name": "getOwnerShip",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "peo_addr",
                "type": "address"
            }
        ],
        "name": "getPeople",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "musicCopy_id",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "musics",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "music_id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "musName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "musIP",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "musOwner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "musOwner_Nowid",
                "type": "uint256"
            },
            {
                "internalType": "uint32",
                "name": "cost",
                "type": "uint32"
            },
            {
                "internalType": "string",
                "name": "musType",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "musicWordSign",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "musicHash",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "timeStamp",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "ownerShips",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "ownerShipId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "token721ID",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "music_name_O",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "owener_name",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "owener_addr",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "music_Sign_O",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner_id",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "people_id",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "peoples",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "people_id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "peoName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "peoPassw",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "peoAddr",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "peoType",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint32",
                "name": "_num",
                "type": "uint32"
            }
        ],
        "name": "toBytes",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "_ret",
                "type": "bytes"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokenID",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_cost",
                "type": "bytes"
            }
        ],
        "name": "tokenTransfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "_pAddr",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_pass",
                "type": "string"
            }
        ],
        "name": "vertifyAccounts",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
var contract = new web3.eth.Contract(contractAbi, "0x6F81f26Cd7505317a9776037d8487CaEe2A1C99E");
console.log("contract: ", contract);

// 0x6F81f26Cd7505317a9776037d8487CaEe2A1C99E  Rinkeby


$("#addPeople").click(function () {
    console.log("add");
    let _name = $("#addPeopleName").val();
    let _passw = $("#addPeoplePass").val();
    let _addr = $("#addPeopleAddr").val();
    let _radio = $("#addPeopleType option:selected").val();
    contract.methods.addPeople(_name, _passw, _addr, _radio).send({from: _addr}).then(
        function (result, error) {
            console.log("result =>", result);
            if (error != null) {
                console.log(error);
                alert("注册失败");
            }
            ;
            alert("成功! 即将跳转至登入页面...");
            if (result != null) {
                location.href = "signin.html";
            }
        });
});
$("#getPeople").click(function () {
    console.log("add");
    var _Addr = $("#getAddr").val();
    contract.methods.getPeople(_Addr).call({from: _Addr}).then(
        function (result) {
            console.log(result);
            $("#ID").html(result[0]);
            $("#name").html(result[1]);
            $("#type").html(result[3]);
            $("#address").html(result[2]);
            $("#haveWork").html(result[5]);
            $("#musicWroks").html(result[4]);
        });
    contract.methods.balanceOf(_Addr).call({from: _Addr}).then(
        function (result) {
            console.log(result);
            $("#token").html(result);
        }
    )
});
$("#foundPeo").click(function () {
    var foundA = $("#foundAddr").val();
    var foundP = $("#foundPassw").val();
    var account = accounts[0];
    console.log("----开始查找---");
    contract.methods.vertifyAccounts(foundA, foundP).call({from: account}).then(
        function (result) {
            console.log(result);
            if (result != true) {
                alert("you have error answer ! ");
                // location.href = "register.html";

            } else {
                alert("success! ")
                location.href = "index1.html";
            }
        }
    );
});
$("#addMusic").click(function () {
    var account = accounts[0];
    var _musNa = $("#musNa").val();
    var _musOwn = $("#musOwn").val();
    var _musIP = $("#musIP").val();
    var _musType = $("#musicType option:selected").val();
    var _cost = $("#cost").val();
    var _musHash = $("#musHash").val();  //web3.sha
    var hashOfHash = web3.utils.sha3(_musHash);
    var hashOfSign = web3.eth.sign(hashOfHash, account); // second argument is web3.sha3("xyz")
    contract.methods.addMusic(_musNa, _musIP, _musType, _musOwn, _cost, hashOfSign, hashOfHash).send({from: account}).then(
        function (result, error) {
            console.log("result =>", result);
            if (result[0] == 0) {
                alert("添加作品失败，请查看用户角色是否为作者！")
            } else if (result[0] != 0) {
                alert("添加作品成功!");
                $("#blockNumber").html(result.blockNumber);
                $("#transactionHash").html(result.transactionHash);
                $("#blockHash").html(result.blockHash);
            }
            if (error != null) {
                console.log(error);
            }
            ;
        });
});

$("#_changeCost").click(function () {
    var _changInputNa = $("#changInputNa").val();
    var _changInputCo = $("#changInputCo").val();
    var account = accounts[0];
    contract.methods.changeCost(_changInputNa, _changInputCo).send({from: account}).then(
        function (result, error) {
            console.log(result);
            if (error != null) {
                console.log(error);
            }
            ;
            alert("success!");
        }
    );
});
$("#foundMus").click(function () {
    var _foundNa = $("#foundNa").val();
    var account = accounts[0];
    contract.methods.getMusicBasic(_foundNa).call({from: account}).then(
        function (result) {
            console.log(result);
            $("#musicId").html(result[0]);
            $("#musicNa").html(result[1]);
            $("#timestamp").html(result[4]);
            $("#musicTy").html(result[3]);
            $("#musicCost").html(result[5]);
            $("#tokenId").html(result[0]);
        }
    );
    contract.methods.getMusicAddress(_foundNa).call({from: account}).then(
        function (result) {
            console.log(result);
            $("#musicHash").html(result[0]);
        }
    );
    contract.methods.getOwnerShip(_foundNa).call({from: account}).then(
        function (result) {
            console.log(result);
            $("#co_number").html(result[0]);
            $("#co_id").html(result[1]);
            $("#co_name").html(result[4]);
            $("#co_addr").html(result[5]);
        }
    );
});
$("#byMusicCopyright").click(function () {
    var _fromAd = $("#fromAd").val();
    var _toAd = $("#toAd").val();
    var _musicTokenId = $("#musicTokenId").val();
    var _musicNa = $("#musicNa").val();
    var _cost = $("#_cost").val();
    var account = accounts[0];
    contract.methods.byMusicCopyright(_fromAd, _toAd, _musicTokenId, _musicNa, _cost).send({from: account}).then(
        function (result, error) {
            if (result != null) {
                console.log("result =>", result);
                alert("success!");
                $("#blockNumber").html(result.blockNumber);
                $("#transactionHash").html(result.transactionHash);
                $("#blockHash").html(result.blockHash);
                $("#type").html(result.status);
            }
            ;

            if (error != null) {
                console.log(error);
            }
            ;
        });
});
$("#ownerOf").click(function () {
    console.log("add");
    var account = accounts[0];
    var _checkOwner = $("#checkOwner").val();
    contract.methods.ownerOf(_checkOwner).call({from: account}).then(
        function (result) {
            console.log(result);
            $("#check_address").html(result);

        });
});
$("#approval").click(function () {
    var account = accounts[0];
    var _toAd_a = $("#toAd_a").val();
    var _musicTokenId_a = $("#musicTokenId_a").val();
    contract.methods.approve(_toAd_a, _musicTokenId_a).send({from: account}).then(
        function (result) {
            alert("success!")
            console.log(result);
        });
});
$("#ownerShip").click(function () {
    var account = accounts[0];
    var _getOwnerShip = $("#getOwnerShip").val();
    contract.methods.getOwnerShip(_getOwnerShip).call({from: account}).then(
        function (result) {
            console.log(result);
            $("#ownerShipId").html(result[0]);
            $("#music_name_O").html(result[1]);
            $("#music_Sign_O").html(result[2]);
            $("#owner_name").html(result[3]);
            $("#owner_addr").html(result[4]);

        });
});