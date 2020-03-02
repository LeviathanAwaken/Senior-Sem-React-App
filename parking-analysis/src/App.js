import mysql from 'mysql';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
//   componentDidMount(){
//     let connection = mysql.createConnection({
//       host     : '206.189.223.40',
//       user     : 'root',
//       password : 'T5&h=<.\\hQjh\\~Bh',
//       database : 'parking_analysis'
//     });
    
//     connection.connect((err) => {
//       if (err) {
//           console.log('Connection error message: ' + err.message);
//           return;
//       }
//       console.log('Connected!')
//     });
  // }
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
      </div>
    );
  }
}

export default App;
