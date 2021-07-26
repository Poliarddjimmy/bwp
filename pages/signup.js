import Image from 'next/image'
import { useState, useEffect } from "react"

export default function Login() {

  const [checked, setChecked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function onChangeCheckBoxStatus() {
    setChecked(!checked)
  }

  function getPhoneValue() {
    const _phoneNumber = document.getElementById("phoneInputId").value
    setPhoneNumber(_phoneNumber)
  }

  function getFirstNameValue() {
    const _firstName = document.getElementById("firstNameInputId").value
    setFirstName(_firstName)
  }

  function getLastNameValue() {
    const _lastName = document.getElementById("lastNameInputId").value
    setLastName(_lastName)
  }

  function getPasswordValue() {
    const _password = document.getElementById("passwordInputId").value
    setPassword(_password)
  }

  function getConfirmPasswordValue() {
    const _confirmPassword = document.getElementById("confirmPasswordInputId").value
    setConfirmPassword(_confirmPassword)
  }

  function passwordValidation() {
    return true
  }

  return <main>
    <div className="signup-form-wrapper">
      <h1 className="create-acc text-center">Create An Account</h1>
      <div className="signup-inner text-center">
        <h3 className="title">Welcome to One Bet Hub</h3>
        <form className="signup-inner--form">
          <div className="row">
            <div className="col-12">
              <input type="number" className="single-field" placeholder="Phone Number" id="phoneInputId" onChange={getPhoneValue} />
            </div>
            <div className="col-md-6">
              <input type="text" className="single-field" placeholder="First Name" id="firstNameInputId" onChange={getFirstNameValue} />
            </div>
            <div className="col-md-6">
              <input type="text" className="single-field" placeholder="Last Name" id="lastNameInputId" onChange={getLastNameValue} />
            </div>
            <div className="col-12">
              <input type="password" className="single-field" placeholder="Password" id="passwordInputId" onChange={getPasswordValue} />
            </div>
            <div className="col-12">
              <input type="password" className="single-field" placeholder="Password Confirmation" id="confirmPasswordInputId" onChange={getConfirmPasswordValue} />
            </div>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={checked} onChange={onChangeCheckBoxStatus} />
            <label className="form-check-label" htmlFor="flexCheckChecked"> I have read & accepted the <a href="#">terms of use</a>
            </label>
          </div>
          <div className="col-12">
            <button className="submit-btn">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  </main>
}