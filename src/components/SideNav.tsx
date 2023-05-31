import { MouseEvent, useRef, RefObject, useEffect } from "react";
import navLi from "../navLi";
import "./SideNav.css";

interface NavRefs {
  [key: string]: RefObject<HTMLElement>;
}

interface SideNavProps {
  navRefs: NavRefs;
  isHidden: boolean;
}

const SideNav = ({ navRefs, isHidden }: SideNavProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onMenuClick = (event: MouseEvent) => {
    event.preventDefault();
    const targetId = (event.currentTarget as HTMLLIElement).id;

    console.log(navRefs[targetId]);

    navRefs[targetId]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className={` sideMenu ${isHidden ? "sideMenuShow" : " sideMenuHide"}`}>
      <p className="sideMenu_logo">Yk</p>
      <ul className="nav">
        {navLi.map((list) => (
          <li key={list.id} id={list.section} onClick={onMenuClick}>
            <a href={list.section}>
              <span>{<list.icon />}</span>
              <span className="listItem">{list.title}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="scrollBottom">Sc</div>
    </div>
  );
};

export default SideNav;
