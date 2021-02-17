import styled from 'styled-components';

import WidgetContainer from '../../components/Widget';

const RegisterContent = styled(WidgetContainer.Content)`
  border-radius: .8rem 0 0 .8rem ;
`;

const RegisterImage = styled(WidgetContainer.Image)`
  border-radius: 0 .8rem .8rem 0;
`;

export { RegisterImage, RegisterContent };
