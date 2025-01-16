import React from "react";

const styleColor ={
    //color: this.state.color,
    border: `2px solid black`,
    backgroundColor: `green` 
};

class ColorChangeClass extends React.Component {

    // constructor() {
    //     super(),
    //     this.state = {color:`black`}
    // }
    state = {
        color:`black`
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
        return(
            <div>
            <button onClick={this.colorChange}>Поменять цвет</button>
            <p style={{ ...styleColor, color: this.state.color }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        )
    }

}

export default ColorChangeClass;