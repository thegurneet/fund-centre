import React from 'react';
import { ArrowRightCircle } from 'react-feather';
import styled from 'styled-components';

export const ArrowIcon = () => {
  return (
    <IconContainer>
      <StyledIcon size={48} />
    </IconContainer>
  );
};

const IconContainer = styled.div`
  margin: auto;
  display: block;
  max-width: 50px;
`;

const StyledIcon = styled(ArrowRightCircle)`
  color: green;
  float: right;
  max-width: 60px;
  stroke-width: 1;
`;
