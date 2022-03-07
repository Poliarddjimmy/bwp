import Link from "next/link"
import Image from 'next/image'
import withAuth from "../../../components/hocs/withAuth"
import Layout from "../../../components/layouts/layout"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { showHorseAction } from "../../../redux/actions/horsesActionsCreators"
import { fecthCurrentGameAction, createGameUserAction } from "../../../redux/actions/GamesActionsCreators"

const Horse = ({ currentUser }) => {

  const dispatch = useDispatch()
  const { horse } = useSelector(state => state.horses)
  const router = useRouter()
  const { game } = useSelector(state => state.games)


  useEffect(() => {
    dispatch(showHorseAction(router.query?.id))
    dispatch(fecthCurrentGameAction())
  }, [])

  const createGame = () => {
    const payload = {
      game_id: game?.id,
      horse_number: router.query?.id
    }
    dispatch(createGameUserAction(payload))
  }

  return (
    <Layout currentUser={currentUser}>
      <div className="horse-details row p-2 m-2">

        <div className="col-lg-6 col-md-8 race-details">
          <div className="border-danger race-details bg-primary-color pt-5 pb-5">
            <Image className="img" src={`/images/horses/horse_${router.query?.id}_b.png`} alt="" width="360" height="360" />
          </div>
        </div>

        <div className="col-lg-6 col-md-8 race-details">
          <h3 className="text-one">{horse?.name}</h3>

          <div className="row">
            <div className="col-lg-6 col-md-12 d-flex justify-content-center">
              <div className="border-danger rounded w-100 text-center">
                <small className="color-one fw-bold">{`10 times winner`}</small>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex">
              <div className="justify-content-center border-light rounded w-100 text-center">
                <small className="text-light fw-bold">20.000.00 HTG</small>
              </div>
            </div>
          </div>
          <small className="text-light">{horse?.description}</small>

          <div className="table">
            <table className="table">

              <tbody>

              </tbody>
            </table>
          </div>

          <div className="card border-1 border-danger race-details bg-secondary d-flex align-items-center justify-content-center pt-3 pb-3">
            <div className="text d-flex justify-content-center mb-3">
              <strong className="text-light">50.00 HTG</strong>
            </div>
            <div className="col-8 d-flex justify-content-around p-1">
              <button type="button" className="btn btn-primary-color rounded-pill text-light pl-3 pr-3" onClick={createGame}>Play now</button>
              <Link href="/game/horses" passHref><button type="button" className="btn btn-transparent rounded-pill text-light border-danger pl-3 pr-3">Cancel</button></Link>
            </div>
          </div>

        </div>

      </div>


    </Layout>
  )
}

export default withAuth(Horse);