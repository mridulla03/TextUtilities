import Alert from 'react-bootstrap/Alert';
import React,{useState} from 'react'


function Showalert(props){
  const [show, setShow] = useState(true);

  if (show) {
    return(props.alert &&
        <>
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{props.alert.message}</Alert.Heading>

      </Alert>
      

        </>
        
    )}
}
export default Showalert