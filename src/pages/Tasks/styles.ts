import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';

export default (theme: Theme) =>
  createStyles({
    titleWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    [theme.breakpoints.up('sm')]: {
      titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },
  });
