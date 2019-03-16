const abi = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "a",
          "type": "int256"
        }
      ],
      "name": "stored",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];

const addr = '0x149ecBE5bA99FDdb7D3307ee5856ca888430a435';

const contract = {abi, addr}
export default contract;
