import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppContext from 'context';
import GlobalStyle from 'styled/GlobalStyle';
import { main, faq, form, pp, eq, pd, pdf } from 'data/routes';
import ScrollButton from 'components/ScrollButton/ScrollButton';
import Error from 'components/Error/Error';
import Footer from 'templates/FooterTemplate';
import Widgets from 'templates/WidgetsTemplate';
import Header from 'templates/HeaderTemplate';
import { Main, Form, PD, PDF, EQ, PP, FAQ } from './exportViews';

const Root = () => {
  const [contactIsVisibility, setContactIsVisibility] = useState(false);
  const [loanIsVisibility, setLoanIsVisibility] = useState(false);

  const handleSetContactIsVisibility = bool => setContactIsVisibility(bool);
  const handleSetLoanIsVisibility = bool => setLoanIsVisibility(bool);

  const handleWindowSizeAnimation = animationFunction => {
    if (window.innerHeight > window.outerHeight) {
      animationFunction();
    }
  };

  const contextElement = {
    contactIsVisibility,
    loanIsVisibility,
    handleSetContactIsVisibility,
    handleSetLoanIsVisibility,
    handleWindowSizeAnimation,
  };

  return (
    <AppContext.Provider value={contextElement}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path={main} component={Main} />
          <Route path={faq} component={FAQ} />
          <Route path={form} component={Form} />
          <Route path={pp} component={PP} />
          <Route path={eq} component={EQ} />
          <Route path={pd} component={PD} />
          <Route path={pdf} component={PDF} />
          <Route component={Error} />
        </Switch>
        <Widgets />
        <Footer />
        <ScrollButton />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Root;
