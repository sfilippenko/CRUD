import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './styles';

const Button: React.FC<IProps> = (props) => {
  const {
    variant = 'primary',
    classes,
    children,
    className,
    type,
    onClick,
    disabled,
    to,
  } = props;
  const commonProps = {
    onClick: disabled ? undefined : onClick,
    className: classNames(
      classes.root,
      classes[`root-${variant}`],
      { [classes.rootDisabled]: disabled },
      className,
    ),
  };
  if (to) {
    return (
      <Link to={to} {...commonProps} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }
  return (
    <button {...commonProps} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

interface IProps extends WithStyles<typeof styles> {
  variant?: 'primary' | 'secondary' | 'error';
  onClick?: () => void;
  type?: 'submit' | 'button';
  className?: string;
  disabled?: boolean;
  to?: string;
}

export default withStyles(styles)(Button);
