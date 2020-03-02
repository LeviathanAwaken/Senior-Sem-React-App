//import mysql from 'mysql';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from './api/axiosConfig';

class App extends Component {

  state={
    cars: []
  }
  componentDidMount(){
    axios.get('/cars')
      .then(res => {
        this.setState({ cars: res.data })
        alert(this.state.cars[0].cars)
      })
      .catch(err => {
        alert('error!')
      })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Parking Analysis via Image Processing</h2>
        </div>
        <p className="App-intro">
          Digital Ocean Server <code> </code> 
        </p>
        {
          this.state.cars.map((car) =>{
            return (
              <div>
                <p style={{float: "left"}}>{car.id} </p>
                <p style={{float: "left"}}>{car.cars}</p>
                <br></br>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
