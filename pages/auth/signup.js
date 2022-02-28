import { useEffect } from "react"
import { useForm, Controller } from "react-hook-form";
import { registerAction, clearMessageAction } from '../../redux/actions/userActionCreators';
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from 'next/dist/client/router';
import Layout from "../../components/layouts/layout";
import Link from "next/link";

export default function Signup() {
  const router = useRouter()
  const { loading, currentUser, error } = useSelector(state => state.user)
  const {
    control,
    handleSubmit,
    watch,
    register,
    setError,
    formState: { errors, isValid },
  } = useForm({})

  const dispatch = useDispatch()

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

  return <Layout>
    <main>
      <div className="signup-form-wrapper">
        <h1 className="create-acc"></h1>
        <div className="signup-inner text-center">
          <h3 className="title mb-0">SIGN UP</h3>
          <p className="text-danger mt-0 mb-5">Bet your favorite and earn more</p>
          <form className="signup-inner--form text-left pt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="form-group col-12 mb-4">
                <label htmlFor="phone">Phone Number</label>
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

              <div className="col-12 mb-4">
                <label htmlFor="phone">First Name</label>
                <Controller
                  name="first_name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      autoComplete="off"
                      placeholder="enter your first name"
                      {...field}
                      className={`form-control ${errors.first_name && `is-invalid`
                        }`}
                    />
                  )}
                  rules={{ required: true, minLength: 3, maxLength: 15 }}
                />

                {errors.first_name?.type === "required" && <span className="text-danger">First name is required</span>}
                {errors.first_name?.type === "minLength" && <span className="text-danger">Min length of first name is 3 characters!</span>}
                {errors.first_name?.type === "maxLength" && <span className="text-danger">Max length of first name is 15 characters!</span>}

              </div>

              <div className="col-12 mb-4">
                <label htmlFor="phone">Last Name</label>
                <Controller
                  name="last_name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      autoComplete="off"
                      placeholder="enter your last name"
                      {...field}
                      className={`form-control ${errors.last_name && `is-invalid`
                        }`}
                    />
                  )}
                  rules={{ required: true, minLength: 3, maxLength: 15 }}
                />
                {errors.last_name?.type === "required" && <span className="text-danger">Last name is required</span>}
                {errors.last_name?.type === "minLength" && <span className="text-danger">Min length of last name is 3 characters!</span>}
                {errors.last_name?.type === "maxLength" && <span className="text-danger">Max length of last name is 15 characters!</span>}

              </div>

              <div className="col-12 mb-4">
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

              <div className="col-12">
                <label htmlFor="password">Confirm Password</label>
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
                      className={`form-control ${errors.confirm_password && `is-invalid`
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
                  <span className="text-danger">
                    {errors.confirm_password.message}
                  </span>
                )}
              </div>
            </div>

            <button
              className="btn btn-danger d-block w-100 mt-5"
              style={{ borderRadius: 30 }}
              onClick={handleSubmit(onSubmit)}
              disabled={loading}
            >
              {loading ? "...Please wait" : "Sign Up"}
            </button>

            <div className="mt-5">
              Have an account? Please, <Link href="/auth/signin" className="text-danger">Signin</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  </Layout>
}