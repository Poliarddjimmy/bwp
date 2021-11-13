/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react"
import { useForm, Controller } from "react-hook-form";
import { Alert } from 'react-bootstrap';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux";
import { clearMessageAction, loginAction } from "../../redux/actions/userActionCreators";
import Layout from "../../components/layouts/layout";
import Link from "next/link";

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

  return <Layout>
    <main>
      <div className="signup-form-wrapper">
        <h1 className="create-acc"></h1>
        <div className="signup-inner text-center">
          <h3 className="title mb-0">SIGN IN</h3>
          <p className="text-danger mt-0 mb-5">Bet your favorite and earn more</p>
          <form className="signup-inner--form text-left pt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12 mb-4">
                <label htmlFor="password">Phone Number</label>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      autoComplete="off"
                      placeholder="enter your phone number"
                      {...field}
                      className={`form-control ${errors.phone && `is-invalid`
                        }`}
                    />
                  )}
                  rules={{ required: true, minLength: 8, maxLength: 12, pattern: /^[0-9\s]*$/ }}
                />

                {errors.phone?.type === "required" && <span className="text-danger">Phone number is required</span>}
                {errors.phone?.type === "minLength" && <span className="text-danger">Min length of phone number is 8 characters!</span>}
                {errors.phone?.type === "maxLength" && <span className="text-danger">Max length of phone number is 12 characters!</span>}
                {errors.phone?.type === "pattern" && <span className="text-danger">Only number please!</span>}
                {errors.phone?.type === "manual" && <span className="text-danger">{errors.phone.message}</span>}
              </div>

              <div className="col-12">
                <label htmlFor="password">Password</label>
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
                      className={`form-control ${errors.password && `is-invalid`
                        }`}
                    />
                  )}
                  rules={{ required: true, minLength: 4, maxLength: 16 }}
                />

                {errors.password?.type === "required" && <span className="text-danger">Password is required</span>}
                {errors.password?.type === "minLength" && <span className="text-danger">Min length of password is 4 characters!</span>}
                {errors.password?.type === "maxLength" && <span className="text-danger">Max length of password is 16 characters!</span>}
              </div>

            </div>
            <div className="text-right mt-2">
              <Link href="passwordRecovery" className="text-danger">Forget Password</Link>
            </div>


            <button
              className="btn btn-danger d-block w-100 mt-5"
              style={{ borderRadius: 30 }}
              onClick={handleSubmit(onSubmit)}
              disabled={loading}
            >
              {loading ? "...Please wait" : "Sign In"}
            </button>


            <div className="mt-5">
              Don't have an account? Please, <Link href="/auth/signup" className="text-danger">Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  </Layout>
}