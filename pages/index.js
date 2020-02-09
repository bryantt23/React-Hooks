import React, {useState} from 'react';

const InputElement = () => {
    const [inputText, setInputText]=useState("");

    return (
        <div>
            <input placeholder="Enter some text" onChange={(e)=>{setInputText(e.target.value)}}/>
            {inputText}
        </div>

    )

}

export default InputElement;