import { useState } from 'react';
import './App.css';
import Alert from './components/Alert.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';


function App() { 
  const [mode, setMode]= useState('light'); //whether dark mode is enabled or not.
  const[alert, setAlert]=useState('null');
  const showAlert = (message, type)=>{
      setAlert({
        msg : message,
        type : type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1600);
}
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled!", "success");
    document.title = 'TextUtils - Dark Mode';

    // in order to make title blink

    // setInterval(() => {
    //   document.title = 'TextUtils is so amazing';
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'TextUtils has been set to mode';
    // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* {<About />}  */}
      </div>
    </>
  );
}

export default App;

