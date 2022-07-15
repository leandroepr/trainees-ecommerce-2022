import React from "react";
import { classNames } from "../../helpers/class-names";

type FooterComponentProps = {
  className?: string;
  label?: string;
  id?: string;
};
const FooterComponent: React.FC<FooterComponentProps> = ({
  label = "Copyright © Trainees 80 Lines 2022.",
  className,
}) => {
  return (
    <div
      className={classNames(
        "justify-center max-w-max text-xs text-opacity-1 text-gray-200 m-auto",
        className
      )}
    >
      {label}
    </div>
  );
};

export default FooterComponent;
