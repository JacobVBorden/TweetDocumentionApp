import React, { Component } from 'react';
import QueryInput from './QueryInput';

class input extends Component {
    constructor(props){
        super(props);
        this.state = { 
            query: "Overstock"
         };

    }

    submitInput(query){
        console.log(query);
    }
    render() { 
        return ( 
            <div>
                <QueryInput query={this.state.query} submitInput={this.submitInput}/>
            </div>
         );
    }
}
 
export default input;