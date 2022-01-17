import Link from "next/link"
import Image from 'next/image'
import withAuth from "../../../components/hocs/withAuth"
import Layout from "../../../components/layouts/layout"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { fecthHorsesAction } from "../../../redux/actions/horsesActionCreators"

const Horses = ({ currentUser }) => {

  const dispatch = useDispatch()
  const { horses } = useSelector(state => state.horses)

  useEffect(() => {
    dispatch(fecthHorsesAction())
  }, [])

  return (
    <Layout currentUser={currentUser}>
      <div>
        <header>
          <div className="mainmenu-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="index.html" />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <section className="bonus-areas">
        <div className="container">

          <div className="row">
            {horses?.map(horse => (
              <div className="flip-card col-lg-4 col-md-4 col-sm-4 col-12" key={horse.id}>
                <Link href={`/game/horses/${horse.id}`} passHref >
                  <div className="flip-card-inner single-bonus border-danger p-2 cursor-pointer">
                    <div className="flip-card-front d-flex flex-column justify-content-center text-left p-2">
                      <Image className="img-flip" src={`/images/horses/horse_${horse.number}_b.png`} alt="" width="150" height="160" />
                      <strong>{horse.name}</strong>
                      <div className="text color-one">
                        <small>{horse.description}</small>
                      </div>
                    </div>
                    <div className="flip-card-back text-left p-1">
                      <div className="d-flex align-items-center justify-content-center w-100">
                        <Image src={`/images/horses/horse_${horse.number}_b.png`} alt="" width="150" height="100" />
                      </div>
                      <strong>{horse.name}</strong>
                      <div className="text color-one">
                        <small>{horse.description}</small>
                      </div>
                      <hr className="border-danger-hr m-1" />
                      <strong>Details</strong>
                      <div className="pl-4">
                        <ul>
                          <li><small>Wining Sreck: 10</small></li>
                          <li><small>Color: Lid Brown</small></li>
                          <li><small>Eye Color: Light Brown</small></li>
                          <li><small>Star:Ethicatcum</small></li>
                        </ul>
                      </div>
                      <hr className="border-danger-hr m-1" />
                      <div className="rating d-flex mb-1">
                        <strong>Ratings:</strong>
                        {[...Array(4)].map((star, i) => {
                          const ratingValue = i + 1;
                          return (
                            <label key={i}>
                              <span className="icon text-warning pl-1">★</span>
                            </label>
                          )
                        })}
                        <label>
                          <span className="icon pl-1">★</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>



    </Layout >
  )
}

export default withAuth(Horses);