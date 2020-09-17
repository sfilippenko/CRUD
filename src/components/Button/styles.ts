import createStyles from '@material-ui/core/styles/createStyles';

export default createStyles({
  root: {
    background: '#fff',
    borderRadius: 4,
    outline: 'none',
    padding: '10px 40px',
    border: '1px solid transparent',
    cursor: 'pointer',
    transition: 'all 200ms',
  },
  'root-green': {
    borderColor: '#39B54A',
    '&:hover,&:focus': {
      background: '#39B54A',
      color: '#fff',
      borderColor: '#39B54A',
    },
  },
});
