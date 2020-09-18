import createStyles from '@material-ui/core/styles/createStyles';

export default createStyles({
  input: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    border: '1px solid #f2f2f2',
    background: 'white',
    padding: '0 16px',
    outline: 'none',
    '&:disabled': {
      background: '#f2f2f2',
    },
    '&:focus': {
      borderColor: '#39B54A',
    },
  },
});
