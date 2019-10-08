import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';
import routes from 'data/routes';
import ScrollButton from 'components/molecules/ScrollButton';
import IE from 'components/molecules/IE';
import Error from 'components/organisms/Error';
import Footer from 'templates/FooterTemplate';
import Widgets from 'templates/WidgetsTemplate';
import Header from 'templates/HeaderTemplate';
import EQ from 'views/EQ';
import PD from 'views/PD';
import PDF from 'views/PDF';
import PP from 'views/PP';

function Root() {
  const isInternetExplorer = false || !!document.documentMode;

  const [scrollButton, setScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setScrollButton(true);
    } else {
      setScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path={routes.eq} component={EQ} />
        <Route path={routes.pd} component={PD} />
        <Route path={routes.pdf} component={PDF} />
        <Route path={routes.pp} component={PP} />
        <Route component={Error} />
      </Switch>
      <Widgets />
      <Footer />
      {isInternetExplorer && <IE />}
      {scrollButton && <ScrollButton />}
    </BrowserRouter>
  );
}

export default Root;
