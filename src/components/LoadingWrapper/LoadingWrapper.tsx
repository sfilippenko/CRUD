import * as React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import styles from './styles';

const LoadingWrapper: React.FC<IProps> = (props) => {
  const { loading, classes, children } = props;
  return (
    <div className={classes.wrapper}>
      {loading && <LinearProgress classes={{ root: classes.progress }} />}
      {children}
    </div>
  );
};

interface IProps extends WithStyles<typeof styles> {
  loading?: boolean;
}

export default withStyles(styles)(LoadingWrapper);
