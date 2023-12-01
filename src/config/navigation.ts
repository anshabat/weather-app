import { IconName } from "../components/shared/Icon/config";
import { MenuItem } from "../components/shared/navigation/types";
import { routerLinks } from "./router";

export const sidebarMenuItems: MenuItem[] = [
  {
    title: "Home",
    href: routerLinks.home(),
    iconName: IconName.Home,
  },
  {
    title: "About",
    href: routerLinks.about(),
    iconName: IconName.Folder,
  },
  {
    title: "Profile",
    href: routerLinks.profile(),
    iconName: IconName.User,
  },
];
