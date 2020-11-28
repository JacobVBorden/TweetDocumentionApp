import React, { Component } from 'react';

class ImportButton extends Component {
    state = {  }
    render() { 
        const buttonCSS ={
            position: 'absolute',
            right: '20px',
            bottom: '20px',
            backgroundColor: '#008CBA',
            fontSize: '16px',
            borderRadius: '12px',
            padding: '10px 15px',
            color: 'white'
        }
        return (  
            <div><input type='button' value="Export" style={buttonCSS}/></div>
        );
    }
}
 
export default ImportButton;