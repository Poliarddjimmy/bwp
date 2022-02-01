import Layout from "../../components/layouts/layout";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { showProfileAction, editProfileAction } from "../../redux/actions/profileActionCreators";
import { useRouter } from "next/router"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useForm, Controller } from "react-hook-form";


const Profiles = () => {
  const dispatch = useDispatch()
  const { profile } = useSelector(state => state.profile)
  const { currentUser } = useSelector(state => state.user)
  const router = useRouter()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    control,
    handleSubmit,
    watch,
    register,
    setError,
    formState: { errors, isValid },
  } = useForm({})

  const onSubmit = formData => {
    const payload = {
      id: currentUser?.profile?.id,
      user_id: currentUser?.id,
      address: formData.address,
      country: formData.country,
      city: formData.city,
      gender: formData.sex,
      dob: formData.date,
    }
    dispatch(editProfileAction(payload))
  }

  useEffect(() => {
    dispatch(showProfileAction(router.query?.id))
  }, [])

  return (
    <Layout>

      <div className="profile d-flex justify-content-start">

        <div className="card-one col-md-4">

          <div className="d-flex justify-content-start">
            <h4>Profile</h4>
          </div>
          <div className="border-danger shadow pb-4 pt-4 rounded">
            <div className="profile pic m-2 d-flex justify-content-center">
              <Image src="/images/profile_pic.jpg" alt="avatar" className="avatar-lg rounded-circle border-danger" width="100" height="100" />
            </div>
            <div className="name d-flex justify-content-center">
              <h6 className="name p-2">{currentUser?.name}</h6>
            </div>
            <div className="country d-flex justify-content-start m-2">
              <i className="fa fa-home btn-sm color-one"></i>
              <strong className="text-light d-flex">{profile?.country}</strong>
            </div>
            <div className="location d-flex justify-content-start m-2">
              <i className="fa fa-map-marker-alt btn-sm color-one"></i>
              <small className="text-light">{profile?.address}</small>
            </div>
            <div className="passion d-flex justify-content-start m-2">
              <i className="fa fa-heart btn-sm color-one"></i>
              <small className="text-light">Play Games, Bet</small>
            </div>
            <div className=" edit-btn d-flex justify-content-center">
              <button type="button" className="btn btn-danger rounded-pill" onClick={handleShow} >Edit Profile</button>
            </div>
            <div className="social-media d-flex justify-content-center m-2">

              <i className="fab bi bi-facebook fa-sm d-flex justify-content-center align-items-center m-1 color-white" aria-hidden="true" />
              <i className="fab bi bi-twitter fa-sm d-flex justify-content-center align-items-center m-1 color-white" aria-hidden="true" />
              <i className="fab bi bi-instagram fa-sm d-flex justify-content-center align-items-center m-1 color-white" aria-hidden="true" />

            </div>
            <div>
              <hr className="bg-danger border-1 border-top border-danger m-4" />
              <small className="color-white d-flex justify-content-center">{`Member since ${new Date(profile?.created_at).toLocaleDateString()}`}</small>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="">
            <h4>Notifications</h4>
          </div>
          <div className="bg-secondary border-danger p-3 rounded">
            <div className="">
              <div className="">
                Recent Notifications
              </div>

            </div>

            <div className="mt-4">
              <div className="mt-4 d-flex border-bottom-danger pb-2">
                <div className="w-100">

                  <li className="color-one">
                    <small className="text-light">Bet, Play Earn or view. A Unique platform for your Races</small>
                  </li>

                  <div className="d-flex justify-content-lg-between">
                    <div className="">
                      <small className="color-one">Your Chance is here so grab it</small>
                    </div>
                    <div className=" d-flex justify-content-end">
                      <small className="color-one">1 min ago</small>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      <div className="best-players container mt-4">

        <div className="row">
          <div className="col-lg-12 d-flex flex-column">
            <small className="text-light">Best</small>
            <h4 className="text-light">Players</h4>
          </div>
        </div>

        <div className="row mt-3">

          <div className="col-lg-3">
            <div className="card-layout min-vh-25 border-danger bg-secondary p-2">
              <div className="d-flex justify-content-sm-between">
              </div>
              <div className="">
                <div className="profile pic m-2 d-flex justify-content-center">
                  <Image src="/images/profile_pic.jpg" alt="avatar" className="avatar-lg rounded-circle border-danger" width="50" height="50" />
                </div>
                <div>
                  <div className="d-flex justify-content-center m-2">
                    <strong className="ml-1">3998-0784</strong>
                  </div>
                  <div className="d-flex justify-content-center m-2">
                    <small className="text-light">2330 HTG</small>
                    <small className="color-one ml-1">Win</small>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal Screens */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        className=""
      >
        <Modal.Header closeButton>
          <Modal.Title className="color-one">Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form >
            <Form.Group className="mb-3 color-one" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Form.Control
                    type="name"
                    placeholder="Please digit your Name"
                    autoComplete="off"
                    {...field}
                    value={currentUser?.name}
                    className={` text-light form-control ${errors.name && `is-invalid`
                      }`}
                  />
                )}
                rules={{ required: true, minLength: 3, maxLength: 15 }}
              />
              {errors.name?.type === "required" && <span className="text-danger">Name is required</span>}
              {errors.name?.type === "minLength" && <span className="text-danger">Min length of first name is 3 characters!</span>}
              {errors.name?.type === "maxLength" && <span className="text-danger">Max length of first name is 15 characters!</span>}
            </Form.Group>

            <Form.Group className="mb-3 color-one" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Form.Control
                    type="email"
                    placeholder="Please digit your Email Adress"
                    autoComplete="off"
                    {...field}
                    value={currentUser?.email}
                    className={` text-light form-control ${errors.email && `is-invalid`
                      }`}
                  />
                )}
                rules={{ required: true, minLength: 7, maxLength: 25 }}
              />
              {errors.email?.type === "required" && <span className="text-danger">Email is required</span>}
              {errors.email?.type === "minLength" && <span className="text-danger">Min length of first name is 7 characters!</span>}
              {errors.email?.type === "maxLength" && <span className="text-danger">Max length of first name is 25 characters!</span>}
            </Form.Group>

            <Form.Group className="mb-3 color-one" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Form.Control
                    type="address"
                    placeholder="Please digit your Adress"
                    autoComplete="off"
                    {...field}
                    value={currentUser?.profile?.address}
                    className={` text-light form-control ${errors.address && `is-invalid`
                      }`}
                  />
                )}
                rules={{ required: true, minLength: 10, maxLength: 50 }}
              />
              {errors.address?.type === "required" && <span className="text-danger">address is required</span>}
              {errors.address?.type === "minLength" && <span className="text-danger">Min length of first name is 10 characters!</span>}
              {errors.address?.type === "maxLength" && <span className="text-danger">Max length of first name is 50 characters!</span>}
            </Form.Group>

            <Form.Group className="mb-3 color-one" controlId="formBasicAddress">
              <Form.Label>Sex</Form.Label>
              <Controller
                name="sex"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select
                    type="sex"
                    placeholder="Please digit your sex"
                    autoComplete="off"
                    {...field}
                    value={currentUser?.profile?.gender}
                    className={` text-light form-control ${errors.sex && `is-invalid`
                      }`}
                  >
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Others</option>
                  </select>
                )}
                rules={{ required: true, minLength: 3, maxLength: 15 }}
              />
              {errors.sex?.type === "required" && <span className="text-danger">sex is required</span>}
              {errors.sex?.type === "minLength" && <span className="text-danger">Min length of first name is 3 characters!</span>}
              {errors.sex?.type === "maxLength" && <span className="text-danger">Max length of first name is 10 characters!</span>}
            </Form.Group>



            <Form.Group className="color-one" controlId="formBasicAddress">
              <Form.Label>Country</Form.Label>
            </Form.Group>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Form.Group className="mb-1 color-one" controlId="formBasicVille">
                  <select
                    type="country"
                    placeholder="Please digit your country"
                    autoComplete="off"
                    {...field}
                    value={currentUser?.profile?.country}
                    className={` text-light form-control ${errors.address && `is-invalid`
                      }`}
                  >
                    <option value="2">Haiti</option>
                    <option value="3">Others</option>
                  </select>
                </Form.Group>
              )}
              rules={{ required: true, minLength: 3, maxLength: 15 }}
            />
            {errors.country?.type === "required" && <span className="text-danger">country is required</span>}
            {errors.country?.type === "minLength" && <span className="text-danger">Min length of first name is 3 characters!</span>}
            {errors.country?.type === "maxLength" && <span className="text-danger">Max length of first name is 15 characters!</span>}

            <Form.Group className="color-one" controlId="formBasicAddress">
              <Form.Label>City</Form.Label>
            </Form.Group>

            <Controller
              name="city"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Form.Group className="mb-1 color-one" controlId="formBasicVille">
                  <select
                    type="city"
                    placeholder="Please digit your city"
                    autoComplete="off"
                    {...field}
                    value={currentUser?.profile?.city}
                    className={` text-light form-control ${errors.city && `is-invalid`
                      }`}
                  >
                    <option value="2">Port-au-prince</option>
                    <option value="3">Others</option>
                  </select>
                </Form.Group>
              )}
              rules={{ required: true, minLength: 7, maxLength: 15 }}
            />
            {errors.city?.type === "required" && <span className="text-danger">city is required</span>}
            {errors.city?.type === "minLength" && <span className="text-danger">Min length of first name is 7 characters!</span>}
            {errors.city?.type === "maxLength" && <span className="text-danger">Max length of first name is 15 characters!</span>}

            <Form.Group className="color-one" controlId="formBasicAddress">
              <Form.Label>Date of birth</Form.Label>
              <Controller
                name="date"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Form.Control
                    type="date"
                    placeholder="Please choose your date of birth"
                    autoComplete="off"
                    {...field}
                    value={currentUser?.profile?.dob}
                    className={` text-light form-control ${errors.date && `is-invalid`
                      }`}
                  />
                )}
                rules={{ required: true, minLength: 7, maxLength: 15 }}
              />
              {errors.date?.type === "required" && <span className="text-danger">date is required</span>}
              {errors.date?.type === "minLength" && <span className="text-danger">Min length of first name is 7 characters!</span>}
              {errors.date?.type === "maxLength" && <span className="text-danger">Max length of first name is 15 characters!</span>}

            </Form.Group>

          </Form>

        </Modal.Body>
        <Modal.Footer>

          <Button
            className=" btn-danger"
            onClick={handleSubmit(onSubmit)}
          >Save</Button>
        </Modal.Footer>
      </Modal>

    </Layout >
  )
}

export default Profiles