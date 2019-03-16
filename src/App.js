import React, { Component } from 'react';
import logo from './logo.svg';
import web3 from './utils/web3Provider';
import simpleContract from './utils/exporter';
import './App.css';


class App extends Component {

  state = { contract: {}, def: '', valor: 'x' }

  componentDidMount() {
   this.init()

  }

  init = async () => {
    let contract = await new web3.eth.Contract(simpleContract.abi, simpleContract.addr);
    let def = await web3.eth.getAccounts();
    def = def[0];
    console.log(5454548);
    
    this.setState({ contract, def })
  }

  obtain = async () => {
    let valor = await this.state.contract.methods.get().call({from: this.state.def})
    this.setState({valor})
  }

  guardar = async () => {
    await this.state.contract.methods.stored(Math.floor(Math.random() * 11)).send({from: this.state.def});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br/>
          <span role='img' aria-label='hola'>💰</span>
          <button onClick={this.obtain}>Obtener numero ↩️</button>
          <button onClick={this.guardar}>Guardar numero 💾</button>
          <label htmlFor="">{this.state.valor}</label>
        </header>
      </div>
    );
  }
}

export default App;
