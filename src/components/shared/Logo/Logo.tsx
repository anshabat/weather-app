import "./Logo.css";
import Icon from "../Icon/Icon";
import { IconName } from "../Icon/config";

type Props = {
  collapsed?: boolean;
};

const Logo = (props: Props) => {
  const { collapsed } = props;

  return (
    <div className="logo">
      <Icon name={IconName.Cloud} width={24} className="logo__icon" />
      {collapsed ? null : <div className="logo__text">Weather</div>}
    </div>
  );
};

export default Logo;
