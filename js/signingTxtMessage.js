const ethers = require('ethers');
// let Web3 = require('web3')
// let url_geth = 'http://127.0.0.1:8545'
// let web3 = new Web3(url_geth)
let message = "Hello World";
let messageBytes = ethers.utils.toUtf8Bytes(message);
const messageHash = ethers.utils.keccak256(messageBytes);
console.log("messageHash", messageHash);


// 账号0x48b4Beb4Fe3d83eB7FE86324634Db442A35185A4 私钥 ed224d0f7**************cc83aa6e
//0x4F0E2D3Dd7dAf1F492aF930d04c63005fb61F7D5
let privateKey = " ed224d0f7**************cc83aa6e ";
let wallet = new ethers.Wallet(privateKey);
// console.log('wallet=>', wallet);
let accountAddress = wallet.address;
console.log('账户地址=>', accountAddress);

let signPromise = wallet.signMessage("hello johnhai")

signPromise.then((signature) => {

    console.log('签署结果:', signature);

    let sig = ethers.utils.splitSignature(signature);
    console.log('展开:', sig);

    let signingAddress = ethers.utils.verifyMessage('hello johnhai', signature);
    console.log('签名人：', signingAddress);
    if (accountAddress === signingAddress) {
        console.log('完美是本人发送的消息')
    } else {
        console.log('不是本人发送的消息！！！！！！！')
    }

});