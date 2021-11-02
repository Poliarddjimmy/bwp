import Image from "next/image";
import Layout from "../../../components/layouts/layout";

const TransactionHistory = () => {

  return (<Layout>
    <div className="history ">
      <div className="w-40">
        <ul class="nav nav-pills border-danger rounded-pill d-flex justify-content-center">
          <li class="nav-item">
            <a class="nav-link rounded-pill" href="#">Transaction History</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active bg-danger rounded-pill" aria-current="page" href="#">Bet History</a>
          </li>
        </ul>
      </div>

      <div className="message p-2 d-flex flex-column border rounded border-danger min-vh-25 m-2 bg-secondary">

        <div className=" profile d-flex justify-content-center p-3">
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
  </Layout>)
}

export default TransactionHistory