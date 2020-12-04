
let accounts = "0x4F0E2D3Dd7dAf1F492aF930d04c63005fb61F7D5";

if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}

let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const contractAbi = [
    {
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
                "internalType": "address",
                "name": "_musicWordAddr",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_musicAddr",
                "type": "address"
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
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
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
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
        "stateMutability": "view",
        "type": "function"
    },
    {
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
        "stateMutability": "view",
        "type": "function"
    },
    {
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
                "internalType": "address",
                "name": "musicWordAddr",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "musicAddr",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "timeStamp",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "musicWork_id",
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
        "inputs": [],
        "name": "owner_id",
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
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "ownerShips",
        "outputs": [
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
                "internalType": "address",
                "name": "music_addr_O",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "people_id",
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
        "stateMutability": "view",
        "type": "function"
    }
];
var contract = new web3.eth.Contract(contractAbi, "0xf2c2B575c8e6805B807371Cdb1888CB3A2C0c8A1");
console.log("contract: ", contract);


var add = document.getElementById("add");
add.onclick = function () {
    let _name = document.getElementById("addPeopleName").value;
    let _passw = document.getElementById("addPeoplePass").value;
    let _addr = document.getElementById("addPeopleAddr").value;
    contract.methods.addPeople(_name, _passw, _addr, "Artist").send({from: _addr,gasPrice: '0x12a05f200',gas: '0x2dc6c0'}).then(
        function(result,error){
            console.log("result =>",result);
            alert("success!");
            if (error != null){
                console.log(error);
            };
        }
    );
};
var getPeople = document.getElementById("getPeople");
getPeople.onclick = function () {
    var _Addr = document.getElementById("getAddr").value;
    contract.methods.getPeople(_Addr).call({from: _Addr}).then(
        function(result){
            console.log(result);
            $("#ID").html(result[0]);
            $("#name").html(result[1]);
            $("#type").html(result[3]);
            $("#address").html(result[2]);
            $("#haveWork").html(result[5]);
        });
};

var foundPeole = document.getElementById("foundPeo");
foundPeole.onclick = function () {
    var foundA = document.getElementById("foundAddr").value;
    var foundP = document.getElementById("foundPassw").value;
    contract.methods.vertifyAccounts(foundA,foundP).call({from:foundA}).then(
        function (result) {
            console.log(result);
        }
    )
};

