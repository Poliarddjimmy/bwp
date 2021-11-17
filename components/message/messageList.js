import Image from "next/image";

const MessageList = ({ message, active, setMessageActive }) => {
  console.log(active)
  return (
    <div onClick={() => setMessageActive(message?.id)} className={`cursor-pointer chat-list p-2 d-flex align-items-center justify-content-between ${active ? "active" : ""} rounded`}>
      <Image src="/images/contact-left.png" alt="avatar" className="avatar-lg rounded-circle border-danger" width="40" height="40" />
      <div className="w-80">
        <strong className="d-flex justify-content-between align-items-center text-light">
          {message.user.name}
          <small>03:30</small>
        </strong>
        <small className="d-flex justify-content-between align-items-center">
          <span>{message.content.substr(0, 20)}...</span>
          <span className="badge badge-danger rounded-circle">2</span>
        </small>
      </div>
    </div>
  );
}

export default MessageList;