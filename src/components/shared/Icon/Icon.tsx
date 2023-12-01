import React from "react";
import { IconName, getIcon } from "./config";
import classNames from "classnames";

type Props = {
  name: IconName;
} & React.HTMLProps<HTMLImageElement>;

const Icon = (props: Props) => {
  const { name, className, onClick, ...rest } = props;
  const icon = getIcon(name);

  const cssClass = classNames(className, {
    "icon--clickable": !!onClick,
  });

  return <img src={icon} onClick={onClick} className={cssClass} {...rest} />;
};

export default Icon;
