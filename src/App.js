import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Route, Routes} from 'react-router-dom';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042543';
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Dark mode has been disabled', 'success');
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
        <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}></TextForm>}/>
            <Route path= '/about' element= {<About title="About Us"  mode={mode}></About>}/>
            <Route path= '/text-utils' element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}></TextForm>}/>
        </Routes>
    </>
  );
}
export default App;
