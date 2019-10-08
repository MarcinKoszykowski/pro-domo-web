import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';
import Footer from 'templates/FooterTemplate';
import Widgets from 'templates/WidgetsTemplate';
import Header from 'templates/HeaderTemplate';
import EQ from 'views/EQ';
import PD from 'views/PD';
import PDF from 'views/PDF';

function Root() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/eques-creditum" component={EQ} />
        <Route path="/pd" component={PD} />
        <Route path="/pdf" component={PDF} />
      </Switch>
      <Widgets />
      <Footer />
    </BrowserRouter>
  );
}

export default Root;
