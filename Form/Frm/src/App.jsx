
import { useState } from 'react';
import './App.css'
import Form from './Form';

function App() {
  let [frmdata, setFrmdata] = useState()
  let [emaildata, setemaildata] = useState()
  let [passworddata, setpassworddata] = useState()
  let [contactdata, setcontactdata] = useState()
  function inputvalue(e) {
    console.log(e.target.value);
    setFrmdata(e.target.value)   //setfrmdata ki madad se frmdata mai change
  }
  function emailinput(e) {
    setemaildata(e.target.value)
  }
  function passwordinput(e) {
    setpassworddata(e.target.value)
  }
  function contactinput(e) {
    setcontactdata(e.target.value)
  }
  return (
    <>
      <h1> Hello {frmdata}</h1>
      <h1> Email {emaildata}</h1>
      <h1> Contact {contactdata}</h1>
      <h1> password {passworddata}</h1>
      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" onChange={inputvalue} /> <br />
        <label htmlFor="">Email</label>
        <input type="text" onChange={emailinput} /> <br />
        <label htmlFor="">Contact</label>
        <input type="text" onChange={contactinput} /> <br />
        <label htmlFor=""> Password </label>
        <input type="text" onChange={passwordinput} /> <br />

      </form>
      <Form />
    </>
  )
}

export default App
