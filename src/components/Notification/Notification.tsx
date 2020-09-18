import * as React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import IAppState from '../../types/state';
import { closeNotification } from './actions';
import { INotificationState } from './reducer';
import CloseIcon from '../../svg/CloseIcon';
import styles from './styles';

const Notification: React.FC<IProps> = (props) => {
  const { show, text, closeNotification, classes } = props;

  const handleClose = React.useCallback(() => {
    closeNotification();
  }, [closeNotification]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={show}
      autoHideDuration={5000}
      onClose={handleClose}
      message={text}
      action={
        <IconButton
          onClick={handleClose}
          classes={{ root: classes.iconButton }}
        >
          <CloseIcon />
        </IconButton>
      }
    />
  );
};

interface IProps extends INotificationState, WithStyles<typeof styles> {
  closeNotification: typeof closeNotification;
}

export default connect(
  (state: IAppState) => ({
    ...state.notification,
  }),
  {
    closeNotification,
  },
)(withStyles(styles)(Notification));
