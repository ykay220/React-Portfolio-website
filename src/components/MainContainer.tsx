import { ReactNode } from "react";
import "./MainContainer.css";

interface Prop {
  children: ReactNode;
}

const MainContainer = ({ children }: Prop) => {
  return <div className="mainWrap">{children}</div>;
};

export default MainContainer;
