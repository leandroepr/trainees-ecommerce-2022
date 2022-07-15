import { classNames } from "helpers/class-names";
import React from "react";

export interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}
export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div
      className={classNames(
        "bg-yellow-300 border-b drop-shadow-sm",
        props.className
      )}
    >
      <div className="container mx-auto flex flex-col ">{props.children}</div>
    </div>
  );
};

export default Header;
