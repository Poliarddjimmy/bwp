import Link from "next/link"

export default function Bethistory() {
  return (

<div className="content">
    
    <div className="container">

      <div className="table-responsive">

        <table className="table custom-table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Event number</th>
              <th scope="col">Game</th>
              <th scope="col">Balance type</th>
              <th scope="col">Rate</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2021/10/02</td>
              <td>10:35:45</td>
              <td>31110881</td>
              <td>Cheval</td>
              <td>Real balance</td>
              <td>200</td>

            </tr>       
          </tbody>
        </table>
      </div>


    </div>

  </div>
  
    )
}