import React from "react";

class ColorChangeClass extends React.Component {

    constructor() {
        super(),
        this.state = {color:`black`}
    }
    //поменяется один раз 
    // colorChange = () => {
    //     this.setState({color: `red`}) 

    // }
    colorChange = () => {

        this.setState(state => ({
            color: (state.color === `black`) ? `red` : `black`
        }));
    }

    render() {

        const styleColor ={
            color: this.state.color,
            border: `2px solid black`,
            backgroundColor: `green` 
        };

        
        return(
            <div>
            <button onClick={this.colorChange}>Поменять цвет</button>
            <p style={styleColor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        )
    }

}

export default ColorChangeClass;