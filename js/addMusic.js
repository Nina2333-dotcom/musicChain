async function ErcAddress() {
    myContract.methods.ErcAddress().call({from: accounts[0]}).then(
        function (result) {
            console.log("ErcAddress==》", result)
            $(".ErcAddress").html(result)
        }
    )
}

function getBalance() {
    myContract.methods.getUserBalance(accounts[0]).call({from: accounts[0]}).then(
        function (result) {
            $('#box').children().remove();
            console.log('getUserBalance', result)
            $("#MyBalance").html(result)
            for (var i = 0; i < result; i++) {
                console.log(i + "========================")
                var el = $('<div>产品ID:<span id="pitem' + i + '">-- </span>#<span id="tokenIndex' + i + '"></span>' + '|接收人Address:<input id="s_address' + i + '" value="" /><button id="Btn_send' + i + '"  onClick="sendBtn(' + i + ')">转账</button></div>');
                getProdID(i);
                $('#box').append(el);
            }

        }
    );
}

function sendBtn(i) {
    _address = $('#s_address' + i).val();
    p_index = $('#tokenIndex' + i).html();
    alert('send' + i + "#" + _address + "#" + p_index);
    // transferProd
    getErc721($(".ErcAddress").html());
    contractERC721.methods.transferFrom(accounts[0], _address, p_index).send({from: accounts[0]}).then(
        function (result) {
            console.log("transferProd==>", result);
            if (result.status) {
                $(".txt_CreatItem").html("添加成功")
                getBalance();
            } else {
                hide
                $(".txt_CreatItem").html("添加失败")
            }
            // $("#load_ci_img").hide();
        }
    )

}


var contractERC712Abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
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
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "baseURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
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
        "stateMutability": "view",
        "type": "function"
    },
    {
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
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
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
        "stateMutability": "view",
        "type": "function"
    },
    {
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
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
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
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
        "stateMutability": "nonpayable",
        "type": "function"
    }
];


var contractERC721;

function getErc721(conAddress) {
    contractERC721 = new web3.eth.Contract(contractERC712Abi, conAddress);
    console.log('contractERC721==>', contractERC721);
}

// MyApp.sol abi
// var myContractAbi = [
//     {
//         "inputs": [],
//         "stateMutability": "nonpayable",
//         "type": "constructor"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "name": "AllItems",
//         "outputs": [
//             {
//                 "internalType": "string",
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "string",
//                 "name": "_prodid",
//                 "type": "string"
//             }
//         ],
//         "name": "CreatItem",
//         "outputs": [],
//         "stateMutability": "payable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "string",
//                 "name": "_prodid",
//                 "type": "string"
//             }
//         ],
//         "name": "CreatItem2Contract",
//         "outputs": [],
//         "stateMutability": "payable",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "ErcAddress",
//         "outputs": [
//             {
//                 "internalType": "contract GameItem",
//                 "name": "",
//                 "type": "address"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "",
//                 "type": "address"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "name": "UserProdMap",
//         "outputs": [
//             {
//                 "internalType": "string",
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "_to",
//                 "type": "address"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "_value",
//                 "type": "uint256"
//             }
//         ],
//         "name": "drawMoney",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "getBalance",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "_Index",
//                 "type": "uint256"
//             }
//         ],
//         "name": "getProdId",
//         "outputs": [
//             {
//                 "internalType": "string",
//                 "name": "r_token",
//                 "type": "string"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "r_index",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "getTotalSupply",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "_user",
//                 "type": "address"
//             }
//         ],
//         "name": "getUserBalance",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "_price",
//                 "type": "uint256"
//             }
//         ],
//         "name": "setPrice",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }
// ];

const myContractAbi = [
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
    }
];


// 0x0b23c2e1e574B301FdB2b36f7Cdeac31A8DC2893  本地   0xA99F0e8149A95d81877475592B4CC4522A36674f
//0x7a9901a9667297b5744cC1fb3CFf075d76db95d3 rinkeby   0xC7093926f1388953083Cac21aAC9bD362C820Ec9   //0x03Ad0C24fC5F118910321208229B34c573582dc7
var myContract = new web3.eth.Contract(myContractAbi, "0x03Ad0C24fC5F118910321208229B34c573582dc7");

console.log("contract", myContract)


$("#Btn_getTotalSupply").click(function () {
        console.log("Btn_getTotalSupply");
        myContract.methods.getTotalSupply().call({from: accounts[0]}).then(
            function (result) {
                console.log(result)
                $(".txt_getTotalSupply").html(result)
            }
        );

    }
)


//

$("#Btn_getErc721").click(function () {
        console.log("Btn_getErc721");
        getErc721($(".ErcAddress").html())
    }
)

$("#Btn_CreatItem").click(function () {
        console.log("Btn_CreatItem");
        $("#load_ci_img").show();
        let _txt = $("#prodid").val()
        // console.log($("#arraytxt").val().length)
        if (_txt.length < 3) {
            alert("长度不能小于3")
        } else {
            myContract.methods.CreatItem(_txt).send({from: accounts[0], value: 0.02 * Math.pow(10, 18)}).then(
                function (result) {
                    console.log("result", result);
                    if (result.status) {
                        $(".txt_CreatItem").html("添加成功")
                        getBalance();
                    } else {
                        hide
                        $(".txt_CreatItem").html("添加失败")
                    }
                    $("#load_ci_img").hide();
                }
            )

        }
    }
)