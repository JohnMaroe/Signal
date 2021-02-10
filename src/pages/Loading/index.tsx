import React, { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const screenStates = {
  MAIN: 'MAIN',
  LOADING: 'LOADING',
};
function Loading() {
  const [screenState] = useState(screenStates.LOADING);

  useEffect(() => {
    setTimeout(() => {
      history.push('/landing');
    }, 1 * 3000);
  }, []);

  return (
    <div>

      {screenState === 'LOADING' && history.push('/loading')}

      {screenState === 'MAIN' && history.push('/landing')}

    </div>
  );
}

export default Loading;
