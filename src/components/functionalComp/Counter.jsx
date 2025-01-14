import { useState } from "react";

const Counter = () => {

    const [count,setCount] = useState(0)

    const counter = () => {
        setCount((count) => count+1)
    }

    return(
        <div>
            <p>Значение элемента: {count}</p>
            <button onClick={counter}>Плюсую</button>
        </div>
    )


}

export default Counter;