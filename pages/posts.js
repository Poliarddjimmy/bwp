import Link from "next/link"

//local import
import Layout from '../components/layouts/layout'

const Posts = () => {
  return (
    <Layout>
      <h1 className="title">Post page</h1>
      <p className="description">
        <Link href="/posts/this-is-the-first-post">first post</Link>
        <br />
        <Link href="/posts/this-is-the-second-post">second post</Link>
        <br />
        <Link href="/posts/this-is-the-third-post">third post</Link>
      </p>
    </Layout>
  )
}

export default Posts;