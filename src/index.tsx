import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppRouter from './AppRouter';
import configureStore from './configureStore';
import theme from './styles/theme';
import Layout from './components/Layout';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Layout>
        <AppRouter />
      </Layout>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
