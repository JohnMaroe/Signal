import styled from 'styled-components';

const Button = styled.button`
  outline: 0;
  border: 0;
  width: 80%;

  padding: 1rem;
  margin-bottom: 3rem;
  border-radius: 4px;
  font-size: 1.8rem;

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.secundary};
  cursor: pointer;
`;

export default Button;
