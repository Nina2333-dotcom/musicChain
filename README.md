

目录
=================

   * [一、项目宗旨 <g-emoji class="g-emoji" alias="mega" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4e3.png">📣</g-emoji>]()
   * [二、方案架构 <g-emoji class="g-emoji" alias="mega" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4e3.png">📣</g-emoji>]()
      * [2.1背景 <g-emoji class="g-emoji" alias="mag_right" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f50e.png">🔎</g-emoji>]()
         * [2.1.1 音乐著作权的交易模式分析]()
         * [2.1.2 音乐产业坠入版权困境]()
         * [2.1.3 创作受限，创作成本过高]()
         * [2.1.4  登记过程复杂、时间长]()
         * [2.1.5  侵权事件维权难、成本高]()
         * [2.1.6  创新思路]()
      * [2.2 风险、问题  <g-emoji class="g-emoji" alias="mag_right" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f50e.png">🔎</g-emoji>]()
         * [2.2.1 大环境]()
         * [2.2.2 技术]()
      * [2.3开发环境的配置 <g-emoji class="g-emoji" alias="mag_right" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f50e.png">🔎</g-emoji>]()
      * [2.4运行环境的配置 <g-emoji class="g-emoji" alias="mag_right" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f50e.png">🔎</g-emoji>]()
      * [2.5系统功能描述 <g-emoji class="g-emoji" alias="mag_right" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f50e.png">🔎</g-emoji>]()
         * [2.5.1功能汇总]()
   * [三、环境依赖 <g-emoji class="g-emoji" alias="mega" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4e3.png">📣</g-emoji>]()
      * [3.1 项目启动 <g-emoji class="g-emoji" alias="mag_right" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f50e.png">🔎</g-emoji>]()
   * [四、代码 <g-emoji class="g-emoji" alias="mega" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4e3.png">📣</g-emoji>]()
      * [接口测试用例]()
      * [1.软件安装 <g-emoji class="g-emoji" alias="mag_right" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f50e.png">🔎</g-emoji>]()
      * [2.连接metaMask钱包 <g-emoji class="g-emoji" alias="mag_right" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f50e.png">🔎</g-emoji>]()
      * [3.Web3J创建,导入智能合约abi <g-emoji class="g-emoji" alias="mag_right" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f50e.png">🔎</g-emoji>]()
      * [4.智能合约 <g-emoji class="g-emoji" alias="mag_right" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f50e.png">🔎</g-emoji>]()
   * [总结]()





<hr style=" border:solid; width:100px; height:1px;" color=#000000 size=1">



# 一、项目宗旨 :mega:
此项目是一个为用户提供交易音乐版权服务的平台，用户可以通过线上平台完成音乐项目交易、购买和出售产品以及使用平台提供的其他相关服务。买方和卖方要使用前述服务必须在本平台上注册帐户。
本项目旨在让听众、用户触达更多好音乐的同时保障音乐人的利益，让音乐人和原创音乐兑现应有的价值。帮助音乐人管理和保护原创音乐版权，建立更合理的利益分配和监督机制，推动社会商业行为中音乐正版化的普及，以技术驱动内容产业结构升级，打造中国领先的音乐产业互联网平台。


# 二、方案架构 :mega:
①　借助区块链技术，打造区块链版权交易商城。帮助版权著作者和版权使用方建立一个真实有效的知识产权交易管理平台。
②　区块链存证:联合多家公信机构，将版权信息形成唯一有效的资产编码，链上确认权益。
③　引入智能合约:将传统线下版权登记等方式通过技术线上实现，避免繁琐的文书工作。支持在平台内流通，方便使用者购买。依赖于个人承诺、机构也可通过线上自动执行版权交易。
④　去中心化管理:交易数据采用区块链分布式账本记账，保证交易不可篡改。使用技术手段保证版权流转有效性，保障交易各方权益。

## 2.1背景 :mag_right:
当今时代是一个信息化时代，在信息化时代下，很多行业和领域都出现了翻天覆地的变革，包括出版行业。从唱片年代起，音乐产业就一直被版权问题所困扰。得益于计算机技术的进步，更多的人可以参与到音乐作品的创作与传播中来。同时，互联网，尤其是移动互联网的普及，进一步提高了音乐作品复制的便利性和传播的广泛性，又给饱受盗版之苦的音乐产业带来了新的挑战。虽然就目前来看，全世界对版权的保护机制在不断完善，但音乐版权保护在新媒介环境中仍显得力不从心。
随着经济社会和信息科技的发展，数字化产品逐渐成为主导，数字音乐也将取代传统唱片，占据绝对主导地位。

目前正在使用的系统

### 2.1.1 音乐著作权的交易模式分析

歌手在完成创作后经过线上线下的一系列登记注册审核过后才能获得自己的音乐版权，再将自己的作品发送给唱片公司、音乐版权管理协会或是内容管理公司由他们对自己的作品进行发布定价，再经过手机厂商、移动运营商让我们听到歌曲。
### 2.1.2 音乐产业坠入版权困境
在以光盘和磁带为代表的唱片年代中，音乐产业凭借一整套比较完善的制作、推广、发行模式，唱片公司在二十世纪的最后二三十年还是赚得盆满钵满。可是随着互联网的迅速普及，极大地助长了音乐盗版现象，唱片公司销售量大幅下滑。在线音乐网站长期依靠风投输血，盈利模式单薄，盈利能力虚弱，盗版现象猖獗。可以说，在新媒介环境下，音乐的版权保护工作面临了前所未有的挑战。究其原因，笔者认为可大致概括为以下几点：
**一是网络音乐平台合理的授权模式没有形成。**
前几年，各网络音乐平台经历了从没有唱片公司的授权到十家左右获得非独家的授权的过程，2014年，一些大的音乐平台以获得唱片公司的独家授权的方式，纷纷跑马圈地抢占音乐资源，导致诉讼不断、纷争不止，也使音乐版权价格飙升，至今没有一家音乐平台盈利。
在国际上，网络音乐平台获得授权模式已经有比较成熟的经验，如苹果公司等，但在中国音乐平台合理的授权模式还需要进一步探索。
**二是网络音乐平台仍缺乏好的商业模式。**
可能有人说商业模式与版权保护关系不大，但事实上如果音乐平台的商业模式不能盈利，这些平台不可能持续向版权方购买版权，也谈不上保护音乐版权。关于商业模式，有些人认为就是向用户收费的模式，其实好的商业模式不完全等同于收费模式，各音乐平台应该充分利用自己的技术优势，并结合优质资源开发独特的、个性化的产品，用好的产品吸引用户，形成合理的商业模式，向用户收费只是**多种商业模式之一。
三是广大网民版权保护意识需要进一步提高。**
从我做起，自觉做到不买盗版、不用盗版，为正版音乐付费。如果网络音乐平台解决好上述两个问题，再加上网民版权保护意识逐步提高，相信我国音乐版权保护的状况会发生根本性好转。
### 2.1.3 创作受限，创作成本过高
数字出版的迷茫性核心，是版权的归属性和利益分配问题。计算机网络技术的发展，满足了媒体广布要求(谁不想自己的作品多发)，但损伤了媒体的赢利要求(谁愿意自己的东西被滥发)。更何况，掌握着现代化的快速内容发布的非正规通道，利用非自产内容粘着住大量读者，硬割去了大量的广告份额。
网络时代里的音乐多了传播渠道，也使得人们听歌的便利性增加。由实体唱片到电子专辑的过渡，其实也是人们对“收费音乐”概念淡化的过程。音乐是否应该收费，每个人都有自己不同的看法，但华语乐坛从来没有免费的音乐，制作一首歌的成本也远非你想的那么低廉。作者制作一首歌的成本普遍在十万以上，加之中间商成本高昂，使得创作的门槛逐步增加，而我们普通用户最终会为这些差价买单。
### 2.1.4  登记过程复杂、时间长 
由于技术限制，版权登记需要完成线上线下的注册，准备材料繁琐，时间长，耗费较多精力，无法满足当前市场作品量多、传播快的需求，著作权作者登记意愿低。
### 2.1.5  侵权事件维权难、成本高
著作权涉及范围较广，起步登记费用较高，对于一些简短文章、海报等小工作量作品而言，性价比不高。一旦发生侵权事件，投诉成本高，起诉成本更高。
推荐一个方案并说明理由
### 2.1.6  创新思路
正因为制作一首歌曲的时间难控，制作的成本难控，导致，作者在创作过程中的思想容易被抄袭，创作完成后的版权容易被侵犯，所以本项目将从区块链技术应用开始着手，对作者版权难保护的问题进行一个初步解决。对作者创作的过程以时间戳为记录，确定思路形成、创作过程的真实性，为今后版权的确权打下坚实的基础。ERC721代币的特性之一独一无二，代币可删除。这为解决数字音乐版权纠纷问题提高思路。将版权信息加入ERC721代币，代币由作者持有，作者享有对版权的操作权限，可以赋予他人进行操作的权限也可将代币转让给新的拥有者。在第三方操作期间若出现违规违法情况，作者可以吊销其操作权限。版权的所有变动情况都在作者的监控之下。作者在平台通过作品审查后即可发布，节省了中间商的成本，作者与用户可以直接点对点的进行版权、歌曲的购买。使得作者与用户都可以用相对低廉的价格达到共同的目的。
利用区块链技术打造版权保护平台，帮助原创作者快捷实现内容版权上链，保证版权唯一性。全面覆盖多种知识产权类型，解决当前版权保护成本高、效率低等问题，为著作权作者提供高效的版权保护解决方案，同时，提供基于区块链的版权交易解决方案，助力知识产权产业健康发展。

## 2.2 风险、问题  :mag_right:
项目目前只解决了部分作者版权的交易情况，对作者发布音乐后的版权盗用以及音乐盗版问题尚未解决。从大环境、技术二个方面来考虑项目的风险与问题，以下是这三个方面的深入分析。
### 2.2.1 大环境
目前对于数字音乐版权的问题解决并没有实质性的解决，一直处于理论理想状态。对与盗版猖獗的现象社会也疲于应对，在没有出现很好的解决技术之前一切可行方案都值得尝试。
### 2.2.2 技术
技术还有很大的提升空间以及改进空间。还有部分技术难点需要攻克。
## 2.3开发环境的配置 :mag_right:
|  | 标准配置 |  最低配置 |
|--|--|--|
|计算机硬件  | Widnows 10操作系统 |	Widnows 10操作系统  |
| 软件	 |Google Chrome 87.0.4280.88、Remix、WebStorm 2020.1.1	|Google Chrome 87.0.4280.88、Remix、WebStorm 2019.3.3 |
|其它 | 记事本、swarm、geth控制台|		记事本、swarm、geth控制台|


## 2.4运行环境的配置 :mag_right:
|  |标准配置| 最低配置|
|--|--|--|
| 计算机硬件 | Widnows 10操作系统|	Widnows 10操作系统 |
| 软件	 |Google Chrome 87.0.4280.88	|Google Chrome 87.0.4280.88  |
|其它 | swarm、geth控制台|	swarm、geth控制台 |


## 2.5系统功能描述 :mag_right:
### 2.5.1功能汇总
登入子系统
|  模块名称	 | 功能简述 | 
|--|--|
|登入模块  |用户登入平台  | 
|注册模块 |	用户注册账户加入平台 |

音乐信息子系统
|  模块名称	 | 功能简述 | 
|--|--|
|添加音乐作品  |由作者进行音乐信息录入，在上传完成后获得该作品版权 | 
|查询音乐作品 |	查询音乐作品的基本信息（名称，类型，作者等） |


	
	
	
用户信息子系统
|  模块名称	 | 功能简述 | 
|--|--|
|注册个人账户  |用户注册账户加入平台| 
|查看个人信息 |	用户查询个人信息（亦可修改个人信息） |


	
版权信息子系统
|  模块名称	 | 功能简述 | 
|--|--|
|添加音乐版权	  |由作者进行音乐信息录入，在上传完成后获得该作品版权| 
|查询音乐版权 |查询音乐作品的版权信息（版权IP，版权所有人地址） |
|查询音乐版权	 |查询音乐的版权信息 |
|授权	 |由作者对音乐版权进行授权，使得授权者可对版权进行操作 |
|   版权交易	|  由作者或授权者对该音乐版权进行交易 |

<hr style=" border:solid; width:100px; height:1px;" color=#000000 size=1">

# 三、环境依赖 :mega:

[以太坊，智能合约，web3.js 4.5.5 、solc 、JavaScript 、Chorme浏览器 ]

## 3.1 项目启动 :mag_right:
```c
> live-server --port=8080
```

# 四、代码 :mega:
用户界面测试的检查表
|检查项  |  测试人员的类别及其评价|
|--|--|
|窗口切换、移动、改变大小时正常吗？  | 	正常 |
| 各种界面元素的文字正确吗？（如标题、提示等）   |  	正确    |
|  各种界面元素的状态正确吗？（如有效、无效、选中等状态）  |  	正确    |
|各种界面元素支持键盘操作吗？    |   	支持   |
|  各种界面元素支持鼠标操作吗？  |    	支持  |
|  对话框中的缺省焦点正确吗？  |  	正确    |
|  数据项能正确回显吗？  |  	正确    |
| 对于常用的功能，用户能否不必阅读手册就能使用？   | 	不可以     |
|执行有风险的操作时，有“确认”、“放弃”等提示吗？    |   	有   |
|操作顺序合理吗？	    | 合理     |
|  有联机帮助吗？	  | 无     |
| 各种界面元素的布局合理吗？美观吗？   |     	合理、美观 |
|    各种界面元素的颜色协调吗？   |  	协调      |
|各种界面元素的形状美观吗？       |   美观     |
| 字体美观吗？      |   	美观     |
|图标直观吗？       |  直观      |
|  页面提交正常吗？     | 	正常       |	

## 接口测试用例
***接口A的函数原型： vertifyAccounts***
|输入/动作  | 期望的输出/相应 | 实际情况   |
|--|--|--|
|0x9Dcf17A9E5fa89E27bf6bB4Fd3843230DF450D99 ，1234	  | 	true	 |	true	 |
|0x9Dcf17A9E5fa89E27bf6bB4Fd3843230DF450D99 ，1235  | 	true	 |	false |

***接口B的函数原型	addMusic***
|输入/动作  | 期望的输出/相应 | 实际情况   |
|--|--|--|
|Ccc，0x9Dcf17A9E5fa89E27bf6bB4Fd3843230DF450D99，0268498459，1，http://127.0.0.1:8500/bzz:/9c9d957cb6639cb7eb93313b1ed69458e5144a61d6ad39b331174dab6951d446/背景图.jpeg，happy  | 	添加作品成功!	 |添加作品成功!|
|Ccc，0xE1459994eCb691d81d8660ABbDad0cE5A938d1af，0268498459，1，http://127.0.0.1:8500/bzz:/9c9d957cb6639cb7eb93313b1ed69458e5144a61d6ad39b331174dab6951d446/背景图.jpeg，happy  | 	添加作品成功!	 |添加作品失败，请查看用户角色是否为作者！|

***接口C的函数原型	getPeople***

|输入/动作  | 期望的输出/相应 | 实际情况   |
|--|--|--|
|0x9Dcf17A9E5fa89E27bf6bB4Fd3843230DF450D99  | 	0:"0"1:"zlx"2:"0x9Dcf17A9E5fa89E27bf6bB4Fd3843230DF450D99"3:"Artist"4:["1","2","3"]5: [] |0:"0"1:"zlx"2:"0x9Dcf17A9E5fa89E27bf6bB4Fd3843230DF450D99"3:"Artist"4:["1","2","3"]5: []|
|0x9Dcf17A9E5fa89E27bf6bB4Fd3843230DF450D99	 | 	0:"0"1:"zlx"2:"0x9Dcf17A9E5fa89E27bf6bB4Fd3843230DF450D99"3:"Artist"4:["1","2","3"]5: []	 |UncaughtError:invalid address (argument="address", value="", code=INVALID_ARGUMENT, version=address/5.0.2) (argument="peo_addr", value="", code=INVALID_ARGUMENT, version=abi/5.0.0-beta.153)|

***接口D的函数原型	getOwnerShip***

|输入/动作  | 期望的输出/相应 | 实际情况   |
|--|--|--|
|3  | 0x9Dcf17A9E5fa89E27bf6bB4Fd3843230DF450D99	 |	0x9Dcf17A9E5fa89E27bf6bB4Fd3843230DF450D99	 |
|4 | 0x9Dcf17A9E5fa89E27bf6bB4Fd3843230DF450D99 |	Uncaught Error: invalid BigNumber string (argument="value", value="", code=INVALID_ARGUMENT, version=bignumber/5.0.5) |
|2 | 0x9Dcf17A9E5fa89E27bf6bB4Fd3843230DF450D99 |	MetaMask -RPC Error: execution reverted {code: -32000, message: "execution reverted"} |

## 1.软件安装 :mag_right:
<font color=#999AAA >solc下载后直接可运行，例如验证安装版本：
```c
~$ solc --version
```
<font color=#999AAA >web3j命令行工具下载后先用unzip解压，然后执行其中的web3j即可。例如：
```c
~$ web3j version
```
<font color=#999AAA >这两个工具主要用于solidity智能合约的处理。

## 2.连接metaMask钱包 :mag_right:



```c
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}

console.log("isMetaMask：" + ethereum.isMetaMask)
```

## 3.Web3J创建,导入智能合约abi :mag_right:

<font color=#999AAA >代码如下（示例）：

```c
let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const contractAbi = ["合约的abi文件"];
var contract = new web3.eth.Contract(contractAbi, "你合约的部署地址");
console.log("contract: ", contract);
```

<font color=#999AAA >该处使用的ws网络协议请求的数据。

<hr style=" border:solid; width:100px; height:1px;" color=#000000 size=1">

## 4.智能合约 :mag_right:
你的智能合约可以引入这些库：

```c
pragma solidity >=0.5.0<0.6.0;
import "./ERC721Interface.sol";

contract musicChain is ERC721 {
  	using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
}
```
<hr style=" border:solid; width:100px; height:1px;" color=#000000 size=1">

# 总结
<font color=#999AAA >项目还在开发中，有部分功能尚未实现。
