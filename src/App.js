import './App.css';
import Navibar from './components/Navibar'
import Textform from './components/Textform'
// import About from './components/About'
import React,{useState} from 'react'
import Showalert from './components/Showalert'


function App(){
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  const showAlert=(message)=>{
    setAlert({message:message})
    setTimeout(
      ()=>{setAlert(null)},1500
    )

  }
   const togglemode=()=>{
    if(mode==='light') {
      setMode("dark")
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled!")
    }else {
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled!")
    }
  }

  return(
    <>
    <Navibar title="TextUtils" mode={mode} togglemode={togglemode}/>
    <Showalert alert={alert}/>
    <div className="container my-3" ><Textform title="Enter the text below to analyze" showAlert={showAlert} mode={mode}/></div>
    {/* <About/> */}
    </>
  )
}

export default App;
