import Styles from "./Navigation.module.scss";
import "boxicons";
import NavigationHeader from "./NavigationElements/Header/NavigationHeader";
import NavigationList from "./NavigationElements/ListItems/NavigationList";

const Navigation = () => {
  return (

      <div className={Styles.navigation}>
        <NavigationHeader></NavigationHeader>
        <NavigationList></NavigationList>
      </div>


  );
};

export default Navigation;
