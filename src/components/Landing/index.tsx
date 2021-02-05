import React from 'react';
import styled from 'styled-components';

import WidgetContainer from '../Widget';
import Button from '../Button';

import svgLanding from '../../assets/svgLanding.svg';

interface Test {
  setWidgetState: any,
  widgetStates: any,
}

const WidgetContainerLanding = styled(WidgetContainer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: 10rem;

  color: ${({ theme }) => theme.colors.contrast};
  font-weight: 700;

  img {
    width: 30rem;
    z-index: 1;
  }
  .contrastCircle {
    position: absolute;
    
    border-radius: 50%;
    width: 20rem;
    height: 20rem;
    background-color: rgba(0,0,0,.5);
  }

  .description {
    margin-top: 5rem;
    margin-bottom: 8rem;

    h2 {
      display: flex;
      align-items: baseline;

      font-size: 3rem;
      font-weight: 700;

      &:not(&:last-child) {
        margin-bottom: .5rem;
      }
    }
  }

  section {
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Dot = styled.h1`
  color: ${({ theme }) => theme.colors.background};
  font-size: 5rem;
`;

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
      <div className="contrastCircle" />
      <img src={svgLanding} alt="Landing Page Yatch Icon" />
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

      <section>
        <Button type="button" onClick={() => setWidgetState(widgetStates.MAIN)}>Log in</Button>
        <SignUp />
      </section>
    </WidgetContainerLanding>
  );
}

export default Landing;
