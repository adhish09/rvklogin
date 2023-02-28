import "./Frame.css";
import Rectangle815 from "../../Images/Rectangle815.png";
import Arrow1 from "../../Images/Arrow1.png"
const Frame = () => {
  return (
    <div className="image-16-parent">
      <img className="rectangle-icon" alt="" src={Rectangle815} />
      <div className="prem-rawat">Prem Rawat</div>
      <div className="ambassador-of-peace">Ambassador of Peace</div>
      <div className="a-non-profit-charitable">
        A non-profit charitable organization Its objective is presenting the
        Message of Peace of Prem Rawat and undertaking humanitarian activities
        to bring harmony in life. It organizes live events with Prem Rawat and
        video events related to his message.
      </div>
      <div className="group-div">
        <div className="group-item" />
        <div className="know-more">Know more</div>
        <img className="group-inner" alt="" src={Arrow1} />
      </div>
    </div>
  );
};

export default Frame;
