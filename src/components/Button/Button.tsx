import { HTMLAttributes } from 'react';
import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import styles from './styles';

const Button: React.FC<IProps> = (props) => {
  const {
    variant = 'blue',
    classes,
    children,
    className,
    ...buttonProps
  } = props;
  return (
    <button
      className={classNames(
        classes.root,
        classes[`root-${variant}`],
        className,
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

interface IProps
  extends WithStyles<typeof styles>,
    HTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'green' | 'red';
}

export default withStyles(styles)(Button);
