import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { IPassedProps as IInputProps } from '../Input';
import styles from './styles';

const FormElement: React.FC<IProps> = (props) => {
  const { Component, title, error, classes, ...inputProps } = props;
  return (
    <div>
      <div className={classes.title}>{title}</div>
      <Component {...inputProps} />
      <div className={classes.error}>{error}</div>
    </div>
  );
};

interface IProps extends IInputProps, WithStyles<typeof styles> {
  Component: React.ComponentType<IInputProps>;
  title: string;
  error?: string;
}

export default withStyles(styles)(FormElement);
