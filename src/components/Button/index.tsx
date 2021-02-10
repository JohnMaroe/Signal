import styled from 'styled-components';

interface ButtonProps {
  secondaryButton?: boolean,
  type: string,
  onClick?(): any,
}

const Button = styled.button<ButtonProps>`
  outline: 0;
  border: 0;
  width: 80%;

  padding: 1rem;
  margin-bottom: 3rem;
  border-radius: 4px;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;

  background-color: ${(props) => (props.secondaryButton
    ? ({ theme }) => theme.colors.primary
    : ({ theme }) => theme.colors.background)};

  color: ${(props) => (props.secondaryButton
    ? ({ theme }) => theme.colors.contrast
    : ({ theme }) => theme.colors.primary)};

  &:hover {
    transform: scale(1.1);
    transition: 150ms ease;
  }

  a {
    text-decoration: none;
    display: block;
    height: 100%;
    width: 100%;
  }
`;

export default Button;
