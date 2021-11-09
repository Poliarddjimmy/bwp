import Link from "next/link"
import Image from 'next/image'
import Layout from '../components/layouts/layout'
import withAuth from "../components/hocs/withAuth"


const Home = ({ currentUser }) => {
  return (
    <Layout>
      <div>
        jsdjfk
      </div>
    </Layout>
  )
}

export default withAuth(Home);