import Image from "next/image";


const MessageBox = ({ messages, active, messageActive }) => {
  console.log(active)
  return (
    <div className="col-12 col-lg-7 col-xl-7">
      <div className="message p-2 d-flex flex-column border rounded border-danger min-vh-70">

        <div className="inmessage">
          <div className="other p-2 d-flex align-items-center">
            <Image src="/images/contact-left.png" alt="avatar" className="avatar-lg rounded-circle border-danger" width="40" height="40" />
            <div className="w-30">
              <strong className="d-flex m-2 text-light">
                {messageActive?.user?.name}
              </strong>
            </div>
            <div className="w-25">
              <small className="d-flex color-one fw-bold">
                {messageActive?.user?.user_name}
              </small>
            </div>
          </div>
          <div className="intext d-flex m-2">
            <div className="message-box">
              <span className=" badge bg-white text-dark rounded">{messageActive?.content}</span>
            </div>
          </div>
        </div>

        <div className="outmessage">

          <div className="outmessage">
            <div className="message-box">
              <span className="badge bg-transparent text-light rounded">Hey Man.</span>
            </div>
          </div>

          <div className="time">
            <small>03:35 pm</small>
          </div>
        </div>

      </div>

      <div className="input mt-2">
        <input type="text" className="form-control border-danger bg-transparent text-light" placeholder="Write your message..." />
      </div>
      <div className="button d-flex justify-content-end mt-2">
        <button className="btn btn-main-color ">Send</button>
      </div>

    </div>
  );
}

export default MessageBox;