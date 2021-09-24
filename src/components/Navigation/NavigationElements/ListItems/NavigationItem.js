import Styles from "./NavigationItem.module.scss";
import "boxicons";
const NavigationItem = (props) => {
  return (
    <div className={Styles.navigationItem}>
      <li>
        <a href="#">
          <div>
            {" "}
            <box-icon
              color="white"
              type="regular"
              name={props.boxType}
            ></box-icon>
          </div>
          <div>
            <span>{props.caption}</span>
          </div>
        </a>
      </li>
    </div>
  );
};

export default NavigationItem;
