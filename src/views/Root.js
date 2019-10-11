import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';
import routes from 'data/routes';
import ScrollButton from 'components/molecules/ScrollButton';
import IE from 'components/molecules/IE';
import Error from 'components/organisms/Error';
import Footer from 'templates/FooterTemplate';
import Widgets from 'templates/WidgetsTemplate';
import Header from 'templates/HeaderTemplate';
import Form from 'views/Form';
import EQ from 'views/EQ';
import PD from 'views/PD';
import PDF from 'views/PDF';
import PP from 'views/PP';
import Main from 'views/Main';
import FAQ from 'views/FAQ';

function Root() {
  const isInternetExplorer = false || !!document.documentMode;

  const [scrollButton, setScrollButton] = useState(false);

  const toggleScrollButton = () => {
    if (window.scrollY > 400) {
      setScrollButton(true);
    } else {
      setScrollButton(false);
    }
  };

  const handleEventListener = () => {
    window.addEventListener('scroll', toggleScrollButton);
    window.addEventListener('load', toggleScrollButton);
  };

  const scrollButtonEffect = useCallback(handleEventListener, [scrollButton]);

  useEffect(() => scrollButtonEffect(), [scrollButtonEffect]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path={routes.main} component={Main} />
        <Route path={routes.faq} component={FAQ} />
        <Route path={routes.form} component={Form} />
        <Route path={routes.pp} component={PP} />
        <Route path={routes.eq} component={EQ} />
        <Route path={routes.pd} component={PD} />
        <Route path={routes.pdf} component={PDF} />
        <Route component={Error} />
      </Switch>
      <Widgets />
      <Footer />
      {scrollButton && <ScrollButton />}
      {isInternetExplorer && <IE />}
    </BrowserRouter>
  );
}

export default Root;
