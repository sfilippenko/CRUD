import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import styles from './styles';

const Input: React.FC<IProps> = (props) => {
  const { onChange, classes, className, disabled, ...inputProps } = props;
  return (
    <input
      type="text"
      className={classNames(classes.input, className)}
      onChange={disabled ? undefined : onChange}
      disabled={disabled}
      {...inputProps}
    />
  );
};

export interface IPassedProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
  value?: string;
  className?: string;
}

interface IProps extends WithStyles<typeof styles>, IPassedProps {}

export default withStyles(styles)(Input);
