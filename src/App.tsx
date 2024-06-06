import './styles.css'; // Import your CSS file

function Message() {
  return (
  <div className="container">
    <img className='PitchathonIMG' src="src/assets/PLogo1.png" alt="" />
    <img  src="1.png" alt="" />
    <div className="CS-text">COMING SOON</div>
      <div className="lowerSection">
        <div className="noti-text">Get notified when we launch</div>
        <div className="subPortion">
          <input className="email-bar" type="email" placeholder="Email" />
          <button className="subButton">Subscribe</button>
        </div>
      </div>
  </div>
  );
};
export default Message;