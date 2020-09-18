import * as React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Loader from '../../components/Loader';
import IAppState from '../../types/state';
import { ITask } from './types';
import { getTasks } from './actions';
import styles from './styles';
import Button from '../../components/Button';
import CreateTask from './CreateTask';

const Tasks: React.FC<IProps> = (props) => {
  const { loaded, getTasks, classes } = props;
  const [showModal, setShowModal] = React.useState(false);
  React.useEffect(() => {
    getTasks();
  }, [getTasks]);
  const onModalClose = React.useCallback(() => {
    setShowModal(false);
  }, []);
  const onOpenModal = React.useCallback(() => {
    setShowModal(true);
  }, []);
  if (!loaded) {
    return <Loader center />;
  }
  return (
    <div>
      <div className={classes.titleWrapper}>
        <Typography variant="h1">Список задач</Typography>
        <Button onClick={onOpenModal}>Добавить</Button>
      </div>
      {showModal && <CreateTask onClose={onModalClose} />}
    </div>
  );
};

interface IProps extends WithStyles<typeof styles> {
  items: ITask[] | null;
  getTasks: typeof getTasks;
  loaded: boolean;
  loading: boolean;
}

export default connect(
  (state: IAppState) => ({
    items: state.tasks.items,
    loading: state.tasks.loading,
    loaded: state.tasks.loaded,
  }),
  {
    getTasks,
  },
)(withStyles(styles)(Tasks));
