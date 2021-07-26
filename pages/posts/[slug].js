import { useRouter } from "next/dist/client/router";
import { route } from "next/dist/next-server/server/router";

//local import
import Layout from "../../components/layouts/layout"

const SinglePost = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.slug}</h1>
    </Layout>
  )
}

export default SinglePost