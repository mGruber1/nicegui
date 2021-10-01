import Styles from './NavigationBtn.module.scss';
import NavStyles from './../../Navigation.module.scss';
const NavigationBtn = (props) => {
  const btnClickHandler = (event) => {

    if ( props.btnActiveState ) {
      console.log("ACTIVE")
    } else {
      console.log("INACTIVE")
    }
    const navigationBar = document.getElementById("navigationBar")
    navigationBar.classList.toggle(`${NavStyles.active}`)
  }
  return (
    <button onClick={btnClickHandler} className={Styles.navigationBtn}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default NavigationBtn