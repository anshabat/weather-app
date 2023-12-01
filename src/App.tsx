import "./App.css";
import { IconName } from "./components/shared/Icon/config";
import VerticalNavigation from "./components/shared/navigation/VerticalNavigation/VerticalNavigation";
import { MenuItem } from "./components/shared/navigation/types";
import Layout from "./components/shared/Layout/Layout";
import { routerLinks } from "./config/router";

const sidebarMenuItems: MenuItem[] = [
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

function App() {
  return (
    <Layout
      renderSidebar={(collapsed) => (
        <VerticalNavigation items={sidebarMenuItems} collapsed={collapsed} />
      )}
    >
      Hello weather
    </Layout>
  );
}

export default App;
