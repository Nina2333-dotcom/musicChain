// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.1;
pragma experimental ABIEncoderV2;

contract HelloWorld {

    string[] public myArray;
    string public message;

    constructor(string memory initMessage) public {

        message = initMessage;
    }
    function getMeg() public view returns (string memory){
        return message;
    }

    function update(string memory newMessage) public {
        message = newMessage;
    }

    function giveMeEth() public payable {

    }

    function getBalance() public view returns (uint){
        return address(this).balance;
    }

    function getArray(uint i) public view returns (string memory){
        return myArray[i];
    }

    function getArrayAll() public view returns (string[] memory){
        return myArray;
    }

    function addArray(string memory _myArray) public {
        myArray.push(_myArray);
    }
}
