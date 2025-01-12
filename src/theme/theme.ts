import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Replace with your custom primary color
        },
        secondary: {
            main: '#dc004e', // Replace with your custom secondary color
        },
        background: {
            default: '#f5f5f5', // App background color
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export default theme;