import { combineReducers } from 'redux';
import tasks from './pages/Tasks/reducer';
import notification from './components/Notification/reducer';

export default combineReducers({
  notification,
  tasks,
});
