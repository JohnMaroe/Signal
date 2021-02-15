import styled from 'styled-components';

import WidgetContainer from '../../components/Widget';

const WidgetContainerLanding = styled(WidgetContainer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrast};
  font-weight: 700;
  padding-top: 10rem;

  header {
    .divFlex {
      display: flex;
      align-items: center;
      justify-content: center;

      .contrastCircle {
        position: absolute;
        top: -18rem;
        
        border-radius: 50%;
        width: 46rem;
        height: 46rem;
        background-color: rgba(0,0,0,.5);
      }
      img {
        width: 30rem;
        z-index: 1;
      }
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
  }

  .phone {
    display: none;
  }

  section {
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  // Desktop styles
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 10rem 1fr;
    grid-template-areas: 'nav svg'
                        'phone buttons';
    position: relative;
    overflow: hidden;
    padding-top: 0;

    header {
      .divFlex {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-area: svg;

        transform: scale(1.8) translateX(-8rem);
        position: absolute;
        top: 0;
        right: 0;
        padding: 7rem 0 0 1rem;

        .contrastCircle {
          position: absolute;
          top: 1rem;
          left: 11rem;
          transform: scale(2);
          
          border-radius: 50%;
          width: 20rem;
          height: 20rem;
          background-color: rgba(0,0,0,.5);
        }

        img {
          width: 30rem;
          z-index: 1;
        }
      }
    }

    nav {
      grid-area: nav;

      padding: 3rem;

      i {
        font-size: 6rem;
        transform: rotate(-30deg);
        filter: drop-shadow(-15px 5px 3.5px rgba(0,0,0,0.7));
        animation: icon-shake 1000ms ease infinite;
        animation-play-state: paused;

        &:hover {
          animation-play-state: running;
        }
      }

      a {
        text-decoration: none;
        font-size: 2.3rem;
        display: inline-block;

        &:hover {
          transform: scale(1.25);
          transition: 150ms ease;
        }

        &:nth-child(2) {
          margin-left: 5rem;
        }

        &:not(&:last-child) {
          margin-right: 8rem;
        }
      }
    }

    .description {
      h2 {
        position: absolute;
        transform: scale(1.2);
        &:nth-child(1) {
          top: 19rem;
          right: 58rem;
        }
        &:nth-child(2) {
          top: 38rem;
          right: 41rem;
        }
        &:nth-child(3) {
          top: 45rem;
          right: 13rem;
        }
      }
    }

    .phone {
      position: absolute;
      bottom: 0rem;
      left: -19rem;
      display: block;

      img {
        height: 68rem;

        filter: drop-shadow(-30px 15px 3.5px rgba(0,0,0,0.5));
        animation: phone-move 6000ms ease-in-out infinite;
      }
    }

    section {
      padding-top: 35rem;

      position: absolute;
      bottom: 8rem;
      right: -5.5rem;

      display: flex;
      flex-direction: row;
      align-items: baseline;

      button {
        width: 34rem;
        margin-bottom: 0;
        padding: 1.6rem;
        filter: drop-shadow(-10px 15px 3.5px rgba(0,0,0,0.6));

        .typewriter {
          overflow: hidden;
          white-space: nowrap;
          margin: 0 auto;

          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: .15em;
          animation: typing 2000ms ease forwards;
        }
        
        &:first-child {
          margin-right: 8rem;
        }
      }
    }
  }

  @keyframes phone-move {
    0% { transform: translateY(-1rem); }
    50% { transform: translateY(1rem); }
    100% { transform: translateY(-1rem); }
  }

  @keyframes typing {
    from { transform: scale(0); }
    to { transform: scale(1.1); }
  }

  @keyframes icon-shake {
    from, to { transform: rotate(0); }
    33% { transform: rotate(10deg); }
    66% { transform: rotate(-15deg); }
  }
`;

export const Dot = styled.p`
  color: ${({ theme }) => theme.colors.background};
  font-size: 5rem;
`;

export default WidgetContainerLanding;
