import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

export const FundResultsTitles = () => {
  return (
    <Box borderBottom={'1px solid grey'} display={'flex'} paddingBottom={'15px'}>
      <FundText style={{ flex: 3, textAlign: 'start' }}>Fund name / Benchmark</FundText>

      <FundText style={{ flex: 1 }}>Domicile</FundText>

      <FundText style={{ textAlign: 'start' }}>Region</FundText>

      <FundText style={{ textAlign: 'end' }}>Holdings</FundText>

      <FundText style={{ flex: 1 }}>Fund size</FundText>

      <FundText style={{ flex: 1 }}>Launch date</FundText>

      <Box width={'60px'} />
    </Box>
  );
};

const FundText = styled.div`
  flex: 1;
  text-align: center;
  margin: auto;
  font-style: italic;
`;
