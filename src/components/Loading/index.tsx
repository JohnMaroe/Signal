import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .overlayDiv {
    position: absolute;
    top: 0;
    left: 45rem;

    height: 100rem;
    width: 100rem;
    max-height: 100%;
    max-width: 100%;

    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;
    opacity: 0;

    z-index: 1000;

    animation: close-the-curtains 900ms ease forwards;
    animation-delay: 2500ms;
  }

  .fa-signature {
    position: absolute;
    font-size: 18rem;
    color: ${({ theme }) => theme.colors.contrast};

    animation: signal-flip 1200ms ease forwards;
  }

  h1 {
    position: relative;
    font-size: 6.5rem;
    font-family: 'Lobster Two', sans-serif;
    text-decoration: underline ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.contrast};

    transform: rotate(-10deg) translateX(2rem) translateY(0.25rem);
    transition: ease-out;
    opacity: 0;

    animation: show-title 900ms ease-in forwards;
    animation-delay: 1200ms;

    i {
      animation: heart 900ms ease forwards;
      animation-delay: 900ms;

      position: absolute;
      color: ${({ theme }) => theme.colors.background};

      font-size: 2rem;
    }
  }

  section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    .blob1 {
      position: absolute;
      top: 0;
      left: 0;
      filter: drop-shadow(36px -5px 3.5px #3a3b4455);

      width: 115rem;
      height: 92rem;
    }

    .circle {
      position: absolute;
      top: -15rem;
      right: -20rem;
      width: 55rem;
      height: 55rem;
      filter: drop-shadow(-30px 1px 3.5px #3a3b4455);

      background-color: #2c2d2f;
      border-radius: 8rem 50% 50% 50%;
    }

    .wave {
      position: absolute;
      bottom: 0rem;
      filter: drop-shadow(-10px -17px 3.5px #3a3b4455);
    }
  }

  @keyframes show-title {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes show-title-desktop {
    from { opacity: 0; transform: rotate(-500deg); }
    to { opacity: 1; transform: scale(1.4) rotate(-8deg); }
  }

  @keyframes heart {
    0% { opacity: 0; transform: scale(0.3) translateY(-7rem) translateX(-1rem); }
    80% { opacity: 0.8; transform: scale(0.5) translateY(-3rem) translateX(4rem); }
    100% { opacity: 1; transform: scale(1) translateY(0) translateX(0); }
  }

  @keyframes signal-flip {
    from {
      transform: translateX(-35rem) rotate(40deg);
    }
    to {
      transform: translateX(-5rem) translateY(-6rem) rotate(-30deg);
    }
  }

  @keyframes signal-flip-desktop {
    from {
      transform: translateX(-60rem) rotate(40deg);
    }
    to {
      transform: scale(1.45) translateX(-9rem) translateY(-6rem) rotate(-30deg);
    }
  }

  @keyframes close-the-curtains {
    from {
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(2.5);
    }
  }

  @media (min-width: 1000px) {
    .fa-signature {
      animation: signal-flip-desktop 1200ms ease forwards;
    }

    h1 {
      animation: show-title-desktop 500ms ease forwards;
      animation-delay: 800ms;
    }
  }
`;

const screenStates = {
  LANDING: 'LANDING',
  LOADING: 'LOADING',
};
function Loading() {
  const [screen, setScreen] = useState(screenStates.LOADING);

  useEffect(() => {
    setTimeout(() => {
      setScreen(screenStates.LANDING);
    }, 1 * 3250);
  }, []);

  return (
    <Overlay>
      {screen === 'LANDING' && <Redirect to="/landing" />}

      <div className="overlayDiv" />

      <i className="fas fa-signature" />
      <h1>
        Signal
        <i className="fas fa-heart" />
      </h1>

      {window.screen.width > 1000
        && (
        <section>
          <svg className="blob1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#2c2d2f" d="M58.3,-34.2C65.2,-21.8,53.2,1,40.3,23.3C27.4,45.5,13.7,67.3,-5.5,70.4C-24.6,73.6,-49.3,58.1,-57.9,38.3C-66.6,18.4,-59.3,-5.8,-47,-21.4C-34.7,-37,-17.4,-43.8,4.2,-46.3C25.7,-48.7,51.5,-46.6,58.3,-34.2Z" />
          </svg>

          <div className="circle" />

          <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#2c2d2f" fillOpacity="1" d="M0,32L34.3,42.7C68.6,53,137,75,206,106.7C274.3,139,343,181,411,181.3C480,181,549,139,617,149.3C685.7,160,754,224,823,261.3C891.4,299,960,309,1029,272C1097.1,235,1166,149,1234,117.3C1302.9,85,1371,107,1406,117.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
          </svg>
        </section>
        )}
    </Overlay>
  );
}

export default Loading;
