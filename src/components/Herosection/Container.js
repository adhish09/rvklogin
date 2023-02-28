import "./container.css";
import Arrow from "../../Images/Arrow.png"

const Container = () => {
  return (
    <div className="rectangle-container">
      <div className="frame-item" />
      <b className="our-goal-is-container">
        <p className="our-goal-is">{`Our goal is to help `}</p>
        <p className="poor-people">poor people</p>
      </b>
      <b className="m">15M+</b>
      <b className="become-volunteer">Read More</b>
      <div className="become-volunteer1">People Got Benefitted</div>
      <img className="frame-inner" alt="" src={Arrow} />
      <div className="line-div" />
    </div>
  );
};

export default Container;
