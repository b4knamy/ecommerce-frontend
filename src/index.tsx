// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App.tsx';
import theme from './settings/styles/pattern.ts';
import GlobalStyle from './settings/styles/global.ts';
import { AuthContextProvider } from './context/authContext/context/provider.tsx';
import { CartContextProvider } from './context/cartContext/context/provider.tsx';
import { SettingsContextProvider } from './context/settingsContext/context.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <SettingsContextProvider>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </SettingsContextProvider>
  </>,
);
