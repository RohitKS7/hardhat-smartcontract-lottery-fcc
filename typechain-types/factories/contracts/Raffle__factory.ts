/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Raffle, RaffleInterface } from "../../contracts/Raffle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "vrfCoordinatorV2",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "gasLane",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "entranceFee",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "callbackGasLimit",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "RaffleEnter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "RequestedRaffleWinner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "WinnerPicked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "enterRaffle",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntranceFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getInterval",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastTimeStamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumWords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getPlayer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRaffleState",
    outputs: [
      {
        internalType: "enum Raffle.RaffleState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRecentWinner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRequestConfirmations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040523480156200001257600080fd5b5060405162001eac38038062001eac83398181016040528101906200003891906200038a565b85620000596200004d6200015860201b60201c565b6200016060201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050508573ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508360e081815250508261012081815250508467ffffffffffffffff1660c08167ffffffffffffffff1660c01b81525050816003819055506000600560006101000a81548160ff0219169083600181111562000128576200012762000426565b5b0217905550426001819055508063ffffffff166101008163ffffffff1660e01b8152505050505050505062000455565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002568262000229565b9050919050565b620002688162000249565b81146200027457600080fd5b50565b60008151905062000288816200025d565b92915050565b600067ffffffffffffffff82169050919050565b620002ad816200028e565b8114620002b957600080fd5b50565b600081519050620002cd81620002a2565b92915050565b6000819050919050565b620002e881620002d3565b8114620002f457600080fd5b50565b6000815190506200030881620002dd565b92915050565b6000819050919050565b62000323816200030e565b81146200032f57600080fd5b50565b600081519050620003438162000318565b92915050565b600063ffffffff82169050919050565b620003648162000349565b81146200037057600080fd5b50565b600081519050620003848162000359565b92915050565b60008060008060008060c08789031215620003aa57620003a962000224565b5b6000620003ba89828a0162000277565b9650506020620003cd89828a01620002bc565b9550506040620003e089828a01620002f7565b9450506060620003f389828a0162000332565b93505060806200040689828a0162000332565b92505060a06200041989828a0162000373565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60805160601c60a05160601c60c05160c01c60e0516101005160e01c610120516119ed620004bf60003960008181610804015261095e015260006106b30152600061066f015260006106900152600061063301526000818161037f01526103d301526119ed6000f3fe6080604052600436106100e85760003560e01c80635f1b0fd81161008a57806391ad27b41161005957806391ad27b4146102a0578063c1c244e8146102cb578063e55ae4e8146102f6578063f2fde38b14610333576100e8565b80635f1b0fd8146101f55780636e04ff0d14610220578063715018a61461025e5780638da5cb5b14610275576100e8565b80632cfcc539116100c65780632cfcc5391461016c5780634585e33b14610176578063473f1ddc1461019f57806353a2c19a146101ca576100e8565b806309bc33a7146100ed578063115cbaf5146101185780631fe543e314610143575b600080fd5b3480156100f957600080fd5b5061010261035c565b60405161010f9190610e8d565b60405180910390f35b34801561012457600080fd5b5061012d610366565b60405161013a9190610f1f565b60405180910390f35b34801561014f57600080fd5b5061016a600480360381019061016591906110d3565b61037d565b005b61017461043d565b005b34801561018257600080fd5b5061019d6004803603810190610198919061118a565b6105a0565b005b3480156101ab57600080fd5b506101b461077b565b6040516101c19190611218565b60405180910390f35b3480156101d657600080fd5b506101df6107a5565b6040516101ec9190610e8d565b60405180910390f35b34801561020157600080fd5b5061020a6107b4565b6040516102179190610e8d565b60405180910390f35b34801561022c57600080fd5b50610247600480360381019061024291906112e8565b6107c1565b6040516102559291906113d4565b60405180910390f35b34801561026a57600080fd5b506102736108a9565b005b34801561028157600080fd5b5061028a610931565b6040516102979190611218565b60405180910390f35b3480156102ac57600080fd5b506102b561095a565b6040516102c29190610e8d565b60405180910390f35b3480156102d757600080fd5b506102e0610982565b6040516102ed9190610e8d565b60405180910390f35b34801561030257600080fd5b5061031d60048036038101906103189190611404565b61098c565b60405161032a9190611218565b60405180910390f35b34801561033f57600080fd5b5061035a6004803603810190610355919061145d565b6109d4565b005b6000600354905090565b6000600560009054906101000a900460ff16905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461042f57337f00000000000000000000000000000000000000000000000000000000000000006040517f1cf993f400000000000000000000000000000000000000000000000000000000815260040161042692919061148a565b60405180910390fd5b6104398282610acc565b5050565b600354341015610482576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047990611510565b60405180910390fd5b6000600181111561049657610495610ea8565b5b600560009054906101000a900460ff1660018111156104b8576104b7610ea8565b5b146104f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ef9061157c565b60405180910390fd5b6004339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167f0805e1d667bddb8a95f0f09880cf94f403fb596ce79928d9f29b74203ba284d460405160405180910390a2565b60006105ba604051806020016040528060008152506107c1565b509050806105fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f4906115e8565b60405180910390fd5b426001819055506001600560006101000a81548160ff0219169083600181111561062a57610629610ea8565b5b021790555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635d3b1d307f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000060037f000000000000000000000000000000000000000000000000000000000000000060016040518663ffffffff1660e01b81526004016106f4959493929190611680565b602060405180830381600087803b15801561070e57600080fd5b505af1158015610722573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074691906116e8565b9050807fcd6e45c8998311cab7e9d4385596cac867e20a0587194b954fa3a731c93ce78b60405160405180910390a250505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600163ffffffff16905090565b6000600361ffff16905090565b600060606000600560009054906101000a900460ff1660018111156107e9576107e8610ea8565b5b600060018111156107fd576107fc610ea8565b5b14905060007f0000000000000000000000000000000000000000000000000000000000000000600154426108319190611744565b119050600080600480549050119050600080471190508280156108515750835b801561085a5750805b80156108635750815b9550856040518060400160405280600381526020017f30783000000000000000000000000000000000000000000000000000000000008152509550955050505050915091565b6108b1610d01565b73ffffffffffffffffffffffffffffffffffffffff166108cf610931565b73ffffffffffffffffffffffffffffffffffffffff1614610925576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091c906117c4565b60405180910390fd5b61092f6000610d09565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000600154905090565b6000600482815481106109a2576109a16117e4565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6109dc610d01565b73ffffffffffffffffffffffffffffffffffffffff166109fa610931565b73ffffffffffffffffffffffffffffffffffffffff1614610a50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a47906117c4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ac0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab790611885565b60405180910390fd5b610ac981610d09565b50565b600060048054905082600081518110610ae857610ae76117e4565b5b6020026020010151610afa91906118d4565b9050600060048281548110610b1257610b116117e4565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600067ffffffffffffffff811115610b9b57610b9a610f90565b5b604051908082528060200260200182016040528015610bc95781602001602082028036833780820191505090505b5060049080519060200190610bdf929190610dcd565b506000600560006101000a81548160ff02191690836001811115610c0657610c05610ea8565b5b021790555060008173ffffffffffffffffffffffffffffffffffffffff1647604051610c3190611936565b60006040518083038185875af1925050503d8060008114610c6e576040519150601f19603f3d011682016040523d82523d6000602084013e610c73565b606091505b5050905080610cb7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cae90611997565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff167f5b690ec4a06fe979403046eaeea5b3ce38524683c3001f662c8b5a829632f7df60405160405180910390a25050505050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054828255906000526020600020908101928215610e46579160200282015b82811115610e455782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610ded565b5b509050610e539190610e57565b5090565b5b80821115610e70576000816000905550600101610e58565b5090565b6000819050919050565b610e8781610e74565b82525050565b6000602082019050610ea26000830184610e7e565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110610ee857610ee7610ea8565b5b50565b6000819050610ef982610ed7565b919050565b6000610f0982610eeb565b9050919050565b610f1981610efe565b82525050565b6000602082019050610f346000830184610f10565b92915050565b6000604051905090565b600080fd5b600080fd5b610f5781610e74565b8114610f6257600080fd5b50565b600081359050610f7481610f4e565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610fc882610f7f565b810181811067ffffffffffffffff82111715610fe757610fe6610f90565b5b80604052505050565b6000610ffa610f3a565b90506110068282610fbf565b919050565b600067ffffffffffffffff82111561102657611025610f90565b5b602082029050602081019050919050565b600080fd5b600061104f61104a8461100b565b610ff0565b9050808382526020820190506020840283018581111561107257611071611037565b5b835b8181101561109b57806110878882610f65565b845260208401935050602081019050611074565b5050509392505050565b600082601f8301126110ba576110b9610f7a565b5b81356110ca84826020860161103c565b91505092915050565b600080604083850312156110ea576110e9610f44565b5b60006110f885828601610f65565b925050602083013567ffffffffffffffff81111561111957611118610f49565b5b611125858286016110a5565b9150509250929050565b600080fd5b60008083601f84011261114a57611149610f7a565b5b8235905067ffffffffffffffff8111156111675761116661112f565b5b60208301915083600182028301111561118357611182611037565b5b9250929050565b600080602083850312156111a1576111a0610f44565b5b600083013567ffffffffffffffff8111156111bf576111be610f49565b5b6111cb85828601611134565b92509250509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611202826111d7565b9050919050565b611212816111f7565b82525050565b600060208201905061122d6000830184611209565b92915050565b600080fd5b600067ffffffffffffffff82111561125357611252610f90565b5b61125c82610f7f565b9050602081019050919050565b82818337600083830152505050565b600061128b61128684611238565b610ff0565b9050828152602081018484840111156112a7576112a6611233565b5b6112b2848285611269565b509392505050565b600082601f8301126112cf576112ce610f7a565b5b81356112df848260208601611278565b91505092915050565b6000602082840312156112fe576112fd610f44565b5b600082013567ffffffffffffffff81111561131c5761131b610f49565b5b611328848285016112ba565b91505092915050565b60008115159050919050565b61134681611331565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561138657808201518184015260208101905061136b565b83811115611395576000848401525b50505050565b60006113a68261134c565b6113b08185611357565b93506113c0818560208601611368565b6113c981610f7f565b840191505092915050565b60006040820190506113e9600083018561133d565b81810360208301526113fb818461139b565b90509392505050565b60006020828403121561141a57611419610f44565b5b600061142884828501610f65565b91505092915050565b61143a816111f7565b811461144557600080fd5b50565b60008135905061145781611431565b92915050565b60006020828403121561147357611472610f44565b5b600061148184828501611448565b91505092915050565b600060408201905061149f6000830185611209565b6114ac6020830184611209565b9392505050565b600082825260208201905092915050565b7f4e6f7420656e6f7567682076616c75652073656e740000000000000000000000600082015250565b60006114fa6015836114b3565b9150611505826114c4565b602082019050919050565b60006020820190508181036000830152611529816114ed565b9050919050565b7f526166666c65206973206e6f74206f70656e0000000000000000000000000000600082015250565b60006115666012836114b3565b915061157182611530565b602082019050919050565b6000602082019050818103600083015261159581611559565b9050919050565b7f55706b656570206e6f74206e6565646564000000000000000000000000000000600082015250565b60006115d26011836114b3565b91506115dd8261159c565b602082019050919050565b60006020820190508181036000830152611601816115c5565b9050919050565b6000819050919050565b61161b81611608565b82525050565b600067ffffffffffffffff82169050919050565b61163e81611621565b82525050565b600061ffff82169050919050565b61165b81611644565b82525050565b600063ffffffff82169050919050565b61167a81611661565b82525050565b600060a0820190506116956000830188611612565b6116a26020830187611635565b6116af6040830186611652565b6116bc6060830185611671565b6116c96080830184611671565b9695505050505050565b6000815190506116e281610f4e565b92915050565b6000602082840312156116fe576116fd610f44565b5b600061170c848285016116d3565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061174f82610e74565b915061175a83610e74565b92508282101561176d5761176c611715565b5b828203905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006117ae6020836114b3565b91506117b982611778565b602082019050919050565b600060208201905081810360008301526117dd816117a1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061186f6026836114b3565b915061187a82611813565b604082019050919050565b6000602082019050818103600083015261189e81611862565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006118df82610e74565b91506118ea83610e74565b9250826118fa576118f96118a5565b5b828206905092915050565b600081905092915050565b50565b6000611920600083611905565b915061192b82611910565b600082019050919050565b600061194182611913565b9150819050919050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b6000611981600f836114b3565b915061198c8261194b565b602082019050919050565b600060208201905081810360008301526119b081611974565b905091905056fea2646970667358221220dfdc16cd140994c8797bdb4a73816247181cb1abb1ba8e20e9fdcc4426eec2aa64736f6c63430008080033";

type RaffleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RaffleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Raffle__factory extends ContractFactory {
  constructor(...args: RaffleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    vrfCoordinatorV2: string,
    subscriptionId: BigNumberish,
    gasLane: BytesLike,
    interval: BigNumberish,
    entranceFee: BigNumberish,
    callbackGasLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Raffle> {
    return super.deploy(
      vrfCoordinatorV2,
      subscriptionId,
      gasLane,
      interval,
      entranceFee,
      callbackGasLimit,
      overrides || {}
    ) as Promise<Raffle>;
  }
  override getDeployTransaction(
    vrfCoordinatorV2: string,
    subscriptionId: BigNumberish,
    gasLane: BytesLike,
    interval: BigNumberish,
    entranceFee: BigNumberish,
    callbackGasLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      vrfCoordinatorV2,
      subscriptionId,
      gasLane,
      interval,
      entranceFee,
      callbackGasLimit,
      overrides || {}
    );
  }
  override attach(address: string): Raffle {
    return super.attach(address) as Raffle;
  }
  override connect(signer: Signer): Raffle__factory {
    return super.connect(signer) as Raffle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RaffleInterface {
    return new utils.Interface(_abi) as RaffleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Raffle {
    return new Contract(address, _abi, signerOrProvider) as Raffle;
  }
}