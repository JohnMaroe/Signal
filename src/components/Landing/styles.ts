import styled from 'styled-components';

import WidgetContainer from '../Widget';

const WidgetContainerLanding = styled(WidgetContainer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: 10rem;

  color: ${({ theme }) => theme.colors.contrast};
  font-weight: 700;

  header {
    .divFlex {
      display: flex;
      align-items: center;
      justify-content: center;

      .contrastCircle {
        position: absolute;
        
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

  section {
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'left right';

    position: relative;
    overflow: hidden;

    .divFlex {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-area: right;

      transform: scale(1.8) translateX(-8rem);
      position: absolute;
      top: 0;
      right: 0;

      .contrastCircle {
        position: absolute;
        top: -6rem;
        left: 10rem;
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

    section {
      width: 35%;
      grid-area: left;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Dot = styled.p`
  color: ${({ theme }) => theme.colors.background};
  font-size: 5rem;
`;

export default WidgetContainerLanding;
