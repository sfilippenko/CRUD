import createStyles from '@material-ui/core/styles/createStyles';

export default createStyles({
  wrapper: {
    overflow: 'auto',
  },
  actionsWrapper: {
    display: 'flex',
    alignItems: 'center',
    '&>*': {
      marginRight: 28,
      '&:last-child': {
        marginRight: 0,
      },
    },
  },
  deleteIcon: {
    color: '#F4583F',
  },
  editIcon: {
    color: '#666666',
  },
});
