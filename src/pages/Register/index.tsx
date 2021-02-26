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
import other from '../../assets/other.png';

function Register() {
  function onSubmitForm(e: any) {
    e.preventDefault();

    console.log('hi');
  }

  return (
    <Background>
      <WidgetContainer>
        <RegisterContent>
          <Link to="/landing"><i className="fas fa-level-up-alt" /></Link>

          <main>
            <header>
              <h1>
                It&apos;s time
                <Dot>.</Dot>
              </h1>

              <h2>Joining us?</h2>
              <h2>Hope you enjoy!</h2>
            </header>

            <form onSubmit={(e) => onSubmitForm(e)}>
              <footer>
                <div>
                  <label htmlFor="name">Login</label>
                  <Input id="name" type="text" placeholder="Phone, email or username" />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <Input id="password" type="password" placeholder="Password" />
                </div>
              </footer>

              <div>
                <p>Choose gender:</p>

                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male" title="Male">
                  <img src={male} alt="male icon" width={75} />
                </label>

                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female" title="Female">
                  <img src={female} alt="female icon" width={75} />
                </label>

                <input type="radio" id="other" name="gender" value="other" />
                <label htmlFor="other" title="Other">
                  <div className="other-icon"><img src={other} alt="other gender icon" /></div>
                </label>
              </div>

              <Button type="submit">Do it!</Button>
            </form>

            <span>
              By signing up, you agree to our Terms , Data Policy and Cookies Policy
              <Dot>.</Dot>
            </span>
          </main>
        </RegisterContent>

        <RegisterImage />
      </WidgetContainer>
    </Background>
  );
}

export default Register;
