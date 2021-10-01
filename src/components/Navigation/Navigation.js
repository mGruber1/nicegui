import Styles from "./Navigation.module.scss";
import "boxicons";
import NavigationHeader from "./NavigationElements/Header/NavigationHeader";
import NavigationList from "./NavigationElements/ListItems/NavigationList";
import NavigationBtn from "./NavigationElements/NavigationBtn/NavigationBtn";
import { useState } from 'react'

const Navigation = () => {
  const [btnActiveState, setBtnState] = useState("false")
  const btnStateHandler = () => {
    setBtnState(!btnActiveState)
  }


  return (
    <div id="navigationBar" className={Styles.navigation}>
      <NavigationHeader></NavigationHeader>
      <NavigationList></NavigationList>
      <NavigationBtn btnStateHandler={setBtnState}></NavigationBtn>
    </div>
  );
};

export default Navigation;
