import styled from 'styled-components';

import background from '../../assets/navybackground.png';

const Background = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${background});
`;

export default Background;
