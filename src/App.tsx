import "./App.css";
import VerticalNavigation from "./components/shared/navigation/VerticalNavigation/VerticalNavigation";
import Layout from "./components/shared/Layout/Layout";
import { sidebarMenuItems } from "./config/navigation";
import Page from "./components/shared/Page/Page";
import WeatherDashboard from "./components/weather/WeatherDashboard/WeatherDashboard";

function App() {
  return (
    <Layout
      renderSidebar={(collapsed, isMobile) => (
        <VerticalNavigation
          items={sidebarMenuItems}
          collapsed={collapsed}
          isMobile={isMobile}
        />
      )}
    >
      <Page title="Dashboard">
        <WeatherDashboard />
      </Page>
    </Layout>
  );
}

export default App;
