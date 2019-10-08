import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';
import Footer from 'templates/FooterTemplate';
import Widgets from 'templates/WidgetsTemplate';
import Header from 'templates/HeaderTemplate';
import EQ from 'views/EQ';

function Root() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/eques-creditum" component={EQ} />
      </Switch>
      <Widgets />
      <Footer />
    </BrowserRouter>
  );
}

export default Root;
