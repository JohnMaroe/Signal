import React from 'react';
import { Link } from 'react-router-dom';

// Components
import WidgetContainer from '../../components/Widget';
import { RegisterImage, RegisterContent } from './styles';
import { Dot } from '../Landing/styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Background from '../../components/Background';

import female from '../../assets/female.svg';
import male from '../../assets/male.svg';

function Register() {
  return (
    <Background>
      <WidgetContainer>
        <RegisterContent>
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
              <form>
                <p>
                  <label htmlFor="eu">Username</label>
                  <Input id="eu" type="text" placeholder="Phone, email or username" />
                </p>

                <p>
                  <label htmlFor="eu2">Password</label>
                  <Input id="eu2" type="password" placeholder="Password" />
                </p>

                <p>
                  <img src={female} alt="female icon" width={75} />
                  <img src={male} alt="male icon" width={75} />
                </p>
              </form>
            </footer>

            <Button type="submit">Do it!</Button>
          </main>
        </RegisterContent>

        <RegisterImage />
      </WidgetContainer>
    </Background>
  );
}

export default Register;
