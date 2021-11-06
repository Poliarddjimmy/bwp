import Layout from "../../components/layouts/layout";
import withAuth from "../../components/hocs/withAuth";

const DepositToAccount = ({ currentUser }) => {
  return <Layout currentUser={currentUser}>
    <main className="personal-area">

    </main>
  </Layout>
}

export default withAuth(DepositToAccount);