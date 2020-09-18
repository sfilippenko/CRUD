import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

export default createMuiTheme({
  breakpoints,
  typography: {
    fontSize: 14,
    fontFamily: 'Tahoma, Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: 32,
      fontWeight: 700,
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
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
        '&:disabled': {
          opacity: 0.5,
        },
      },
    },
    MuiTableCell: {
      root: {
        border: '1px solid #E6E6E6',
        borderBottom: '1px solid #E6E6E6',
        fontSize: 14,
        padding: '11px 20px',
      },
    },
  },
});
