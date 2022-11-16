import React,{useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";

function About() {
  const [myStyle,setMyStyle] = useState({
    color: "black",
    backgroundColor: "white"
    
  });
  const[btntext,setBtnText]=useState("Enable Dark Mode")

  const toggleStyle = () => {
    {
      if(myStyle.color==='white'){
setMyStyle({
    color: "black",
    backgroundColor: "white",
    border:"1px solid black"}
)
setBtnText("Enable Dark Mode")
      } else {
        setMyStyle({
            color: "white",
            backgroundColor: "black",
            border:"1px solid white"}
        )
        setBtnText("Enable Light Mode")
      }
    }
  };
  return (
    <>
      <div className="container my-3" style={myStyle}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" style={myStyle}>
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="container my-3">
        <Button variant="primary" onClick={toggleStyle}>{btntext}</Button>{" "}
      </div>
    </>
  );
}
export default About;
