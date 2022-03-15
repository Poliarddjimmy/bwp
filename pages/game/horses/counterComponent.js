import Link from "next/link"
import Image from "next/image"

const CounterComponent = ({ timer, current_game }) => {
  return (
    <div className="col-lg-12 col-md-6 col-sm-6 ">
      <div className="race p-2 rounded text-center" style={{ height: "100%" }}>
        <div className="p-4 mb-3 race-details d-flex flex-column justify-content-center align-items-center seconary-bg-color border-danger min-vh-50">
          <h3>Starting in</h3>
          <h1 className="d-flex mb-3">
            {timer}
          </h1>
          <h4>Total Players</h4>
          <h5>{current_game?.playerCount}</h5>
          <div className="d-flex align-items-center">
            <div className="mr-2">
              <Image src="/images/tikit-icon.png" width={40} height={40} alt="" className="rounded-circle" />
            </div>
            <small style={{ fontSize: "0.6em" }}><strong className="text-white">{current_game?.players && current_game?.players[0]?.name}</strong> and many orthers joined</small>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <Link href="/game/horses" passHref><button type="button" className="btn btn-danger d-block mb-3 w-40 mx-auto "> Join now</button></Link>
          <button type="button" className="btn btn-default border-danger text-white d-block disabled w-40 mx-auto"> View Race</button>
        </div>

      </div>
    </div>
  )
}

export default CounterComponent