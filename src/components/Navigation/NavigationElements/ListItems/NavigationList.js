import Styles from "./NavigationList.module.scss";
import NavigationItem from "./NavigationItem";

const NavigationList = (props) => {
  return (
    <div className={Styles.navigationList}>
      <ul>
        <NavigationItem caption="Home" boxType="home">{props.children}</NavigationItem>
        <NavigationItem caption="Recent Posts" boxType="message-square-detail">{props.children}</NavigationItem>
        <NavigationItem caption="Something" boxType="cool">{props.children}</NavigationItem>
        <NavigationItem boxType="cool">{props.children}</NavigationItem>
      </ul>
    </div>
  );
};

export default NavigationList;
