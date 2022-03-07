import Link from "next/link"
import Image from 'next/image'
import Layout from '../components/layouts/layout'
import withAuth from "../components/hocs/withAuth"
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fecthCurrentGameAction } from "../redux/actions/GamesActionsCreators"


const Home = ({ currentUser }) => {

  const Ref = useRef(null);
  const [timer, setTimer] = useState('00:00:00');
  const [gameTime, setGameTime] = useState(0);
  const { games, game } = useSelector(state => state.games)
  const dispatch = useDispatch()

  let current_game = game

  useEffect(() => {
    dispatch(fecthCurrentGameAction())
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

            <div className="col-lg-12 col-md-8 col-sm-4 ">
              <div className="race p-2 rounded text-center" style={{ height: "100%" }}>
                <div className="p-4 mb-3 race-details d-flex flex-column justify-content-center align-items-center seconary-bg-color border-danger">
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

          </div>
        </div>
      </div>
      <div className="best-players container mt-4">

        <div className="row">
          <div className="col-lg-12 d-flex flex-column">
            <small className="text-light">Best</small>
            <h4 className="text-light">Players</h4>
          </div>
        </div>

        <div className="row mt-3">

          <div className="col-lg-3">

            <div className="card-layout min-vh-25 border-danger bg-secondary p-2">
              <div className="d-flex justify-content-sm-between">
              </div>
              <div className="">
                <div className="profile pic m-2 d-flex justify-content-center">
                  <Image src="/images/profile_pic.jpg" alt="avatar" className="avatar-lg rounded-circle border-danger" width="50" height="50" />
                </div>
                <div>
                  <div className="d-flex justify-content-center m-2">
                    <strong className="ml-1">3998-XXXX</strong>
                  </div>
                  <div className="d-flex justify-content-center m-2">
                    <small className="text-light">2330 HTG</small>
                    <small className="color-one ml-1">Win</small>
                  </div>

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