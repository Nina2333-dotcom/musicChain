pragma solidity >=0.5.0 <0.8.0;

contract musicSupplyChain{
    
    uint32 public musicWork_id = 0;
    uint32 public owner_id = 0;
    uint32 public participant_id = 0;
    
    mapping(address => mapping(address => uint256)) public allowed;
    struct musicWork{       
        string partNum;   //修改的第几版
        string musicName; 
        address musicWorkOwner;
        uint32 cost;
        uint32 mfgTimeStamp;
        string IPAddress;
        bool falseOrture;
    }

    mapping(uint32 => musicWork) public musicWorks;

    struct participant{
        string userName;
        string passwd;
        string participanType;
        address participantAddress;
    }
    
    struct userOwnership{
        uint32 musicWorkId;
        uint32 ownerId;
        uint32 trxtTimeStamp;
        address musicWorkOwner;
        string IPAddress;
    }

    mapping(uint32 => userOwnership) public ownerships;
    mapping (uint32 => participant) public participants;
    mapping(uint32 => uint32[]) public musicWorkTrack;

    event TransForOwnership(uint32 musicWorkId);
    
    
    function addParticipant(string memory _name,string memory _pass,address _pAdd, string memory _pType) public returns(uint32){
        uint32 userId = participant_id++;
        participants[userId].userName = _name;
        participants[userId].passwd = _pass;
        participants[userId].participantAddress = _pAdd;
        participants[userId].participanType = _pType;

        return userId;
    }

    function getParticipant(uint32 _participant_id) public view returns(string memory,address,string memory){
        return(participants[_participant_id].userName,participants[_participant_id].participantAddress,participants[_participant_id].participanType);
    }
    
    
    function addMusicWork(uint32 _ownerId,string memory _partNum,string memory _musicName,uint32 _musicWorkCost,string memory _IPaddress,bool _falseOrture) public returns(uint32){
        if(keccak256(abi.encodePacked(participants[_ownerId].participanType)) == keccak256("Artist")){
            uint32 musicWorkId = musicWork_id++;
            musicWorks[musicWorkId].partNum = _partNum;
            musicWorks[musicWorkId].musicName = _musicName;
            musicWorks[musicWorkId].cost = _musicWorkCost;
            musicWorks[musicWorkId].IPAddress = _IPaddress;
            musicWorks[musicWorkId].musicWorkOwner = participants[_ownerId].participantAddress;
            musicWorks[musicWorkId].mfgTimeStamp = uint32(block.timestamp);
            return musicWorkId;
        }
    }
    
    
    function getMusicWork(uint32 _musicWorkId) public view returns(string memory,string memory,uint32,address,string memory,uint32,bool){
        return (
        musicWorks[_musicWorkId].partNum,
        musicWorks[_musicWorkId].musicName,
        musicWorks[_musicWorkId].cost,
        musicWorks[_musicWorkId].musicWorkOwner,
        musicWorks[_musicWorkId].IPAddress,
        musicWorks[_musicWorkId].mfgTimeStamp,
        musicWorks[_musicWorkId].falseOrture
        );
    }
    
    modifier onlyOwner(uint32 _musicWorkId){
        require(msg.sender == musicWorks[_musicWorkId].musicWorkOwner,"");
        _;
    }
    
    function userBuySong(uint32 _user1Id,uint32 _user2Id, uint32 _proId,uint32 _owner) onlyOwner(_proId) public returns(bool){
        participant memory p1 = participants[_user1Id];
        participant memory p2 = participants[_user2Id];
        uint32 ownership_id = owner_id++;
        
        if(keccak256(abi.encodePacked(p1.participanType))== keccak256("Artist")
        && keccak256(abi.encodePacked(p2.participanType)) == keccak256("user")){
            ownerships[ownership_id].musicWorkId = _proId;
            ownerships[ownership_id].musicWorkOwner = p2.participantAddress;
            ownerships[ownership_id].ownerId = _user2Id;
            ownerships[ownership_id].trxtTimeStamp = uint32(block.timestamp);
            musicWorks[_proId].musicWorkOwner = participants[_owner].participantAddress;
            musicWorkTrack[_proId].push(ownership_id);
            emit TransForOwnership(_proId);
            
            return(true);
        }
        else if(keccak256(abi.encodePacked(p1.participanType))==keccak256("Artist") 
        && keccak256(abi.encodePacked(p2.participanType)) == keccak256("Artist")){
             ownerships[ownership_id].musicWorkId = _proId;
            ownerships[ownership_id].musicWorkOwner = p2.participantAddress;
            ownerships[ownership_id].ownerId = _user2Id;
            ownerships[ownership_id].trxtTimeStamp = uint32(block.timestamp);
            musicWorks[_proId].musicWorkOwner = participants[ownership_id].participantAddress;
            musicWorkTrack[_proId].push(ownership_id);
            emit TransForOwnership(_proId);
            
            return(true);
        }
        else if(keccak256(abi.encodePacked(p1.participanType))==keccak256("user") 
        && keccak256(abi.encodePacked(p2.participanType)) == keccak256("user")){
            ownerships[ownership_id].musicWorkId = _proId;
            ownerships[ownership_id].musicWorkOwner = p2.participantAddress;
            ownerships[ownership_id].ownerId = _user2Id;
            ownerships[ownership_id].trxtTimeStamp = uint32(block.timestamp);
            musicWorks[_proId].musicWorkOwner = participants[ownership_id].participantAddress;
            musicWorkTrack[_proId].push(ownership_id);
            emit TransForOwnership(_proId);
            
            return(true);
        }
    }
    
    function getOwnership(uint32 _regId) public view returns (uint32,uint32,address,uint32,string memory){
        userOwnership memory r = ownerships[_regId];
        return(r.musicWorkId,r.ownerId,r.musicWorkOwner,r.trxtTimeStamp,r.IPAddress);
    }
    
    function authenticateParticipant(uint32 _uid,string memory _uname,string memory _pass,string memory _utype) public view returns(bool){
        if(keccak256(abi.encodePacked(participants[_uid].participanType)) == keccak256(abi.encodePacked(_utype))){
            if(keccak256(abi.encodePacked(participants[_uid].userName))==keccak256(abi.encodePacked(_uname))){
                if(keccak256(abi.encodePacked(participants[_uid].passwd))==keccak256(abi.encodePacked(_pass))){
                    return(true);
                }
            }
        }
        
        return(false);
    }
}