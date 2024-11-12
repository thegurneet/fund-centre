import React from 'react';
import { Grid } from 'react-feather';
import styled from 'styled-components';
import { IconWrapper } from '../IconWrapper';

type ButtonProps = {
  onClick: () => void;
  selected: boolean;
};

export const GridViewButton = ({ onClick, selected = false }: ButtonProps) => {
  return (
    <GridButton selected={selected} onClick={onClick}>
      <IconWrapper icon={Grid} fill={true} />
      <ButtonText selected={selected}> Grid View </ButtonText>
    </GridButton>
  );
};

const GridButton = styled.button<{ selected: boolean }>`
  display: flex;
  border: ${(props) => (props.selected ? '1px solid green' : '1px solid grey')};
  align-items: center;
  justify-content: center;
  border-radius: 120px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0.5rem 0.75rem;
`;
const ButtonText = styled.span<{ selected: boolean }>`
  color: ${(props) => (props.selected ? 'black' : 'grey')};
  padding: 8px;
`;
