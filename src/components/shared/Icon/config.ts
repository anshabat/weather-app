import Burger from "./svg/burger.svg";
import Cloud from "./svg/cloud.svg";
import Home from "./svg/home.svg";
import Folder from "./svg/folder.svg";
import User from "./svg/user.svg";

type SvgIcon = string;

export enum IconName {
  Burger = "burger",
  Cloud = "cloud",
  Home = "home",
  Folder = "folder",
  User = "user",
}

const SVG_ICON: Record<IconName, string> = {
  [IconName.Burger]: Burger,
  [IconName.Cloud]: Cloud,
  [IconName.Home]: Home,
  [IconName.Folder]: Folder,
  [IconName.User]: User,
};

export const getIcon = (name: IconName): SvgIcon => SVG_ICON[name];
