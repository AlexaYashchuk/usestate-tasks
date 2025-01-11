import { useState } from "react";

const Input = () => {

    const [text,setText] = useState(``)

    const input = (event) => {
        setText(event.target.value)
    }

    return (
        <div>
            <input type="text" value={text} onChange={input} placeholder="Сюда вводим текст"></input>
            <p>{text}</p>
        </div>
    )


}

export default Input;