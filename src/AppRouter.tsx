import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tasks from './pages/Tasks/Tasks';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Tasks} />
        <Route path="/404" render={() => <div>Poka</div>} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
