import styled from 'styled-components';

const WidgetContainer: any = styled.main`
  width: 100%;
  height: 100%;

  box-shadow: 0 0 1.5rem 1rem #121213;

  .signup {
    font-size: 1.2rem;
    a {
      color: ${({ theme }) => theme.colors.background};
    }
  }

  @media (min-width: 1000px) {
    width: 140rem;
    height: 80rem;
    transform: scale(0.86);
    display: flex;
    border-radius: .8rem;
  }
`;

WidgetContainer.Content = styled.section`
  width: 100%;
  height: 100%;

  border-radius: 0 .8rem .8rem 0;
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.secondary};

  i {
    position: absolute;
    left: 1.5rem;
    top: 1.5rem;
    font-size: 3rem;
    transform: rotate(-90deg);
    cursor: pointer;
  }

  main {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header {
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: center;
      align-items: center;

      margin-bottom: 8rem;

      h1 {
        font-size: 8.5rem;
        display: flex;
        align-items: baseline;
        margin-bottom: 1rem;

        span {
          font-size: 7rem;
        }
      }
      h2 {
        font-size: 3rem;
      }
    }

    footer {
      width: 100%;
      height: 14rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      margin-bottom: 12rem;

      div {
        width: 75%;
        height: 100%;
        
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &:first-child {
          margin-bottom: 4rem;
        }

        label {
          position: absolute;
          left: 80px;
          top: -14px;
        }
      }
    }
  }

  @media (min-width: 1000px) {
    height: 100%;
    width: 85rem;
  }
`;

WidgetContainer.Image = styled.div`
  background: url('https://images.unsplash.com/photo-1612344801731-e58ec98a34bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80');
  display: none;
  height: 100%;
  width: 55rem;
  
  border-radius: .8rem 0 0 .8rem;

  @media (min-width: 1000px) {
    display: block;
  }
`;

export default WidgetContainer;
