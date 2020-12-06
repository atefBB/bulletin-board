// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-dom' or its correspondin... Remove this comment to see the full error message
import ReactDOM from 'react-dom';
import './index.css';
// @ts-expect-error ts-migrate(6142) FIXME: Module './App' was resolved to '/media/atef/C0B2BF... Remove this comment to see the full error message
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <React.StrictMode>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
