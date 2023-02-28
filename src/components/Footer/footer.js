import React from "react";
import "./footer.css";
import "../global.css"
import styled from "styled-components";
import Youtube from "../../Images/youtube.png";
import instagram from "../../Images/instagram.png";
import twitter from "../../Images/twitter.png"


export const FooterLink = styled.a`
 position: absolute;
    left: 0;
    letter-spacing: 0.02em;
    line-height: 1.16rem;
    top: 2.79rem;
    color: #FFFFFF;
    text-decoration: none;
   
  &:hover {
      color: yellow;
      transition: 200ms ease-in;
  }
`;

export const FooterLink1 = styled.a`
 position: absolute;
    left: 0;
    letter-spacing: 0.02em;
    line-height: 1.16rem;
    top: 4.48rem;
    color: #FFFFFF;
    text-decoration: none;
   
  &:hover {
      color: yellow;
      transition: 200ms ease-in;
  }
`;

export const FooterLink2 = styled.a`
 position: absolute;
    left: 0;
    letter-spacing: 0.02em;
    line-height: 1.16rem;
    top: 6.17rem;
    color: #FFFFFF;
    text-decoration: none;
   
  &:hover {
      color: yellow;
      transition: 200ms ease-in;
  }
`;


const Footer = () => {
  return (
    <div className="frame-group">
      <div className="group-wrapper">
        <div className="copyright-2019-raj-vidya-kende-wrapper">
          <div className="copyright-2019-raj">{`© Copyright 2019 Raj Vidya Kender Policy Terms & conditions`}</div>
        </div>
      </div>
      <div className="frame-child10" />
     <a href="https://www.youtube.com/@rajvidyakender"> <img className="group-icon" alt="" src={Youtube} /> </a>
      <a href="https://www.facebook.com/rajvidyakender"><img className="insta-icon" alt="" src={instagram} /></a>
      <img className="twitter-icon" alt="" src={twitter} />


      <div className="links-parent">
        <div className="links">Links</div>
        <FooterLink href="https://www.anjan.tv/"> Anjan TV</FooterLink>
        <FooterLink1 href="https://www.rvkproducts.com/">Rvk products</FooterLink1>
        <FooterLink2 href="https://premrawat.com/">Prem Rawat</FooterLink2>
        <div className="clients">Clients</div>
        <div className="clients1">Clients</div>
        <div className="humantarian">Clients</div>
      </div>
      <div className="getting-involved-parent">
        <div className="getting-involved">Getting involved</div>
        <div className="career">Career</div>
        <div className="rvk-products">Events</div>
        <div className="glimpse1">Glimpse</div>
        <div className="volunteer">Volunteer</div>
        <div className="contribute">Contribute</div>
        <div className="humantarian">Humantarian</div>
        <div className="policies">policies</div>
      </div>
      <div className="chattarpur-chandanhula-new-de-parent">
        <div className="chattarpur-chandanhula-new-container">
          <p className="chattarpur-chandanhula">Chattarpur, chandanhula</p>
          <p className="new-delhi-110074">New delhi -110074</p>
        </div>
        <div className="div">+91 011-3500 9190</div>
        <div className="rvkenderrvkin">Rvkender@rvk.in</div>
        <div className="address">Address:</div>
      </div>
      <div className="email-for-subscription-parent">
        <div className="email-for-subscription">Email for subscription</div>
        <div className="subscribe-to-our">
          Subscribe to our newsletter to get more information
        </div>
        <div className="rectangle-parent20">
          <div className="frame-child11" />
          <div className="subscribe">Subscribe</div>
          <div className="email">Email</div>
        </div>
      </div>
      <div className="rectangle-parent21">
        <div className="frame-child12" />
        <div className="raj-vidya-kender2">Raj Vidya Kender</div>
        <b className="rvk1">RVK</b>
      </div>
    </div>
  );
};

export default Footer;
