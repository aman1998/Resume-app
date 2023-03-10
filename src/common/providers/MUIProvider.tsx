import { ReactNode, FC } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#d0f3fd',
      main: '#307DF0',
      dark: '#2D75E0;',
      contrastText: '#fff',
    },
    // secondary: {
    //   light: '#ff7961',
    //   main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
  },
  // typography: {
  //   fontFamily: 'Montserrat, sans-serif',
  // },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          width: 'unset',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          flexGrow: 'unset',
        },
      },
    },
  },
});

const MaterialUIProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default MaterialUIProvider;
