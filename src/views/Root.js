import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';
import Footer from 'templates/FooterTemplate';
import Widgets from 'templates/WidgetsTemplate';

function Root() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Widgets />
      <Footer />
    </BrowserRouter>
  );
}

export default Root;
