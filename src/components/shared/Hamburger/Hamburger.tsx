import "./Hamburger.css";
import Icon from "../Icon/Icon";
import { IconName } from "../Icon/config";

type Props = {
  onClick: () => void;
};

const Hamburger = (props: Props) => {
  const { onClick } = props;

  return (
    <button className="hamburger" onClick={onClick}>
      <Icon name={IconName.Burger} />
    </button>
  );
};

export default Hamburger;
