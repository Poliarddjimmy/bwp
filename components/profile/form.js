import { useMemo } from "react"
import Link from "next/link"
import { CountryDropdown, RegionDropdown } from "react-country-region-selector"
import { useForm, Controller } from "react-hook-form"

export default function Profileform({ data }) {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: useMemo(() => {
      return data
    }, [data]),
  })

  return (

    <div className="signup-inner text-center">
      <form className="signup-inner--form">
        <div className="row">
          <div className="col-12">
            <input type="email" className="single-field" placeholder="Email" />
          </div>
          <div className="col-md-6">
            <input type="text" className="single-field" placeholder="First Name" />
          </div>
          <div className="col-md-6">
            <input type="text" className="single-field" placeholder="Last Name" />
          </div>

          <div className="col-md-6">
            <select className="nice-select" name="sortby">
              <option value="trending">Gender</option>
              <option value="sales">Male</option>
              <option value="sales">Female</option>
            </select>
          </div>
          <div className="col-md-6">
            <select className="nice-select" name="sortby">
              <option value="trending">Age</option>
              <option value="sales">18+</option>
              <option value="sales">18-</option>
            </select>
          </div>

          <div className="col-12">
            <Controller
              name="profile.country"
              control={control}
              render={({ field }) => (
                <CountryDropdown
                  {...field}
                  classes={`nice-select`}
                />
              )}
              rules={{ required: false }}
            />
          </div>
          <div className="col-12">
            <Controller
              name="profile.state"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <RegionDropdown
                  classes={`nice-select`}
                  country={watch("profile.country")}
                  value={value}
                  onBlur={onBlur}
                  onChange={(value) => onChange(value)}
                />
              )}
              rules={{ required: false }}
            />
          </div>


          <div className="col-12">
            <button className="submit-btn">Click to update</button>
          </div>
        </div>
      </form>
    </div>


  )
}