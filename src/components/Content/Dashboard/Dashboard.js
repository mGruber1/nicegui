import Styles from './Dashboard.module.scss';
import DashboardCard from './DashboardCard/DashboardCard';
const Dashboard = () => {
  return (
    <div className={Styles.dashboard}>
      <DashboardCard heading="Annual Costs" value="5,700"></DashboardCard>
      <DashboardCard heading="Average Pay" value="4,000"></DashboardCard>
    </div>
  )
}

export default Dashboard