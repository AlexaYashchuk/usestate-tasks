import React from "react";

class TextShowClass extends React.Component {

    constructor() {
        super(),
        this.state = {text : true}
    }

    hideText = () => {
        this.setState({
            text: this.state.text = !this.state.text
        })
    }

    render() {
        return(
            <div>
            <button onClick={this.hideText}>Показать || Скрыть</button>
            {this.state.text && <p>Вот текст</p>}
        </div>
        )
    }

}

export default TextShowClass