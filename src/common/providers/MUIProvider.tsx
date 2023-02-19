import { ReactNode, FC } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
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
