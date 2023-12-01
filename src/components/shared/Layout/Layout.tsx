import { useEffect, useState } from "react";
import "./Layout.css";
import classNames from "classnames";
import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logo/Logo";
import useMediaQuery from "../../../hooks/useMediaQuery";

type Props = {
  renderSidebar: (collapsed: boolean, isMobile: boolean) => React.ReactNode;
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { renderSidebar, children } = props;
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useMediaQuery("mobile");

  const onToggleCollapse = () => setCollapsed((prev) => !prev);

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  return (
    <div
      className={classNames("layout", {
        "layout--collapsed": collapsed,
        "layout--mobile": isMobile,
      })}
    >
      <div className="layout__header">
        <div className="layout__brand">
          <div className="layout__logo">
            <Logo collapsed={collapsed || isMobile} />
          </div>
          <Hamburger onClick={onToggleCollapse} />
        </div>
        <nav className="layout__tagline">Weather App</nav>
      </div>
      <div className="layout__main">
        <div className="layout__sidebar">
          {renderSidebar(collapsed, isMobile)}
        </div>
        <div className="layout__content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
