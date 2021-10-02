import Link from "next/link"

export default function Editprofileuser() {
  return (
    <div className="signup-form-wrapper">
    <h1 className="create-acc text-center"></h1>
    <div className="signup-inner text-center">
      <h3 className="title">Please create your account</h3>
      <div className="signup-inner--form">
        <div className="row">

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
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckChecked"> If you have an account please <a href="signin">login</a>
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
    )
}