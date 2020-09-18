import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Tasks from './pages/Tasks';
import Task from './pages/Task';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/tasks" />} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/tasks/:id" component={Task} />
        <Route exact path="/404" render={() => <div>Poka</div>} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
