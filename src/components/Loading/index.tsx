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
    color: ${({ theme }) => theme.colors.secundary};

    animation: signal-flip 1200ms ease forwards;
  }

  h1 {
    font-size: 6.5rem;
    font-family: 'Lobster Two', sans-serif;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secundary};

    transform: rotate(-10deg) translateX(2rem) translateY(0.25rem);
    opacity: 0;

    animation: show-title 900ms ease-in forwards;
    animation-delay: 1200ms;
  }

  @keyframes show-title {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes signal-flip {
    from {
      transform: translateX(-35rem) rotate(40deg);
    }
    to {
      transform: translateX(-5rem) translateY(-6rem) rotate(-30deg);
    }
  }
`;

function Loading() {
  return (
    <Overlay>
      <i className="fas fa-signature" />
      <h1>Signal</h1>
    </Overlay>
  );
}

export default Loading;
