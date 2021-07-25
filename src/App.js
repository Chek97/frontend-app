import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import { store } from './store/store';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles/theme';
import './styles/styles.scss';

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <AppRouter />
            </ThemeProvider>
        </Provider>
    )
}
