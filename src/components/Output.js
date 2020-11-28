import React, { Component } from 'react';

class Output extends Component {
    state = {  }
    render() { 
        const textareaCSS = {
            width: '70vw',
            height: '85vh',
            borderStyle: 'solid',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            resize: 'none'
        }
        return ( 
            <div>
                <textarea style={textareaCSS} readOnly></textarea>
            </div>
         );
    }
}
 
export default Output;