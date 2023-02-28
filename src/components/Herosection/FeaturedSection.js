import "./FeaturedSection.css";
import image21 from "../../Images/image21.png";
import image5 from "../../Images/image5.png";
import image6 from "../../Images/image6.png"
import image20 from "../../Images/image20.png";
import image7 from "../../Images/image7.png";
import image19 from "../../Images/image19.png";
import Rectangle822 from "../../Images/Rectangle822.png";
import YoutubeEmbed from "./YoutubeEmbed";


const FeaturedSection = () => {
  return (
    <div className="featured-parent">
      <div className="featured">Initiatives</div>
      <div className="card-1-parent">
        <div className="card-1">
          <YoutubeEmbed embedId="_KxyA4vSMus" />
        </div>
        <div className="card-2">
          <YoutubeEmbed embedId="uVcZegnB7kY" />
        </div>
        <div className="card-3">
        <YoutubeEmbed embedId="epOTwujEb-0" />
        </div>
      </div>
      <div className="card-4-parent">
        <div className="card-1">
        <YoutubeEmbed embedId="DmKe9Msoqv4" />

          
        </div>
        <div className="card-2">
        <YoutubeEmbed embedId="jkncEA7wBRc" />

          
        </div>
        <div className="card-3">
        <YoutubeEmbed embedId="qADLi7A_oxg" />

        
        </div>
      </div>
     
    </div>
  );
};

export default FeaturedSection;
