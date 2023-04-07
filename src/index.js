import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';

const THEME = createTheme({
    typography: {
        "fontFamily": `'DM Sans', sans-serif`,
    }
});

ReactDOM.render(<ThemeProvider theme={THEME}><App /></ThemeProvider>, document.getElementById('root'));
