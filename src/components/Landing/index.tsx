import React from 'react';

import Button from '../Button';

import svgLanding from '../../assets/svgLanding.svg';
import WidgetContainerLanding, { Dot } from './styles';

interface Test {
  setWidgetState: any,
  widgetStates: any,
}

export function SignUp() {
  return (
    <p className="signup">
      Don&apos;t have an account yet?
      {' '}
      <a href="#">Sign up!</a>
    </p>
  );
}

function Landing({ setWidgetState, widgetStates }: Test) {
  return (
    <WidgetContainerLanding>
      <header>
        <div className="divFlex">
          <div className="contrastCircle" />
          <img src={svgLanding} alt="Landing Page Yatch Icon" />
        </div>

        <div className="description">
          <h2>
            Embark on this journey
            <Dot>.</Dot>
          </h2>
          <h2>
            Find a connection
            <Dot>.</Dot>
          </h2>
          <h2>
            Find a signal
            <Dot>.</Dot>
          </h2>
        </div>
      </header>

      {window.screen.width > 1000
        && (
          <nav>
            <i className="fas fa-signature" />

            <a href="#">About</a>
            <a href="#">Company</a>
            <a href="#">Blog</a>
          </nav>
        )}

      <section>
        <Button type="button" onClick={() => setWidgetState(widgetStates.LOGIN)}>Log in</Button>

        {window.screen.width > 1000
          && (
            <Button
              type="button"
              secondaryButton
              onClick={() => setWidgetState(widgetStates.REGISTER)}
            >
              Register
            </Button>
          )}

        {window.screen.width < 1000 && <SignUp />}
      </section>
    </WidgetContainerLanding>
  );
}

export default Landing;
