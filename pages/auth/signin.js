import Image from 'next/image'
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form";
// also Alert component from bootstrap
import { Alert } from 'react-bootstrap';
import { useRouter } from 'next/router'

export default function Signin() {

  const [checked, setChecked] = useState(false);
  const router = useRouter()
  // useForm()
  // 1. register -> register input
  // 2. handleSubmit -> extract data from the form
  // 3. errors -> object containing errors
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: {
      phoneNumber: '',
      password: "",
    }
  })

  useEffect(() => {
    hideSpinner()
  });
  // function to output form data
  // we need to pass it to onSubmit of form element
  const onSubmit = formData => {
    showSpinner()
    signinProcess(formData.phoneNumber, formData.password)
  }

  async function signinProcess(phone, password) {
    const userInfo = {
      phone: phone,
      password: password
    }

    const signin = await fetch(`http://server.betswinpro.com/api/v1/login`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    // console.log(userInfo)
    console.log(signin.status)
    const signinResponse = await signin.json()
    // console.log(signupResponse)
    if (signin.status == 200) {
      hideSpinner()
      router.push('/profile')
    } else {
      alert('Incorrect credentials, please digit your credentials again !')
    }
  }

  // Function to hide the Spinner
  function hideSpinner() {
    document.getElementById('spinner')
      .style.display = 'none';
  }

  // Function to show the Spinner
  function showSpinner() {
    document.getElementById('spinner')
      .style.display = 'inline-block';
  }


  return <main>
    <div className="signup-form-wrapper">
      <h1 className="create-acc text-center">Sign In</h1>
      <div className="signup-inner text-center">
        <h3 className="title">Welcome to One Bet Hub</h3>
        <form className="signup-inner--form" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-12">
              <input type="number" className="single-field" placeholder="Phone Number" {...register('phoneNumber', { required: true, minLength: 8, maxLength: 12, pattern: /^[0-9\s]*$/ })} />
              {errors.phoneNumber &&
                <Alert variant="danger">
                  {errors.phoneNumber?.type === "required" && <p>Phone number is required</p>}
                  {errors.phoneNumber?.type === "minLength" && <p>Min length of phone number is 8 characters!</p>}
                  {errors.phoneNumber?.type === "maxLength" && <p>Max length of phone number is 12 characters!</p>}
                  {errors.phoneNumber?.type === "pattern" && <p>Only number please!</p>}
                </Alert>
              }
            </div>
            <div className="col-12">
              <input type="password" className="single-field" placeholder="Password" id="passwordInputId" {...register('password', { required: true, minLength: 4, maxLength: 10 })} />
              {errors.password &&
                <Alert variant="danger">
                  {errors.password?.type === "required" && <p>Password is required</p>}
                  {errors.password?.type === "minLength" && <p>Min length of password is 4 characters!</p>}
                  {errors.password?.type === "maxLength" && <p>Max length of password is 10 characters!</p>}
                </Alert>
              }
            </div>

          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" {...register('checkBox', { required: true })} />
            <label className="form-check-label" htmlFor="flexCheckChecked"> remember me
            </label>
          </div>
          <div className="col-12">
            <button className="submit-btn" type="submit" >
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" id="spinner"></span>
              Signin
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
}