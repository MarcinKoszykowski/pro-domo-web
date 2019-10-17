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
import AppContext from 'context';

function Root() {
  const isInternetExplorer = false || !!document.documentMode;
  const { addEventListener, removeEventListener } = window;

  const [scrollButton, setScrollButton] = useState(false);
  const [mapIsVisibility, setMapIsVisibility] = useState(false);
  const [loanIsVisibility, setLoanIsVisibility] = useState(false);

  const toggleScrollButton = () => {
    const { scrollY } = window;
    if (scrollY > 400) {
      setScrollButton(true);
    } else {
      setScrollButton(false);
    }
  };

  const handleEventListener = () => {
    addEventListener('scroll', toggleScrollButton);
    addEventListener('load', toggleScrollButton);
  };

  const elementInViewport = (element, number) => {
    const { pageYOffset, innerHeight } = window;
    const { offsetTop } = element;
    return offsetTop * number < pageYOffset + innerHeight;
  };

  const addAnimation = (valueReference, number, setVisibilityFunction) => {
    const { current } = valueReference;

    if (elementInViewport(current, number)) {
      setVisibilityFunction(true);
    }
  };

  const handleSetMapIsVisibility = bool => setMapIsVisibility(bool);
  const handleSetLoanIsVisibility = bool => setLoanIsVisibility(bool);

  const handleAddEventListener = animationFunction => {
    addEventListener('scroll', animationFunction);
    addEventListener('resize', animationFunction);
    addEventListener('load', animationFunction);
  };

  const handleRemoveEventListener = animationFunction => {
    removeEventListener('scroll', animationFunction);
    removeEventListener('resize', animationFunction);
    removeEventListener('load', animationFunction);
  };

  const handleWindowSizeAnimation = animationFunction => {
    const { innerHeight, outerHeight } = window;
    if (innerHeight > outerHeight) {
      animationFunction();
    }
  };

  const scrollButtonEffect = useCallback(handleEventListener, [scrollButton]);
  const contextElement = {
    mapIsVisibility,
    loanIsVisibility,
    handleSetMapIsVisibility,
    handleSetLoanIsVisibility,
    handleAddEventListener,
    handleRemoveEventListener,
    addAnimation,
    handleWindowSizeAnimation,
  };

  useEffect(() => scrollButtonEffect(), [scrollButtonEffect]);

  const { main, faq, form, pp, eq, pd, pdf } = routes;
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
        {scrollButton && <ScrollButton />}
        {isInternetExplorer && <IE />}
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default Root;
