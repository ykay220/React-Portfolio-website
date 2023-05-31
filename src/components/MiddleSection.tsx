import React, { RefObject, useRef } from "react";
import "./MiddleSection.css";
import skillIcons from "../skills-icons";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum est
          quo nobis aliquid saepe, cupiditate, quibusdam perspiciatis ex
          consequuntur maiores quasi inventore tenetur ratione laboriosam cumque
          placeat quidem nostrum voluptatibus. Reiciendis, ipsam. Necessitatibus
          perferendis alias voluptatum incidunt itaque reiciendis labore placeat
          aliquid, esse doloremque modi rerum! Autem, consequuntur! Voluptatum
          maiores quae porro sit quos, praesentium deleniti delectus ipsam vel
          neque! Minus rem veritatis possimus reprehenderit explicabo minima
          eaque facere aspernatur. Odit dicta distinctio at. Obcaecati, ab unde.
          Ullam a doloribus, consequuntur harum cupiditate nulla deleniti
          facilis quibusdam neque, debitis sapiente! Repellendus nihil voluptas
          velit voluptatum laboriosam ullam maiores illo ratione quae nisi
          incidunt alias beatae adipisci, dignissimos optio sint nemo fugiat
          magni in natus? Ex nulla magnam dignissimos qui et.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum est
          quo nobis aliquid saepe, cupiditate, quibusdam perspiciatis ex
          consequuntur maiores quasi inventore tenetur ratione laboriosam cumque
          placeat quidem nostrum voluptatibus. Reiciendis, ipsam. Necessitatibus
          perferendis alias voluptatum incidunt itaque reiciendis labore placeat
          aliquid, esse doloremque modi rerum! Autem, consequuntur! Voluptatum
          maiores quae porro sit quos, praesentium deleniti delectus ipsam vel
          neque! Minus rem veritatis possimus reprehenderit explicabo minima
          eaque facere aspernatur. Odit dicta distinctio at. Obcaecati, ab unde.
          Ullam a doloribus, consequuntur harum cupiditate nulla deleniti
          facilis quibusdam neque, debitis sapiente! Repellendus nihil voluptas
          velit voluptatum laboriosam ullam maiores illo ratione quae nisi
          incidunt alias beatae adipisci, dignissimos optio sint nemo fugiat
          magni in natus? Ex nulla magnam dignissimos qui et.
        </div>
      </div>

      <div className="sectionOuter" ref={contactRef} id="work">
        <div className="sectionHead">
          <h2>Contact</h2>
        </div>
        <div className="sectionInner">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum est
          quo nobis aliquid saepe, cupiditate, quibusdam perspiciatis ex
          consequuntur maiores quasi inventore tenetur ratione laboriosam cumque
          placeat quidem nostrum voluptatibus. Reiciendis, ipsam. Necessitatibus
          perferendis alias voluptatum incidunt itaque reiciendis labore placeat
          aliquid, esse doloremque modi rerum! Autem, consequuntur! Voluptatum
          maiores quae porro sit quos, praesentium deleniti delectus ipsam vel
          neque! Minus rem veritatis possimus reprehenderit explicabo minima
          eaque facere aspernatur. Odit dicta distinctio at. Obcaecati, ab unde.
          Ullam a doloribus, consequuntur harum cupiditate nulla deleniti
          facilis quibusdam neque, debitis sapiente! Repellendus nihil voluptas
          velit voluptatum laboriosam ullam maiores illo ratione quae nisi
          incidunt alias beatae adipisci, dignissimos optio sint nemo fugiat
          magni in natus? Ex nulla magnam dignissimos qui et.
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
