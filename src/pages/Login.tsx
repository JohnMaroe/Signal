import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components
import Loading from '../components/Loading/index';
import WidgetContainer from '../components/Widget';
import Landing, { SignUp } from '../components/Landing';
import { Dot } from '../components/Landing/styles';
import Button from '../components/Button';

import background from '../assets/navybackground.png';

const Background = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${background});
`;

const widgetStates = {
  LOGIN: 'LOGIN',
  LANDING: 'LANDING',
  REGISTER: 'REGISTER',
};
function LoginLogic() {
  const [widgetState, setWidgetState] = useState(widgetStates.LANDING);

  return (
    <Background>

      {widgetState === 'LANDING' && <Landing widgetStates={widgetStates} setWidgetState={setWidgetState} />}

      {widgetState === 'LOGIN' && (
        <WidgetContainer>
          <WidgetContainer.Image />

          <WidgetContainer.Content>
            <i className="fas fa-level-up-alt" />

            <main>
              <header>
                <h1>
                  Let&apos;s sign you in
                  <Dot>.</Dot>
                </h1>

                <h2>Welcome back.</h2>
                <h2>You have been missed!</h2>
              </header>

              <footer>
                <input type="text" placeholder="Phone, email or username" />
                <input type="password" placeholder="Password" />
              </footer>

              <Button type="submit">Do it!</Button>
              <SignUp />
            </main>

          </WidgetContainer.Content>
        </WidgetContainer>
      )}

    </Background>
  );
}

const screenStates = {
  MAIN: 'MAIN',
  LOADING: 'LOADING',
};
function Login() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.MAIN);
    }, 1 * 3000);
  }, []);

  return (
    <div>

      {screenState === 'LOADING' && <Loading />}

      {screenState === 'MAIN' && <LoginLogic />}

    </div>
  );
}

export default Login;
