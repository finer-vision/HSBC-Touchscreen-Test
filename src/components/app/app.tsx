import React from "react";
import { Route, Switch } from "react-router-dom";

const Dashboard = React.lazy(() => import("../../pages/dashboard/dashboard"));

export default function App() {
  React.useEffect(() => {
    function onContextMenu(event: Event) {
      event.preventDefault();
    }

    window.addEventListener("contextmenu", onContextMenu);
    return () => {
      window.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  return (
    <React.Suspense fallback="Loading...">
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </React.Suspense>
  );
}
