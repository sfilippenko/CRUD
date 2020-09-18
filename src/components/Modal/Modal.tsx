import * as React from 'react';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import styles from './styles';
import CloseIcon from '../../svg/CloseIcon';

const Modal: React.FC<IProps> = (props) => {
  const {
    classes,
    children,
    disabled,
    disableBackdropClick,
    disableEscapeKeyDown,
    onClose,
    ...dialogProps
  } = props;
  return (
    <Dialog
      classes={{ root: classes.dialog }}
      onClose={onClose}
      disableBackdropClick={disableBackdropClick || disabled}
      disableEscapeKeyDown={disableBackdropClick || disableEscapeKeyDown}
      {...dialogProps}
    >
      <IconButton
        onClick={disabled ? undefined : onClose}
        classes={{ root: classes.iconButton }}
      >
        <CloseIcon className={classes.icon} />
      </IconButton>
      {children}
    </Dialog>
  );
};

interface IProps
  extends Omit<DialogProps, 'classes' | 'onClose'>,
    WithStyles<typeof styles> {
  disabled?: boolean;
  onClose: () => void;
}

export default withStyles(styles)(Modal);
