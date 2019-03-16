import Web3 from 'web3';
let web3;

async function setup (){
    // Suppor for 'truffle develop'

    // This is with truffle develop command
    // let provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');

    // This is for Ganache GUI running
    let provider = new Web3.providers.HttpProvider('http://127.0.0.1:9494');
    
    web3 = new Web3(provider);

    try {
        await web3.eth.net.getId();
        console.log('💻');
        
    } catch (error) {
        console.log('☁️');
        
    }
}

setup();

export default web3;
