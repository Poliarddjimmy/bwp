import Layout from "../../components/layouts/layout";
import withAuth from "../../components/hocs/withAuth";
import Image from "next/image"

const BetHistory = ({ currentUser }) => {
  return <Layout currentUser={currentUser}>
    <main className="personal-area ">
      <div className="history ">

        <div className="header-top bg-secondary text-center rounded p-2">
          <div className="row">
            <h3 className="col-lg-12 col-md-10 col-sm-8">Bet and Transaction history</h3>
            <strong className="color-one col-lg-12 col-md-10 col-sm-8 ">
              Check your progress
            </strong>
          </div>
        </div>


        <div className="tabs-container">
          <div className="row">
            <div className="w-40 d-flex justify-content-center m-2 col-lg-12 col-md-12 col-sm-12 col-12">
              <ul className="nav nav-pills border-danger rounded-pill d-flex justify-content-center">
                <li className="nav-item">
                  <a className="nav-link rounded-pill" href="#">Transaction History</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active bg-danger rounded-pill" aria-current="page" href="#">Bet History</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="message p-2 d-flex flex-column border rounded border-danger  m-2 bg-secondary ">
          <div className="row">
            <div className=" profile d-flex justify-content-center p-3 col-lg-12 col-md-10 col-sm-6">
              <div className="profile pic m-2">
                <Image src="/images/contact-left.png" alt="avatar" className="avatar-lg rounded-circle border-danger" width="40" height="40" />
              </div>

              <div className="w-25 m-2">
                <small className="d-flex color-one fw-bold">
                  @wiky23
                </small>
                <strong className="text-light">
                  Billy Joseph
                </strong>
                <small className="d-flex text-light fw-bold">
                  billy@bet.com
                </small>
              </div>

              <div className="w-25 m-2 p-4">
                <small className="d-flex text-light fw-bold">
                  Total Bets
                </small>

                <strong className="text-danger">
                  1434 $
                </strong>
              </div>

            </div>
          </div>
        </div>

        <div className="table-bet m-2">
          <div className="row">
            <div className="tablex d-flex flex-column border rounded border-danger  col-lg-12 col-md-12 col-sm-12 col-12">
              <table className="table ">
                <thead className="text-white bg-secondary">
                  <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr>
                    <td className="">Game-01</td>
                    <td>07 nov 2021 3:30 pm</td>
                    <td>230$</td>
                  </tr>

                  <tr>
                    <td>Game-01</td>
                    <td>07 nov 2021 3:30 pm</td>
                    <td>230$</td>
                  </tr>

                  <tr>
                    <td>Game-01</td>
                    <td>07 nov 2021 3:30 pm</td>
                    <td>230$</td>
                  </tr>
                  <tr>
                    <td>Game-01</td>
                    <td>07 nov 2021 3:30 pm</td>
                    <td>230$</td>
                  </tr>

                  <tr>
                    <td>Game-01</td>
                    <td>07 nov 2021 3:30 pm</td>
                    <td>230$</td>
                  </tr>

                  <tr>
                    <td>Game-01</td>
                    <td>07 nov 2021 3:30 pm</td>
                    <td>230$</td>
                  </tr>
                </tbody>
              </table>

              <div className="d-flex justify-content-end text-light align-middle p-2 col-lg-12 col-md-12 col-sm-12 col-12">
                <p className="align-middle text-light fs-6">Row Per Page</p>
                <div className="dropdown">
                  <button className="btn bg-transparent dropdown-toggle border-danger" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    5
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">25</a></li>
                    <li><a className="dropdown-item" href="#">50</a></li>
                    <li><a className="dropdown-item" href="#">100</a></li>
                  </ul>
                </div>
                <p className="align-middle text-light fs-6">1-5 of 30</p>
                <div className="w-15">
                  <button className="btn"><i className="fa fa-caret-left btn-sm border-danger"></i></button>
                  <button className="btn"><i className="fa fa-caret-right btn-sm border-danger"></i></button>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  </Layout>
}

export default withAuth(BetHistory);