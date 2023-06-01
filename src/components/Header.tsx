import "./Header.css";
import selfie from "../assets/ykc.jpg";
import resume from "../assets/Yama-Karimi-Resume.pdf";
import mediaIcons from "../mediaIcons";
import { RefObject, useState } from "react";

interface NavRefs {
  [key: string]: RefObject<HTMLDivElement>;
}

interface SideNavProps {
  navRefs: NavRefs;
  onToggleHandler: () => void;
}

const Header = ({ onToggleHandler, navRefs }: SideNavProps) => {
  const homeRef = navRefs.home;
  return (
    <>
      <div
        className="menuButton"
        id="menuButton"
        onClick={onToggleHandler}
        tabIndex={0}
      >
        <div className="linesContainer">
          <span></span>
        </div>
      </div>
      <div className="overview-Wrap" ref={homeRef}>
        <div className="img-Wrap">
          <img src={selfie} alt="portrait of yams" />
        </div>
        <div className="description-wrap">
          <p className="top-text">Hi there! I'm</p>
          <h1 className="name-text">
            <span className="blue-text">Yama</span> Karimi
          </h1>
          <p className="bio-text">
            A passionate{" "}
            <span className="blue-text"> Front-End Web Developer </span>
            dedicated to crafting interactive applications and experiences
            online.
          </p>
          <div className="socials-wrap">
            <a className="btn-resume" target="_blank" href={resume}>
              Resume
            </a>
            <ul className="socials-list">
              {mediaIcons.map((icon) => (
                <li className="socials-listItem" key={icon.id}>
                  <a target="_blank" href={icon.url}>
                    <icon.icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
