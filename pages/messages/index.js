import { useEffect, useState } from "react";
import Layout from "../../components/layouts/layout"
import MessageList from "../../components/message/messageList"
import Image from "next/image";
import withAuth from "../../components/hocs/withAuth";

const Messages = ({ currentUser }) => {
  const [messageActive, setMessageActive] = useState(null);
  const [search, setSearch] = useState(null);
  const [messages, setMessages] = useState([]);

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
          name: "Andy Softmatech",
        }
      },
      {
        id: 3,
        title: "Message 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        createdAt: "2020-01-05",
        user: {
          id: 1,
          title: "Message 1",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          createdAt: "2020-01-01",
          user: {
            id: 1,
            name: "Djimmy Poliard",
          }
        },
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
                    placeholder="Chèche..."
                  />
                  <span className="input-group-text border-0 bg-transparent position-absolute" id="search-addon" style={{ right: 0, top: 15 }}>
                    <i className="fas fa-search text-danger"></i>
                  </span>
                </div>
                {messages.map(message => <MessageList setMessageActive={setMessageActive} active={messageActive === message.id} key={message.id} message={message} />)}
              </div>
            </div>

            <div className="col-12 col-lg-7 col-xl-7">
              <div className="message p-2 d-flex flex-column border rounded border-danger min-vh-50">

                <div className="inmessage">
                  <div className="other p-2 d-flex align-items-center">
                    <Image src="/images/contact-left.png" alt="avatar" className="avatar-lg rounded-circle border-danger" width="40" height="40" />
                    <div className="w-30">
                      <strong className="d-flex m-2 text-light">
                        Billy Joseph
                      </strong>
                    </div>
                    <div className="w-25">
                      <small className="d-flex color-one fw-bold">
                        @wiky23
                      </small>
                    </div>
                  </div>
                  <div className="intext d-flex m-2">
                    <div className="message-box">
                      <span className=" badge bg-white text-dark rounded">Hey Billy.</span>
                    </div>
                  </div>
                  <div className="intext d-flex">
                    <div className="message-box">
                      <span className="badge bg-white text-dark rounded">How you doing Man.</span>
                    </div>
                  </div>
                  <div className="time">
                    <small>03:30 pm</small>
                  </div>
                </div>

                <div className="outmessage">

                  <div className="outmessage">
                    <div className="message-box">
                      <span className="badge bg-transparent text-light rounded">Hey Man.</span>
                    </div>
                  </div>

                  <div className="outmessage">
                    <div className="message-box">
                      <span className="badge bg-transparent text-light rounded">Doing Great.</span>
                    </div>
                  </div>

                  <div className="time">
                    <small>03:35 pm</small>
                  </div>
                </div>

              </div>

              <div className="input">
                <input type="text" className="form-control border-danger bg-transparent text-light" placeholder="Write your message..." />
              </div>
              <div className="button d-flex justify-content-end">
                <button className="btn btn-main-color ">Send</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>

  </Layout>
}

export default withAuth(Messages)