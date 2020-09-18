import { Theme } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';

export default (theme: Theme) =>
  createStyles({
    title: {
      marginBottom: 24,
    },
    button: {
      marginTop: 12,
    },
    [theme.breakpoints.up('sm')]: {
      form: {
        maxWidth: 400,
      },
    },
  });
