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

      <section>
        <Button type="button" onClick={() => setWidgetState(widgetStates.MAIN)}>Log in</Button>
        <SignUp />
      </section>
    </WidgetContainerLanding>
  );
}

export default Landing;
