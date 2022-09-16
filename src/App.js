import React, { Component } from 'react';
// import ReactDOM from "react-dom/client";
// import logo from './logo.svg';
// import './App.css';
class Great extends Component {
constructor(props) {
  super(props);
  this.state={
    value: 'Obayemi'
  }
}

Names = () => {
  this.setState({
    value: <span>My names are: {this.props.name+' '+this.props.title}</span>
  })
}

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>;
        <button onClick={this.Names} style={{padding: 10, borderRadius: 10, backgroundColor:'red', color:'white'}}>Click Me!</button>
      </div>
    );
  }
}

export default Great;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
