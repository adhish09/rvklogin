import React, { useState } from "react";
import "./header.css";
import "../global.css";
import Vector from "../../Images/Vector.png";
import Vector1 from "../../Images/Vector1.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  position: absolute;
  top: 0.95rem;
  left: 83rem;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: white;
  display: flex;
  text-align: center;
  border-radius: var(--br-xl);
  background-color: var(--color-darkgray);
  width: 3.5rem;
  height: 1.25rem;
`;

function Header() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [modal1, setModal1] = useState(false);

  const toggleModal1 = () => {
    setModal1(!modal1);
  };

  if (modal1) {
    document.body.classList.add("active-modal1");
  } else {
    document.body.classList.remove("active-modal1");
  }

  return (
    <div className="header">
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="raj-vidya-kender">Raj Vidya Kender</div>
        <b className="rvk">RVK</b>
      </div>
      <div className="epmenu-parent">
        <img className="epmenu-icon" alt="" src={Vector} />
        <div className="home">Home</div>
        <div className="about-us">About us</div>
        <div className="events">
          <span className="events-txt">
            <span>Events</span>
            <span className="span">{` `}</span>
          </span>
        </div>

        <div className="initiatives">Initiatives</div>
        <div className="more">More</div>
      </div>

      {/* <div className="login">Login</div> */}
      <Button onClick={toggleModal}>Login </Button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalBackground">
            <div className="modalContainer">
              <div className="titleCloseBtn">
                <button onClick={toggleModal}>X</button>
              </div>

              <div className="body">
                <p>
                  Login or create an account to save your progress and see your
                  stats
                </p>
              </div>
              <div>
                <Link to="login">
                <button className="button">Login</button></Link>
              
                <br />
                <Link to="register">
                <button className="button">Sign up</button></Link>
                <div className="mid">OR</div>
                <button className="button">Skip to explore</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="group-parent">
        <div className="material-symbolsarrow-back-io-parent">
          <img
            className="material-symbolsarrow-back-io-icon"
            alt=""
            src={Vector1}
          />
          <div className="language">Language</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
