import { useRef, useState } from "react";

export default function Input() {
    const [inputText, setText] = useState('hello');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
        <input value={inputText} onChange={handleChange} />
        <p>You typed: {inputText}</p>
        <button onClick={() => setText('hello')}>
            Reset
        </button>
        </>
    );
}