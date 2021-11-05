import Layout from "../../components/layouts/layout";
import Image from "next/image";


const Profiles = () => {

  return (
    <Layout>
      <div className="profile d-flex justify-content-start">
        <div className="card-one border-danger rounded min-vh-70">
          <div className="profile pic m-2 d-flex justify-content-center">
            <Image src="/images/profile_pic.jpg" alt="avatar" className="avatar-lg rounded-circle border-danger" width="100" height="100" />
          </div>
          <div className="name d-flex justify-content-center">
            <h6 className="name p-2">Marc Arold Rosemond</h6>
          </div>
          <div className="country d-flex justify-content-start m-2">
            <i class="fa fa-home btn-sm color-one"></i>
            <strong className="text-light">Haïti</strong>
          </div>
          <div className="location d-flex justify-content-start m-2">
            <i className="fa fa-map-marker-alt btn-sm color-one"></i>
            <small className="text-light">St 12, h no 42 new town</small>
          </div>
          <div className="passion d-flex justify-content-start m-2">
            <i className="fa fa-heart btn-sm color-one"></i>
            <small className="text-light">Travel, Swimming</small>
          </div>
          <div className=" follow-btn d-flex justify-content-center">
            <button type="button" class="btn btn-danger rounded-pill">follow</button>
          </div>
          <div className="d-flex justify-content-center m-2">
            <a type="button" class="btn-floating deep-purple border-danger btn-sm rounded-circle m-1"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
            <a type="button" class="btn-floating deep-purple border-danger btn-sm rounded-circle m-1"><i class="fab fa-twitter" aria-hidden="true"></i></a>
            <a type="button" class="btn-floating deep-purple border-danger btn-sm rounded-circle m-1"><i class="fab fa-instagram" aria-hidden="true"></i></a>
          </div>

        </div>

      </div>
    </Layout>
  )
}

export default Profiles