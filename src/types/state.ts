import { ITasksState } from '../pages/Tasks/reducer';
import { INotificationState } from '../components/Notification/reducer';

export default interface IAppState {
  tasks: ITasksState;
  notification: INotificationState;
}
