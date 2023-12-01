import Icon from "../../Icon/Icon";
import { MenuItem } from "../types";
import "./VerticalNavigation.css";
import classNames from "classnames";

type Props = {
  items: MenuItem[];
  collapsed?: boolean;
  isMobile?: boolean;
};

const VerticalNavigation = (props: Props) => {
  const { items, collapsed = false, isMobile = false } = props;

  return (
    <ul
      className={classNames("vertical-nav", {
        "vertical-nav--collapsed": collapsed,
        "vertical-nav--mobile": isMobile,
      })}
    >
      {items.map((item) => {
        const { iconName, title, href } = item;
        return (
          <li key={title}>
            <a href={href} className="vertical-nav__link">
              {iconName ? (
                <span className="vertical-nav__icon">
                  <Icon width={24} name={iconName} />
                </span>
              ) : null}
              <span className="vertical-nav__title">{title}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default VerticalNavigation;
