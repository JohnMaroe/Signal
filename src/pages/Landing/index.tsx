import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';

import svgLanding from '../../assets/svgLanding.svg';
import GalaxyPhone from '../../assets/GalaxyPhone.png';
import WidgetContainerLanding, { Dot } from './styles';
import Background from '../../components/Background';

export function SignUp() {
  return (
    <p className="signup">
      Don&apos;t have an account yet?
      {' '}
      <Link to="/register">Sign up!</Link>
    </p>
  );
}

function Landing() {
  return (
    <Background>
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
              Send a signal
              <Dot>.</Dot>
            </h2>
          </div>
        </header>

        {window.screen.width > 1000
          && (
            <nav>
              <i className="fas fa-signature" />

              <Link to="/about">About</Link>
              <Link to="/company">Company</Link>
              <Link to="/blog">Blog</Link>
            </nav>
          )}

        <div className="phone">
          <img src={GalaxyPhone} alt="Phone" />
        </div>

        <section>
          <Button type="button">
            <Link to="/login">Login</Link>
          </Button>

          {window.screen.width > 1000
            && (
              <Button
                type="button"
                secondaryButton
              >
                <Link to="/register">Register</Link>
              </Button>
            )}

          {window.screen.width < 1000 && <SignUp />}
        </section>
      </WidgetContainerLanding>
    </Background>
  );
}

export default Landing;
