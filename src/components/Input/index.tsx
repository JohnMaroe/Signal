import React from 'react';
import styled from 'styled-components';

interface InputProps {
  type: string;
  placeholder: string;
  id: string;
}

const InputType = styled.input`
  width: 75%;
  padding: 1.8rem;
  border: 2px solid #eee4;
  border-radius: 1rem;
  outline: none;

  background-color: ${({ theme }) => theme.colors.primary};

  &:first-child {
    margin-bottom: 2.5rem;
  }

  &::placeholder {
    color: #eee5;
  }
`;

function Input({
  type,
  placeholder,
  id,
}: InputProps) {
  return (
    <InputType id={id} type={type} placeholder={placeholder} />
  );
}

export default Input;
