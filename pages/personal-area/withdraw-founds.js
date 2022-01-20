import Layout from "../../components/layouts/layout";
import withAuth from "../../components/hocs/withAuth";

const WithdrawFounds = ({ currentUser }) => {
  return <Layout currentUser={currentUser}>
    <main className="personal-area">
      <div className="">

        <div className="">
          <div className="d-flex justify-content-between">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="cardOne border-1 border-danger rounded bg-secondary" >
                <div className=" pt-5">
                  <div className="d-flex justify-content-center text-light">
                    <small>Available Balance</small>
                  </div>
                  <div className="d-flex justify-content-center">
                    <strong className="color-one">1434 $</strong>
                  </div>
                </div>
                <div className="d-flex justify-content-center pl-2 text-light">
                  <small>Date: 23 November 2021</small>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="pl-2 text-light">
                    <small>Enter Deposit Amount :</small>
                  </div>
                  <div className="">
                    <strong className="text-light pl-1">12300000 $</strong>
                    <hr className=" border-danger" />
                  </div>
                </div>
                <div className="d-flex justify-content-center pb-2">
                  <a className="btn btn-primary-color rounded-pill" href="#" role="button">Deposit</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="cardOne border-1 border-danger rounded bg-secondary" >
                <div className=" pt-5">
                  <div className="d-flex justify-content-center text-light">
                    <small>Available Balance</small>
                  </div>
                  <div className="d-flex justify-content-center">
                    <strong className="color-one">1434 $</strong>
                  </div>
                </div>
                <div className="d-flex justify-content-center pl-2 text-light">
                  <small>Date: 23 November 2021</small>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="pl-2 text-light">
                    <small>Enter Deposit Amount :</small>
                  </div>
                  <div className="">
                    <strong className="text-light pl-1">12300000 $</strong>
                    <hr className=" border-danger" />
                  </div>
                </div>
                <div className="d-flex justify-content-center pb-2">
                  <a className="btn btn-primary-color rounded-pill" href="#" role="button">Withdraw</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="mt-3 border-danger rounded min-vh-30">
            <div className="p-2">
              <strong className="text-light">Earnings</strong>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"><small className="color-one">Games</small></th>
                  <th scope="col"><small className="color-one">Bets</small></th>
                  <th scope="col"><small className="color-one">Total</small></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>3050</td>
                  <td>3465</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </main>
  </Layout>
}

export default withAuth(WithdrawFounds);