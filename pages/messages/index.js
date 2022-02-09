import { useEffect, useState } from "react";
import Layout from "../../components/layouts/layout"
import MessageList from "../../components/message/messageList"
import withAuth from "../../components/hocs/withAuth";
import MessageBox from "../../components/message/messageBox";

const Messages = ({ currentUser }) => {
  const [messageActive, setMessageActive] = useState(null);
  const [search, setSearch] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        id: 1,
        title: "Message 1",
        content: "Djimmy Lorem ipsum dolor sit amet.",
        createdAt: "2020-01-01",
        user: {
          id: 1,
          name: "Djimmy Poliard",
          profile_pic: "/images/profile_pic.jpg",
          user_name: "@Djimmy22",
        }
      },
      {
        id: 2,
        title: "Message 2",
        content: "Andy Lorem ipsum dolor sit amet.",
        createdAt: "2020-01-03",
        user: {
          id: 2,
          name: "Andy Softmatech",
          profile_pic: "/images/profile_pic.jpg",
          user_name: "@Andy22",
        }
      },
      {
        id: 3,
        title: "Message 3",
        content: "Billy ipsum dolor sit amet.",
        createdAt: "2020-01-01",
        user: {
          id: 3,
          name: "Billy Joseph",
          profile_pic: "/images/profile_pic.jpg",
          user_name: "@Billy22",
        }
      },
      {
        id: 4,
        title: "Message 4",
        content: "Marc Lorem ipsum dolor sit amet.",
        createdAt: "2020-01-01",
        user: {
          id: 4,
          name: "Marc Arold",
          profile_pic: "/images/profile_pic.jpg",
          user_name: "@Marc22",
        }
      }
    ])
  }, [])

  return <Layout currentUser={currentUser}>

    <main className="content">
      <div className="container p-0">

        <div className="card bg-transparent border-0" >
          <div className="row g-0" style={{ height: "85vh" }}>

            <div className="col-12 col-lg-5 col-xl-5">
              <div className="seconary-bg-color p-2">
                <div className="input-group rounded mb-2">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className="form-control rounded "
                    placeholder="Search..."
                  />
                  <span className="input-group-text border-0 bg-transparent position-absolute" id="search-addon" style={{ right: 0, top: 15 }}>
                    <i className="fas fa-search text-danger"></i>
                  </span>
                </div>
                {messages.map(message => <MessageList setMessageActive={setMessageActive} active={messageActive === message.id} key={message.id} message={message} />)}
              </div>
            </div>
            <MessageBox messageActive={messageActive} />
          </div>
        </div>
      </div>
    </main>

  </Layout>
}

export default withAuth(Messages)