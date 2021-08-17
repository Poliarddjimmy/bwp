import Image from 'next/image'
import { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form";
import { registerAction, clearMessageAction } from '../redux/actions/userActionCreators';
// also Alert component from bootstrap
import { Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from 'next/dist/client/router';

export default function Login() {
  const router = useRouter()
  const [checked, setChecked] = useState(false);
  const { loading, currentUser, error } = useSelector(state => state.user)
  // useForm()
  // 1. register -> register input
  // 2. handleSubmit -> extract data from the form
  // 3. errors -> object containing errors
  const {
    control,
    handleSubmit,
    watch,
    register,
    setError,
    formState: { errors, isValid },
  } = useForm({})

  const dispatch = useDispatch()

  // function to output form data
  // we need to pass it to onSubmit of form element
  const onSubmit = formData => {
    const payload = {
      phone: formData.phone,
      name: `${formData.first_name} ${formData.last_name}`,
      password: formData.password
    }

    dispatch(registerAction(payload))
  }

  useEffect(() => {
    currentUser && router.push("/")
  }, [currentUser, router])

  useEffect(() => {
    error &&
      setError("phone", {
        type: "manual",
        message: error,
      })
    dispatch(clearMessageAction())
  }, [error, setError, dispatch])

  return <main>
    <div className="signup-form-wrapper">
      <h1 className="create-acc text-center">Create An Account</h1>
      <div className="signup-inner text-center">
        <h3 className="title">Welcome to One Bet Hub</h3>
        <div className="signup-inner--form">
          <div className="row">
            <div className="col-12">

              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    autoComplete="off"
                    placeholder="enter your phone number"
                    {...field}
                    className={`single-field ${errors.phone && `is-invalid`
                      }`}
                  />
                )}
                rules={{ required: true, minLength: 8, maxLength: 12, pattern: /^[0-9\s]*$/ }}
              />
              {errors.phone && (
                <Alert variant="danger">
                  {errors.phone?.type === "required" && <p>Phone number is required</p>}
                  {errors.phone?.type === "minLength" && <p>Min length of phone number is 8 characters!</p>}
                  {errors.phone?.type === "maxLength" && <p>Max length of phone number is 12 characters!</p>}
                  {errors.phone?.type === "pattern" && <p>Only number please!</p>}
                  {errors.phone?.type === "manual" && <p>{errors.phone.message}</p>}
                </Alert>
              )}
            </div>

            <div className="col-md-12">

              <Controller
                name="first_name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    autoComplete="off"
                    placeholder="enter your first name"
                    {...field}
                    className={`single-field ${errors.first_name && `is-invalid`
                      }`}
                  />
                )}
                rules={{ required: true, minLength: 3, maxLength: 15 }}
              />
              {errors.first_name && (
                <Alert variant="danger">

                  {errors.first_name?.type === "required" && <p>First name is required</p>}
                  {errors.first_name?.type === "minLength" && <p>Min length of first name is 3 characters!</p>}
                  {errors.first_name?.type === "maxLength" && <p>Max length of first name is 15 characters!</p>}
                </Alert>
              )}
            </div>

            <div className="col-md-12">

              <Controller
                name="last_name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    autoComplete="off"
                    placeholder="enter your last name"
                    {...field}
                    className={`single-field ${errors.last_name && `is-invalid`
                      }`}
                  />
                )}
                rules={{ required: true, minLength: 3, maxLength: 15 }}
              />
              {errors.last_name && (
                <Alert variant="danger">
                  {errors.last_name?.type === "required" && <p>Last name is required</p>}
                  {errors.last_name?.type === "minLength" && <p>Min length of last name is 3 characters!</p>}
                  {errors.last_name?.type === "maxLength" && <p>Max length of last name is 15 characters!</p>}
                </Alert>
              )}
            </div>
            <div className="col-12">

              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="password"
                    autoComplete="off"
                    placeholder="enter your password"
                    {...field}
                    className={`single-field ${errors.password && `is-invalid`
                      }`}
                  />
                )}
                rules={{ required: true, minLength: 4, maxLength: 10 }}
              />
              {errors.password && (
                <Alert variant="danger">
                  {errors.password?.type === "required" && <p>Password is required</p>}
                  {errors.password?.type === "minLength" && <p>Min length of password is 4 characters!</p>}
                  {errors.password?.type === "maxLength" && <p>Max length of password is 10 characters!</p>}
                </Alert>
              )}
            </div>
            <div className="col-12">
              <Controller
                name="confirm_password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="password"
                    autoComplete="off"
                    placeholder="Confirm your password"
                    {...field}
                    className={`single-field ${errors.confirm_password && `is-invalid`
                      }`}
                  />
                )}
                rules={{
                  required: true,
                  validate: (value) =>
                    value === watch("password") ||
                    "Passwords don't match.",
                }}
              />
              {errors.confirm_password && (
                <Alert variant="danger">
                  {errors.confirm_password.message}
                </Alert>
              )}
            </div>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" {...register('checkBox', { required: true })} />
            <label className="form-check-label" htmlFor="flexCheckChecked"> I have read & accepted the <a href="#">terms of use</a>
              {errors.checkBox &&
                <Alert variant="danger">
                  {errors.checkBox?.type === "required" && <p>Terms of use is required</p>}
                </Alert>
              }
            </label>
          </div>
          <div className="col-12">
            <button
              className="submit-btn"
              onClick={handleSubmit(onSubmit)}
              disabled={loading}
            >
              {loading ? "...Please wait" : "Create Account"}
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
}