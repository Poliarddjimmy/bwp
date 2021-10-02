import Link from "next/link"

export default function Historypayment() {
  return (

<div className="content">
    
    <div className="container">

      <div className="table-responsive">

        <table className="table custom-table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Method</th>
              <th scope="col">Amount</th>
              <th scope="col">Operation</th>
              <th scope="col">Status</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2021/10/02</td>
              <td>Mon cash</td>
              <td>500</td>
              <td>Deposit</td>
              <td>Completed</td>
            </tr>       
          </tbody>
        </table>
      </div>


    </div>

  </div>
  
    )
}