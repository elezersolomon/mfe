import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import { StylesProvider,createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';

const generateclassname = createGenerateClassName({
  productionPrefix = 'co'
})
export default () => {
  return (
    <div>
      <BrowserRouter>
      <StylesProvider class = {generateclassname}>
      <h1></h1>
      <hr />
      <Header />
      <MarketingApp />
      </StylesProvider>
      </BrowserRouter>
      
    </div>
  );
};
