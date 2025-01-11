import { useState } from "react";

const TextShow = () => {

    const [text,useText] = useState(true)

    const textShow = () => {
        useText((text) => !text)
    }

    return (
        <div>
            {text && <p>Вот текст</p>}
            <button onClick={textShow}>Показать || Скрыть</button>
        </div>
    )
}

export default TextShow;