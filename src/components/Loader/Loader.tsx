import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@material-ui/core/CircularProgress';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import styles from './styles';

const Loader: React.FC<IProps> = (props) => {
  const { classes, center, ...rest } = props;
  if (center) {
    return (
      <div className={classes.center}>
        <CircularProgress {...rest} />
      </div>
    );
  }
  return <CircularProgress {...rest} />;
};

interface IProps
  extends Omit<CircularProgressProps, 'classes'>,
    WithStyles<typeof styles> {
  center?: boolean;
}

export default withStyles(styles)(Loader);
