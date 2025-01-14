import { useState } from "react";

const TextShow = () => {

    const [text,useText] = useState(true)

    const textShow = () => {
        useText((text) => !text)
    }

    return (
        <div>
            <button onClick={textShow}>Показать || Скрыть</button>
            {text && <p>Вот текст</p>}
        </div>
    )
}

export default TextShow;