import Styles from "./DashboardCard.module.scss";
import "boxicons";

const DashboardCard = (props) => {
  return (
    <div className={Styles.dashboardCard}>
      <div className={Styles.dashboardCard__header}>
        <h3>{props.heading}</h3>
      </div>
      <div className={Styles.dashboardCard__content}>
      <box-icon color="white" name="dollar" />
        <span>
          {props.value}
        </span>
      </div>
    </div>
  );
};

export default DashboardCard;
