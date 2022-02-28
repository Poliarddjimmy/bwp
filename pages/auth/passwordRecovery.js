import { useEffect } from "react"
import { useForm, Controller } from "react-hook-form";
import { registerAction, clearMessageAction } from '../../redux/actions/userActionCreators';
import { Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from 'next/dist/client/router';
import Layout from "../../components/layouts/layout";
import Link from "next/link";

export default function PasswprdRecovery() {
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
          <h3 className="title mb-0">Password Recovery</h3>
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

            </div>

            <button
              className="btn btn-danger d-block w-100 mt-5"
              style={{ borderRadius: 30 }}
              onClick={handleSubmit(onSubmit)}
              disabled={loading}
            >
              {loading ? "...Please wait" : "Send password SMS"}
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