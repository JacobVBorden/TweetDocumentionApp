import React, { Component } from 'react';

class queryInput extends Component {
    constructor(props){
        super(props);
        this.state = { 
            query: this.props.query
         };

         this.submit = this.submit.bind(this);
         this.handleChange = this.handleChange.bind(this);
         this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    submit(){
        this.props.submitInput(this.state.query);
    }
    handleChange(event){
        this.setState({
            query: event.target.value
        })
    }
    handleKeyPress(e){
        if(e.key === 'Enter'){
            this.submit();
        }
    }
    render() { 
        const inputBarCSS = {
            minHeight: "24px", 
            boxSizing: "borderBox", 
            margin: "10px", 
            width: "30vw"
        }
        return ( 
            <div>Query:
                <input type='text' placeholder={this.props.query} onChange={this.handleChange} onKeyDown={this.handleKeyPress} style={inputBarCSS}/>
                <input className='inputButton' type='button' value='submit' onClick={this.submit}/>
            </div>
         );
    }
}
 
export default queryInput;