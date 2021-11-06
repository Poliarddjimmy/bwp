import { useState } from "react";
import Layout from "../../components/layouts/layout"
import MessageList from "../../components/message/messageList"
import withAuth from "../../components/hocs/withAuth"
import { useEffect } from "react";


const Messages = ({ currentUser }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        id: 1,
        title: "Message 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        createdAt: "2020-01-01",
        user: {
          id: 1,
          name: "Djimmy Poliard",
        }
      },
      {
        id: 2,
        title: "Message 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        createdAt: "2020-01-03",
        user: {
          id: 1,
          name: "Andy Softmatec",
        }
      },
      {
        id: 3,
        title: "Message 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        createdAt: "2020-01-05",
        user: {
          id: 1,
          name: "Billy Joseph",
        }
      }
    ])
  }, [])

  const [messageActive, setMessageActive] = useState(null);
  const [search, setSearch] = useState(null);
  return <Layout currentUser={currentUser}>

    <main className="content">
      <div className="container p-0">

        <div className="card bg-transparent border-0" >
          <div className="row g-0" style={{ height: "85vh" }}>

            <div className="col-12 col-lg-5 col-xl-5">
              <div className="seconary-bg-color p-2 rounded" style={{ height: "100%" }}>
                <div className="input-group rounded mb-3 pt-2">
                  <input
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    value={search}
                    className="form-control rounded "
                    placeholder="Cheche"
                  />
                  <span className="input-group-text border-0 bg-transparent position-absolute" id="search-addon" style={{ right: 0, top: 15 }}>
                    <i className="fas fa-search text-danger"></i>
                  </span>
                </div>
                {messages.map(message => <MessageList setMessageActive={setMessageActive} active={messageActive === message.id} key={message.id} message={message} />)}
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

export default withAuth(Messages)