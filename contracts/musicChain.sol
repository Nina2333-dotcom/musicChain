pragma solidity >=0.5.0<0.6.0;

import "./ERC721Interface.sol";

contract musicChain is ERC721 {

    uint256 public musicCopy_id = 0;
    uint256 public owner_id = 0;
    uint256 public people_id = 0;
    address payable owner;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct people {
        uint256 people_id;  // account id
        string peoName;     // account name
        string peoPassw;    // account password
        address peoAddr;    // account address
        string peoType;     // account type
        uint256[] musicWroks;    // account's music  返回歌曲id
        uint256[] haveWorks;    //曾经拥有的代币
    }

    mapping(address => people) public peoples;

    struct music {
        uint256 music_id;
        string musName;
        string musIP;       // 版权IP
        address musOwner;
        uint256 musOwner_Nowid;
        uint32 cost;
        string musType;    // 歌曲类型
        string musicWordSign;  // 歌曲签名
        string musicHash;      // 歌曲 sha3 hash
        uint timeStamp;
        uint256[] musOwner_id;
        // address copyRight; //版权代币地址
    }

    mapping(string => music) public musics;

    struct ownerShip {
        uint256 ownerShipId; //经过多少次交易
        string music_name_O;
        string owener_name;
        address owener_addr;
        string music_Sign_O;
        uint256[] music_ownerId;
    }

    mapping(string => ownerShip) public ownerShips;

    function awardItem(address player, string memory tokenURI) public returns (uint256){
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        // _setTokenURI(newItemId, tokenURI);

        musicCopy_id = newItemId;

        return newItemId;
    }

    function tokenTransfer(address _from, address _to, uint256 _tokenID, bytes memory _cost) public returns (bool){
        safeTransferFrom(_from, _to, _tokenID, _cost);
        return (true);
    }

    function toBytes(uint32 _num) public returns (bytes memory _ret) {
        assembly {
            _ret := mload(0x10)
            mstore(_ret, 0x20)
            mstore(add(_ret, 0x20), _num)
        }
    }

    function addPeople(string memory peo_name, string memory peo_passw, address peo_addr, string memory peo_type) public returns (uint256, bool){
        uint256 userId = people_id++;
        peoples[peo_addr].peoName = peo_name;
        peoples[peo_addr].peoPassw = peo_passw;
        peoples[peo_addr].peoAddr = peo_addr;
        peoples[peo_addr].peoType = peo_type;
        peoples[peo_addr].people_id = userId;
        return (userId, true);
    }

    function getPeople(address peo_addr) public view returns (uint256, string memory, address, string memory, uint256[] memory, uint256[]memory){
        return (
        peoples[peo_addr].people_id,
        peoples[peo_addr].peoName,
        peoples[peo_addr].peoAddr,
        peoples[peo_addr].peoType,
        peoples[peo_addr].musicWroks,
        peoples[peo_addr].haveWorks
        );
    }

    function addMusic(string memory _musicNa, string memory _musicIP, string memory _musType, address _musicOwner, uint32 _cost, string memory _musicWordSign, string memory _musicHash)
    public payable returns (uint256, bool){
        if (keccak256(abi.encodePacked(peoples[_musicOwner].peoType)) == keccak256("Artist")) {

            awardItem(_musicOwner, _musicNa);

            uint256 musId = musicCopy_id;
            musics[_musicNa].musName = _musicNa;
            musics[_musicNa].musIP = _musicIP;
            musics[_musicNa].musType = _musType;
            musics[_musicNa].musOwner = _musicOwner;
            musics[_musicNa].musOwner_Nowid = peoples[_musicOwner].people_id;
            musics[_musicNa].cost = _cost;
            musics[_musicNa].musicWordSign = _musicWordSign;
            musics[_musicNa].musicHash = _musicHash;
            musics[_musicNa].music_id = musId;
            musics[_musicNa].timeStamp = uint32(block.timestamp);
            musics[_musicNa].musOwner_id.push(peoples[_musicOwner].people_id);

            ownerShips[_musicNa].music_name_O = _musicNa;
            ownerShips[_musicNa].owener_name = peoples[_musicOwner].peoName;
            ownerShips[_musicNa].owener_addr = _musicOwner;
            ownerShips[_musicNa].music_Sign_O = _musicWordSign;
            ownerShips[_musicNa].music_ownerId.push(peoples[_musicOwner].people_id);


            peoples[_musicOwner].musicWroks.push(musId);

            return (musId, true);
        }
    }

    modifier onlyOwner(string memory _musicNa){
        require(msg.sender == musics[_musicNa].musOwner, "you are not the owner");
        _;
    }

    function changeCost(string memory _musicNa, uint32 _cost) onlyOwner(_musicNa) public returns (bool){
        musics[_musicNa].cost = _cost;
        return (true);
    }

    function getMusicBasic(string memory _musicNa) public view returns (uint256, string memory, string memory, string memory, uint, uint32){
        return (
        musics[_musicNa].music_id,
        musics[_musicNa].musName,
        musics[_musicNa].musIP,
        musics[_musicNa].musType,
        musics[_musicNa].timeStamp,
        musics[_musicNa].cost
        );
    }

    function getMusicAddress(string memory _musicNa) public view returns (string memory, string memory, address){
        return (
        musics[_musicNa].musicHash,
        musics[_musicNa].musicWordSign,
        musics[_musicNa].musOwner
        );
    }

    function getOwnerShip(string memory _musicNa) public view returns (uint256, string memory, string memory, string memory, address){
        return (
        ownerShips[_musicNa].ownerShipId,
        ownerShips[_musicNa].music_name_O,
        ownerShips[_musicNa].music_Sign_O,
        ownerShips[_musicNa].owener_name,
        ownerShips[_musicNa].owener_addr

        );
    }


    function byMusicCopyright(address _user1, address _user2, uint256 _musicTokenId, string memory _musicNa, uint32 _cost) onlyOwner(_musicNa) public returns (bool){

        uint256 ownership_id = owner_id++;


        bytes memory a = toBytes(_cost);
        tokenTransfer(_user1, _user2, _musicTokenId, a);
        ownerShips[_musicNa].owener_name = peoples[_user2].peoName;
        ownerShips[_musicNa].music_ownerId.push(peoples[_user2].people_id);
        ownerShips[_musicNa].owener_addr = peoples[_user2].peoAddr;
        ownerShips[_musicNa].ownerShipId = ownership_id;

        musics[_musicNa].musOwner_id.push(peoples[_user2].people_id);
        musics[_musicNa].musOwner_Nowid = peoples[_user2].people_id;
        musics[_musicNa].musOwner = peoples[_user2].peoAddr;
        musics[_musicNa].cost = _cost;

        peoples[_user2].haveWorks.push(musics[_musicNa].music_id);

        return true;


    }

    function burnToken(uint256 tokenId) public returns (bool){
        if (keccak256(abi.encodePacked(peoples[msg.sender].peoType)) == keccak256("Artist")) {
            _burn(tokenId);
            return true;
        }
    }


    function vertifyAccounts(address _pAddr, string memory _pass) public view returns (bool){
        if (keccak256(abi.encodePacked(peoples[_pAddr].peoPassw)) == keccak256(abi.encodePacked(_pass))) {
            return (true);
        }
        return (false);
    }
}