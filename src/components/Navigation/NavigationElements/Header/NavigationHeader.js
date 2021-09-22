import Navigation from "../../Navigation";
import Styles from "./NavigationHeader.module.scss";

const NavigationHeader = () => {
  return (
    <div className={Styles.navigationHeader}>
      <box-icon color="white" size="lg"  name="cool"></box-icon>
      <span>niceGUI</span>
    </div>
  );
};

export default NavigationHeader;
