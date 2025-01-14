import React from "react";

class InputClass extends React.Component {

    constructor() {
        super(),
        this.state = {text:``}
    }

    input = (event) => {
        this.setState(() =>({
            text: event.target.value
        }))

    }


    render() {
        return(
            <div>
            <input 
            type="text" 
            value={this.text} 
            onChange={this.input} 
            placeholder="Сюда вводим текст">    
            </input>
            <p>{this.state.text}</p>
        </div>
        )
    }
}

export default InputClass