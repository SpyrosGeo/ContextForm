import React from 'react';
import NavBar from './NavBar';
import Form from './Form';
import PageContent from './PageContent';
import {ThemeProvider} from './Contexts/ThemeContext';
import {LanguageProvider} from './Contexts/LanguageContext';
function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
    <PageContent>
        <NavBar/>
        <Form/>
    </PageContent>
    </LanguageProvider>
    </ThemeProvider>

  );
}

export default App;
