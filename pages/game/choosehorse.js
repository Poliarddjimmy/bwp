import Link from "next/link"
import Image from 'next/image'
import withAuth from "../../components/hocs/withAuth"
import Layout from "../../components/layouts/layout"

// const horseImage = require('/public/images/horses/horse_1_b');
const Choosehorse = ({ currentUser }) => {
  return (
    <Layout>
      <div>
	  <header>
		<div className="mainmenu-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">                 
						<nav className="navbar navbar-expand-lg navbar-light">
							<a className="navbar-brand" href="index.html"/>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>
      </div>
 
      <section className="bonus-area">
		<div className="container">
		
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="single-bonus">
						<div className="content">
						<Image src="/images/horses/horse_1_b.png" alt="" width="584" height="443" />
					
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-bonus">
						<div className="content">
						<Image src="/images/horses/horse_2_b.png" alt="" width="216" height="231" />
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-bonus">
						<div className="content">
						<Image src="/images/horses/horse_3_b.png" alt="" width="216" height="231" />
			
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-bonus">
						<div className="content">
						<Image src="/images/horses/horse_4_b.png" alt="" width="216" height="231" />
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-bonus">
						<div className="content">
						<Image src="/images/horses/horse_5_b.png" alt="" width="216" height="231" />

						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-bonus">
						<div className="content">
						<Image src="/images/horses/horse_6_b.png" alt="" width="216" height="231" />
				
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </Layout>
  )
}

export default withAuth(Choosehorse);