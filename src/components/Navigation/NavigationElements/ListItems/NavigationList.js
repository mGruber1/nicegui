import Styles from "./NavigationList.module.scss";
import NavigationItem from "./NavigationItem";

const NavigationList = (props) => {
  return (
    <div className={Styles.navigationList}>
      <ul>
        <NavigationItem url="/dashboard" caption="Dashboard" boxType="dashboard">
          {props.children}
        </NavigationItem>
        <NavigationItem
          url="/posts"
          caption="Recent Posts"
          boxType="message-square-detail"
        >
          {props.children}
        </NavigationItem>
        <NavigationItem url="/something" caption="Something" boxType="cool">
          {props.children}
        </NavigationItem>
      </ul>
    </div>
  );
};

export default NavigationList;
