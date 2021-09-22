import Styles from "./NavigationItem.scss";
import "boxicons";

const NavigationItem = (props) => {
  return (
    <div className={Styles.navigationItem}>
      <li>
        <box-icon color="white" size="lg" name={props.boxType}></box-icon>
        <span>MenuItem</span>
      </li>
    </div>
  );
};

export default NavigationItem;
