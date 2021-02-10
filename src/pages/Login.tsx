import React from 'react';

// Components
import WidgetContainer from '../components/Widget';
import { SignUp } from './Landing';
import { Dot } from './Landing/styles';
import Button from '../components/Button';
import Background from '../components/Background';

function Login() {
  return (
    <Background>
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
    </Background>
  );
}

export default Login;
