import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';
import Footer from 'templates/FooterTemplate';
import Widgets from 'templates/WidgetsTemplate';
import Header from 'templates/HeaderTemplate';

function Root() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Widgets />
      <Footer />
    </BrowserRouter>
  );
}

export default Root;
