import './App.css'
import { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
function App() {
  const [info,setInfo] = useState({
    display: "base",
    repayment: "",
    total: "",
    interest: ""
  })

  const addRepayment = (repayment,total) => {
    setInfo({
      display:"repayment",
      repayment:repayment,
      total:total,
      interest:""
    })
  }

  const addInterest = (interest, total) => {
    setInfo({
      display: "interest",
      repayment: "",
      total: total,
      interest: interest,
    });
  };

  const clearInfo = () => {
    setInfo({
      display: "base",
      repayment: "",
      total: "",
      interest: ""
    })
  }
  return (
    <div className='grid w-full md:grid-cols-2'>
      <Form addInterest={addInterest} addRepayment={addRepayment} clearInfo={clearInfo}/>
      <Display display={info.display} repayment={info.repayment} total={info.total} interest={info.interest}/>
    </div>
  );
}

export default App
