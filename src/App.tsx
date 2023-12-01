import "./App.css";
import VerticalNavigation from "./components/shared/navigation/VerticalNavigation/VerticalNavigation";
import Layout from "./components/shared/Layout/Layout";
import { sidebarMenuItems } from "./config/navigation";

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
