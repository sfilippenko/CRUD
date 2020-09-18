import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

export default createMuiTheme({
  breakpoints,
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 700,
    },
  },
  overrides: {
    MuiDialog: {
      paperWidthXs: {
        maxWidth: 462,
      },
      paper: {
        margin: 16,
      },
      paperFullWidth: {
        width: 'calc(100% - 32px)',
      },
    },
    MuiDialogContent: {
      root: {
        padding: 16,
        '&:first-child': {
          paddingTop: 16,
        },
        [breakpoints.up('sm')]: {
          padding: 32,
          '&:first-child': {
            paddingTop: 32,
          },
        },
      },
    },
    MuiDialogActions: {
      root: {
        padding: 0,
        marginTop: 4,
      },
    },
    MuiIconButton: {
      root: {
        padding: 6,
      },
    },
  },
});
