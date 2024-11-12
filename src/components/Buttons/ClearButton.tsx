import React from 'react';
import { X } from 'react-feather';
import styled from 'styled-components';

export const ClearAll = ({ onClick }: { onClick: () => void }) => {
  return (
    <GridButton onClick={onClick}>
      <X />
      <ButtonText> Clear all </ButtonText>
    </GridButton>
  );
};

const GridButton = styled.button`
  display: flex;
  background-color: #aa4c02;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  color: white;
`;
const ButtonText = styled.span`
  padding: 8px;
`;
