import React from 'react';
import './App.css';
import InputComponent from './components/InputComponent';
import ExportButton from './components/ExportButton';
import Output from './components/Output'

class App extends React.Component {
  state = {  }
  render() { 
    return (
      
      <div className="mainPage">
        <div className= "input"><InputComponent/></div>
        <Output/>
        <ExportButton/>
      </div>
      );
  }
}
 

export default App;
