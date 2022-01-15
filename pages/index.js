import Link from "next/link"
import Image from 'next/image'
import Layout from '../components/layouts/layout'
import withAuth from "../components/hocs/withAuth"
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fecthGamesAction } from "../redux/actions/GamesActionsCreators"


const Home = ({ currentUser }) => {

  const Ref = useRef(null);
  const [timer, setTimer] = useState('00:00:00');
  const [gameTime, setGameTime] = useState(0);
  const { games } = useSelector(state => state.games)
  const dispatch = useDispatch()

  let current_game = games == undefined ? [] : games[games?.length - 1]

  useEffect(() => {
    dispatch(fecthGamesAction())
  }, []);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 * 60 * 60) % 24);
    return {
      total, hours, minutes, seconds
    };
  }

  const startTimer = (e) => {
    let { total, hours, minutes, seconds }
      = getTimeRemaining(e);
    if (total >= 0) {

      // update the timer
      // check if less than 10 then we need to 
      // add '0' at the begining of the variable
      setTimer(
        (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ':'
        + (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next    
    // setTimer('00:10:00');

    // If you try to remove this line the 
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000)
    Ref.current = id;
  }

  function getTotalSecondFromTime(hms) {
    var a = hms?.split(':'); // split it at the colons

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    return seconds
  }


  const getDeadTime = (totalSeconds) => {
    let deadline = new Date();

    // This is where you need to adjust if 
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + totalSeconds);
    return deadline;
  }

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    let total = getTimeRemaining(current_game?.time)
    let time = total?.hours + ":" + total?.minutes + ":" + total?.seconds
    let totalSecondsRemaining = getTotalSecondFromTime(time)
    clearTimer(getDeadTime(totalSecondsRemaining));
  }, [current_game]);

  return <Layout currentUser={currentUser}>

    <main className="content">
      <div className="container p-0">
        <h3 className="d-flex flex-column">
          The New Etablished Betting Platform
          <small className="text-danger" style={{ fontSize: "0.5em" }}>Bet, Play, Earn or View. A Unique Platform of Your Race</small>
        </h3>
        <div className="card mt-5 bg-transparent border-0" >
          <div className="row g-0" style={{ height: "" }}>

            <div className="col-lg-6 col-md-4 col-sm-2">
              <div className="race p-2 rounded text-center" style={{ height: "100%" }}>
                {/* <h4>Game-12</h4> */}
                <div className="p-4 mb-3 race-details d-flex flex-column justify-content-center align-items-center seconary-bg-color border-danger">
                  <strong>Starting in</strong>
                  <span className="d-flex mb-3">
                    {timer}
                  </span>
                  <h6>Total Players</h6>
                  <h5>{current_game?.playerCount}</h5>
                  <div className="d-flex align-items-center">
                    <div className="mr-2">
                      <Image src="/images/tikit-icon.png" width={40} height={40} alt="" className="rounded-circle" />
                    </div>
                    <small style={{ fontSize: "0.6em" }}><strong className="text-white">{current_game?.players && current_game?.players[0]?.name}</strong> and many orthers joined</small>
                  </div>
                </div>

                <Link href="/game/choose-horse" passHref><button type="button" className="btn btn-danger d-block w-100 mb-3"> Join now</button></Link>
                <button type="button" className="btn btn-default border-danger text-white d-block w-100"> View Race</button>

              </div>
            </div>

            <div className="col-12 col-lg-7 col-xl-7">
              <div className="message p-2 d-flex flex-column rounded min-vh-80" style={{ height: "100%" }}>
                <div className="other">
                  kjsdfiujsdhfk
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  </Layout>
}

export default withAuth(Home);