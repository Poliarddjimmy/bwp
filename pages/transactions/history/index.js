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

      <div className=" tablex d-flex flex-column border rounded border-danger min-vh-25 m-2">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
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
        <div className="d-flex justify-content-end text-light align-middle p-2">
          <p className="align-middle text-light fs-6">Row Per Page</p>
          <div class="dropdown">
            <button class="btn bg-transparent dropdown-toggle border-danger" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              5
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">25</a></li>
              <li><a class="dropdown-item" href="#">50</a></li>
              <li><a class="dropdown-item" href="#">100</a></li>
            </ul>
          </div>
          <p className="align-middle text-light fs-6">1-5 of 30</p>
          <div className="w-25">
            <button class="btn"><i class="fa fa-caret-left btn-sm border-danger"></i></button>
            <button class="btn"><i class="fa fa-caret-right btn-sm border-danger"></i></button>
          </div>

        </div>
      </div>

    </div>
  </Layout>)
}

export default TransactionHistory