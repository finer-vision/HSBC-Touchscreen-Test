import React from "react";
import { Route, Switch } from "react-router-dom";

const Dashboard = React.lazy(() => import("../../pages/dashboard/dashboard"));
const Info = React.lazy(() => import("../../pages/info/info"));

export default function App() {
  return (
    <React.Suspense fallback="Loading...">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/info" component={Info} />
      </Switch>
    </React.Suspense>
  );
}
