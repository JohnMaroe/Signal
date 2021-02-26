import styled from 'styled-components';

import WidgetContainer from '../../components/Widget';

const RegisterContent = styled(WidgetContainer.Content)`
  border-radius: .8rem 0 0 .8rem ;

  form {
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    footer {
      margin-bottom: 0;

      & > div:first-child {
        margin-bottom: 3rem;
      }

      & div > label {
        position: absolute;
        left: 71px;
        top: -14px;
      }
    }

    & > div {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;

      margin-top: 5rem;
      margin-bottom: 3rem;

      p {
        position: absolute;
        left: -10rem;
        top: 0rem;
      }

      input {
        display: none;

        &:checked + label {
          border-radius: 50%;
          border: 5px solid #eee;
        }
      }

      label {
        cursor: pointer;
        width: 8rem;
        height: 8rem;

        transition: border 50ms;

        &:not(:last-child) {
          margin-right: 2rem;
        }

        &:hover {
          border-radius: 50%;
          border: 3px solid #3f434a;
        }

        .other-icon {
          width: 7.8rem;
          height: 7.8rem;

          background-color: #6C63FF;
          border-radius: 50%;

          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 80%;
            height: 80%;
          }
        }
      }
    }
  }

  span {
    font-size: 1rem;
  }
`;

const RegisterImage = styled(WidgetContainer.Image)`
  border-radius: 0 .8rem .8rem 0;
`;

export { RegisterImage, RegisterContent };
