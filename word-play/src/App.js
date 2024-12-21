

import React,{useState} from 'react';
import Navbar from './components/nav';
import TextArea from './components/TextArea';
import Alert from './components/Alert';



function App() {
  const[alert,setalert]=useState(null)
const showalert=(message,type)=>{
    setalert({msg:message,
      type:type
    })
   setTimeout(()=>{
    setalert(null)
   },1200)

    
  }
  const removeclasslist=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }


  const[mode,setmode]=useState('light')
  const togglemode=(cls)=>{
    removeclasslist()
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setmode('dark')

      document.body.style.backgroundColor='#002E57'
      showalert("Darkmode has been enabled","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("Lightmode has been enabled","success")
    }
  }
  return (
    <>
    
      <Navbar mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className='container my-5'>
      <TextArea showalert={showalert} heading="Enter the Text to Analize" mode={mode}/>
      </div>
    </>
  );
}

export default App;
