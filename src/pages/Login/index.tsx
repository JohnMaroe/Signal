import React from 'react';
import { Link } from 'react-router-dom';

// Components
import WidgetContainer from '../../components/Widget';
import { SignUp } from '../Landing';
import { Dot } from '../Landing/styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Background from '../../components/Background';

function Login() {
  return (
    <Background>
      <WidgetContainer>
        <WidgetContainer.Image />

        <WidgetContainer.Content>
          <Link to="/landing"><i className="fas fa-level-up-alt" /></Link>

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
              <div>
                <label htmlFor="name">Login</label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Phone, email or username"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </footer>

            <p>
              <label htmlFor="remember">Remember me: </label>
              <input type="checkbox" name="remember" id="remember" />
            </p>

            <Button
              type="submit"
            >
              <Link to="/dashboard">Do it!</Link>
            </Button>
            <SignUp />
          </main>

        </WidgetContainer.Content>
      </WidgetContainer>
    </Background>
  );
}

export default Login;
