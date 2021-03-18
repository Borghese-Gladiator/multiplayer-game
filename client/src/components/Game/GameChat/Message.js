export default function Message({ userName, msg, time }) {
  return (
    <div className="msg">
      <span>{userName}</span>
      <span className="message">{msg}</span>
      <span className="message">{time}</span>
    </div>
  )
}