import React, { useState } from "react";

export default function Apptext(props) {
  const clickUp = () => {
    //  console.log(text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!' , 'success')
  };
  const clickCopy = () => {
    //  console.log(text)
    let copytext = document.getElementById('myBox')
    copytext.select()
    navigator.clipboard.writeText(copytext.value)
    props.showAlert('Text copied!' , 'primary ')

  };
  const clickLo = () => {
    //  console.log(text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase!' , 'secondary')

  };
  const chnageValue = (event) => {
    // console.log(event.target.value)
    setText(event.target.value);
  };
  const clickSpRemove = () => {
    let spaceText = text.split(/[ ]+/)
    setText(spaceText.join(' '));
    props.showAlert('Text cleared!' , 'danger')
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-5">
        <div>
          <h1 className={`text-${props.mode.color === 'black'?'dark':'light'}`}>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={chnageValue}
            name=""
            id="myBox"
            rows="10"
            style={{
              backgroundColor: `${props.mode.color === 'black'?'white':'grey'}`,
              color: `${props.mode.color === 'black'?'black':'white'}`
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mt-3 mx-1" onClick={clickUp}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mt-3 mx-1" onClick={clickLo}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mt-3 mx-1" onClick={clickCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mt-3 mx-1" onClick={clickSpRemove}>
          Space Remover
        </button>
      </div>
      <div className="container">
        <h2 className={`text-${props.mode.color === 'black'?'dark':'light'}`}>Text Summary</h2>
        <p className={`text-${props.mode.color === 'black'?'dark':'light'}`}>
          {text.split(" ").length} words {text.length} Characters
        </p>
        <h2 className={`text-${props.mode.color === 'black'?'dark':'light'}`}>Perview</h2>
        <p className={`text-${props.mode.color === 'black'?'dark':'light'}`}>{text.length>0?text:'Enter something to preview it here'}</p>
      </div>
    </>
  );
}
