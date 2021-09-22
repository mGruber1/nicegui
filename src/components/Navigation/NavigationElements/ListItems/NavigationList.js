import Styles from "./NavigationList.module.scss";
import NavigationItem from "./NavigationItem";

const NavigationList = () => {
  return (
    <div className={Styles.navigationList}>
      <ul>
        <NavigationItem boxType="cool"></NavigationItem>
      </ul>
    </div>
  );
};

export default NavigationList;
