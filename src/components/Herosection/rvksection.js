import "./rvkSection.css";
import aboutus from "../../Images/aboutus.png";
import Arrow1 from "../../Images/Arrow1.png"

const RvkSection = () => {
  return (
    <div className="about-us-parent">
      <div className="about-us1">About Us</div>
      <div className="raj-vidya-kender1">Raj Vidya Kender</div>
      <img className="frame-child1" alt="" src={aboutus} />
      <div className="a-non-profit-charitable1">
        A non-profit charitable organization Its objective is presenting the
        Message of Peace of Prem Rawat and undertaking humanitarian activities
        to bring harmony in life. It organizes live events with Prem Rawat and
        video events related to his message.
      </div>
      <div className="rectangle-parent1">
        <div className="rectangle-div" />
        <div className="know-more1">Know more</div>
        <img className="arrow-icon" alt="" src={Arrow1} />
      </div>
    </div>
  );
};

export default RvkSection;
