import React, { RefObject, useRef } from "react";
import "./MiddleSection.css";
import skillIcons from "../skills-icons";
import projectsInfo from "../projectInfo";
import ProjectsCard from "./ProjectsCard";
import { FaEnvelope, FaCalendarDay } from "react-icons/fa";

interface NavRefs {
  [key: string]: RefObject<HTMLDivElement>;
}

interface SideNavProps {
  navRefs: NavRefs;
}

const MiddleSection = ({ navRefs }: SideNavProps) => {
  const aboutRef = navRefs.about;
  const workRef = navRefs.work;
  const contactRef = navRefs.contact;
  const skillsRef = navRefs.skills;

  return (
    <div>
      <div className="sectionOuter" ref={aboutRef}>
        <div className="sectionHead">
          <h2>About me</h2>
        </div>

        <div className="sectionInner">
          <p className="about-p">
            I'm an agile Front-End Developer with practical expertise in
            implementing HTML, CSS, and JavaScript updates for Q4 client
            websites. Efficient in managing multiple projects concurrently, I
            possess an unwavering passion for coding and using it to solve
            problems. I am thrilled to collaborate with exceptional programmers
            and expand my knowledge further!
          </p>
        </div>
      </div>

      <div className="sectionOuter" ref={skillsRef} id="skills">
        <div className="sectionHead">
          <h2>Skills</h2>
        </div>
        <div className="sectionInner">
          <ul className="skillsGrid">
            {skillIcons.map((icon) => (
              <li key={icon.id}>
                <div className="itemContainer">
                  <img src={icon.image} /> <p>{icon.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sectionOuter" ref={workRef}>
        <div className="sectionHead">
          <h2>Projects</h2>
        </div>
        <div className="sectionInner">
          {projectsInfo.map((project) => (
            <ProjectsCard projectData={project} />
          ))}
        </div>
      </div>

      <div className="sectionOuter" ref={contactRef} id="work">
        <div className="sectionHead">
          <h2>Contact</h2>
        </div>
        <div className="sectionInner">
          <h3 className="contact-title">Get in Touch</h3>
          <div className="contactWrap">
            <div className="contactFlex">
              <div className="contactInner mail">
                <FaEnvelope className="env-icon" />
                <a href="mailto:yama.karimi08@gmail.com">
                  yama.karimi08@gmail.com
                </a>
                <p>Email Me</p>
              </div>
            </div>
            <div className="contactFlex">
              <div className="contactInner cal">
                <FaCalendarDay className="cal-icon" />
                <a href="https://calendly.com/yamakarimi" target="_blank">
                  Calendly
                </a>
                <p>Schedule a Meeting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
