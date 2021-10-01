import Styles from "./NavigationItem.module.scss";
import { HashRouter as Router, Link } from "react-router-dom";
import "boxicons";
const NavigationItem = (props) => {

  return (
    <div className={Styles.navigationItem}>
      <Router>
      <li>
        <Link to={props.url}>
          <div>
            {" "}
            <box-icon
              color='rgba(255,255,255,0.45)'
              type="solid"
              name={props.boxType}
            ></box-icon>
          </div>
          <div>
            <span>{props.caption}</span>
          </div>
        </Link>
      </li>
      </Router>

    </div>
  );
};

export default NavigationItem;
