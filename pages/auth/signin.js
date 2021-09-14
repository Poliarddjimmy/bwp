import { useEffect } from "react"
import { useForm, Controller } from "react-hook-form";
import { Alert } from 'react-bootstrap';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux";
import { clearMessageAction, loginAction } from "../../redux/actions/userActionCreators";

export default function Signin() {
  const router = useRouter()
  const { loading, currentUser, error } = useSelector(state => state.user)
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({})

  const dispatch = useDispatch()

  const onSubmit = formData => {
    const payload = {
      phone: formData.phone,
      password: formData.password
    }
    dispatch(loginAction(payload))
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
      <h1 className="create-acc text-center">Sign In</h1>
      <div className="signup-inner text-center">
        <h3 className="title">Welcome to One Bet Hub</h3>
        <form className="signup-inner--form" onSubmit={handleSubmit(onSubmit)}>
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
                rules={{ required: true, minLength: 4, maxLength: 16 }}
              />
              {errors.password && (
                <Alert variant="danger">
                  {errors.password?.type === "required" && <p>Password is required</p>}
                  {errors.password?.type === "minLength" && <p>Min length of password is 4 characters!</p>}
                  {errors.password?.type === "maxLength" && <p>Max length of password is 16 characters!</p>}
                </Alert>
              )}

            </div>

          </div>

          <div className="col-12">
            <button
              className="submit-btn"
              onClick={handleSubmit(onSubmit)}
              disabled={loading}
            >
              {loading ? "...Please wait" : "Sign In"}
            </button>

          </div>
        </form>
      </div>
    </div>
  </main>
}