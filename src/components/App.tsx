import React, { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./App.scss";

import routes from "../routes";

const App = () => {
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Chargement...</div>
  );

  return (
    <div className="app-backround">
      <Suspense fallback={loading()}>
        <HashRouter basename='/'>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  render={(props: any) => <route.component {...props} />}
                />
              ) : null;
            })}
          </Switch>
        </HashRouter>
      </Suspense>
    </div>
  );
};

export default App;
