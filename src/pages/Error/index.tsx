import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Background from '../../components/Background';
import error404 from '../../assets/error404.svg';

const ErrorContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16rem;

  img {
    width: 40rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.wrong};
    font-size: 12rem;
  }

  p {
    position: absolute;
    bottom: -10rem;

    font-size: 2rem;
  }
`;

function Error() {
  return (
    <Background>
      <ErrorContainer>
        <img src={error404} alt="Error 404" />
        <h1>Error</h1>
        <p>Sorry, we&apos;ve got nothing.</p>
        <Link to="landing">Go back</Link>
      </ErrorContainer>
    </Background>
  );
}

export default Error;
