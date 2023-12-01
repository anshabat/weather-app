import Burger from "./svg/burger.svg";
import Cloud from "./svg/cloud.svg";

type SvgIcon = string;

export enum IconName {
  Burger = "burger",
  Cloud = "cloud",
}

const SVG_ICON: Record<IconName, string> = {
  [IconName.Burger]: Burger,
  [IconName.Cloud]: Cloud,
};

export const getIcon = (name: IconName): SvgIcon => SVG_ICON[name];
