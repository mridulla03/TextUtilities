import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Textform(props) {
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!")
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!")

  };const handleExtraSpaces = ()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!")

};const handleCapital=()=>{
    let newText = text.charAt(0).toUpperCase()+text.slice(1).toLowerCase()
    setText(newText)
    props.showAlert("First letter capitalized!")

}; const handleCopy=()=>{
    navigator.clipboard.writeText(text)
    props.showAlert("Copied to clipboard!")
}
const handleClear=()=>{
    setText("")
    props.showAlert("Text cleared!")

}
  const handleChange = (event) => {
    setText(event.target.value);
  };

  
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="conatainer"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.title}</h3>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              as="textarea"
              value={text}
              onChange={handleChange}
              rows={8}
            />
          </Form.Group>
          <Button className='mx-1 my-1' disabled={text.length===0} variant="primary" onClick={handleUpClick}>
            Convert to Upper Case
          </Button>{" "}
          <Button className='mx-1 my-1' disabled={text.length===0} variant="primary" onClick={handleLoClick}>
            Convert to Lower Case
          </Button>{" "}
          <Button className='mx-1 my-1' disabled={text.length===0} variant="primary" onClick={handleCopy}>
            Copy Text
          </Button>{" "}
          <Button className='mx-1 my-1' disabled={text.length===0} variant="primary" onClick={handleCapital}>
            Capitalize First Letter
          </Button>{" "}
          <Button className='mx-1 my-1' disabled={text.length===0} variant="primary" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </Button>{" "}
          <Button className='mx-1 my-1' disabled={text.length===0} variant="primary" onClick={handleClear}>
            Clear Text
          </Button>{" "}
        </Form>
      </div>
      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        {/* <h4>Your Text Summary</h4>
        <p>{text.split(" ").length} Words and {text.length} Letters
        <br />
        {0.008 * text.split(" ").length} Minutes to Read</p>
         */}
    <h4>Preview Text Here</h4>
        <p>{text}</p>
        
      </div>
    </>
  );
}
export default Textform;
