import React from "react";

class CounterClass extends React.Component {

    constructor() {
        super()
        this.state = {count: 0} 
    }

    counter = () => {
        this.setState((state) => ({
        count: state.count +1 
    }));
    }

    render() {
        return(
            <div>
            <p>Значение элемента: {this.state.count}</p>
            <button onClick={this.counter}>Плюсую</button>
            </div>
        )
    }

}

export default CounterClass