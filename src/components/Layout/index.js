import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
// Components
import { Header } from 'components/Header';
// Styles
import { GlobalStyles, lightTheme, darkTheme } from 'styles/GlobalStyles';
// Hooks
import { UseMetadataQuery } from 'hooks/useMetadataQuery';
// Context
import { ModeContext } from 'context/ModeProvider';

const Layout = ({children}) => {
  const [darkMode] = useContext(ModeContext);
  const data = UseMetadataQuery()
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme }>
      <GlobalStyles/>
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout;