import Layout from "../../components/layouts/layout";
import withAuth from "../../components/hocs/withAuth";
import Image from "next/image"

const PaymentHistory = ({ currentUser }) => {
  return <Layout currentUser={currentUser}>
    <main className="personal-area">
      <div className="history ">

        <div className="header-top bg-secondary rounded p-2">
          <div className="row">
            <div className="text-center col-lg-12 col-md-10 col-sm-8">
              <h3>Payment history</h3>

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

export default withAuth(PaymentHistory);