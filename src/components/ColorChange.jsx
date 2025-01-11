import { useState } from "react";

const ColorChange = () => {

    const [color, setColor] = useState('black')

    const colorChange = () => {
        setColor((color) => {
            if (color === 'black') {
                return `grey`
            }
            else return `black`
        })

    }
    
    const styleColor ={
        color: color,
        border: `2px solid black`,
        backgroundColor: `green` 
    };

    return (
        <div>
            <button onClick={colorChange}>Поменять цвет</button>
            <p style={styleColor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
    );
}

export default ColorChange;