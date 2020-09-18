import { Theme } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';

export default (theme: Theme) =>
  createStyles({
    root: {
      fontSize: theme.typography.fontSize,
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      background: '#fff',
      borderRadius: 4,
      outline: 'none',
      padding: '10px 40px',
      border: '1px solid transparent',
      cursor: 'pointer',
      transition: 'all 200ms',
    },
    'root-primary': {
      borderColor: '#39B54A',
      '&:hover,&:focus': {
        background: '#39B54A',
        color: '#fff',
        borderColor: '#39B54A',
      },
    },
    'root-error': {
      borderColor: '#FF0000',
      '&:hover,&:focus': {
        background: '#FF0000',
        color: '#fff',
        borderColor: '#FF0000',
      },
    },
    rootDisabled: {
      pointerEvents: 'none',
    },
  });
