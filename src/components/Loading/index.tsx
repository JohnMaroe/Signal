import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  align-items: center;
  justify-content: center;

  i {
    position: absolute;
    font-size: 18rem;
    color: ${({ theme }) => theme.colors.secondary};

    animation: signal-flip 1200ms ease forwards;
  }

  h1 {
    font-size: 6.5rem;
    font-family: 'Lobster Two', sans-serif;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secondary};

    transform: rotate(-10deg) translateX(2rem) translateY(0.25rem);
    transition: ease-out;
    opacity: 0;

    animation: show-title 900ms ease-in forwards;
    animation-delay: 1200ms;
  }

  svg {
    position: absolute;
    bottom: 0;
  }

  @keyframes show-title {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes show-title-desktop {
    from { opacity: 0; transform: rotate(-500deg); }
    to { opacity: 1; transform: scale(1.4) rotate(-8deg); }
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

  @media (min-width: 1000px) {
    i {
      animation: signal-flip-desktop 1200ms ease forwards;
    }

    h1 {
      animation: show-title-desktop 500ms ease forwards;
      animation-delay: 800ms;
    }
  }
`;

function Loading() {
  return (
    <Overlay>
      <i className="fas fa-signature" />
      <h1>Signal</h1>

      {window.screen.width > 1000
        && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#8a3e3e" fillOpacity="1" d="M0,32L34.3,42.7C68.6,53,137,75,206,106.7C274.3,139,343,181,411,181.3C480,181,549,139,617,149.3C685.7,160,754,224,823,261.3C891.4,299,960,309,1029,272C1097.1,235,1166,149,1234,117.3C1302.9,85,1371,107,1406,117.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
        </svg>
        )}
    </Overlay>
  );
}

export default Loading;
