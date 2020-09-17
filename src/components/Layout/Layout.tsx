import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import styles from './styles';

type IProps = WithStyles<typeof styles>;

const Layout: React.FC<IProps> = (props) => {
  const { children, classes } = props;
  return <div className={classes.root}>{children}</div>;
};

export default withStyles(styles)(Layout);
