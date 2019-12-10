import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyle.js';

import { Chart } from './components';

const App = () => {
  return(
    <React.Fragment>
      <GlobalStyle />
      <Chart />
    </React.Fragment>
  )
}

ReactDOM.render( <App /> , document.getElementById('earnings'))
