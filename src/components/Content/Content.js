import Styles from "./Content.module.scss";
import Dashboard from "./Dashboard/Dashboard"
import { HashRouter as Router, Route, Switch, withRouter } from "react-router-dom";

const Content = (props) => {
  return (
    <div className={Styles.content}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard></Dashboard>
            </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/posts">
            {props.children}<h3>POSTS</h3>
          </Route>
          <Route path="/something"><h3>SOMETHING</h3></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Content;
