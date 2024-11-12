import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { IconWrapper } from '../IconWrapper';
import { ArrowRight, FileText } from 'react-feather';

type FundProps = {
  fundName: string;
  benchmark: string;
  holdings: string;
  fundSize: string;
  launchDate: string;
};

export const GridFund = ({ fundName, benchmark, holdings, fundSize, launchDate }: FundProps) => {
  return (
    <FundContainer>
      <FundHeader>
        <h2>{fundName} </h2>
        <p>{benchmark} </p>
      </FundHeader>
      <FundContent>
        <table style={{ width: '100%', fontSize: '12px' }}>
          <tr>
            <FundTableHeader>FUND SIZE</FundTableHeader>
            <FundTableHeader>HOLDINGS</FundTableHeader>
            <FundTableHeader>LAUNCH DATE</FundTableHeader>
          </tr>
          <tr>
            <TableData>GBP {fundSize}</TableData>
            <TableData>{holdings}</TableData>
            <TableData>{launchDate}</TableData>
          </tr>
        </table>

        <div style={{ display: 'flex', marginTop: '50px' }}>
          <div style={{ margin: 'auto', marginRight: '5px' }}>
            <FileText size={16} />
          </div>
          <div style={{ flex: 3, fontSize: '12px' }}>
            <p> Monthly portfolio fact sheet</p>
          </div>
          <div style={{ marginLeft: 'auto', margin: 'auto' }}>
            <IconWrapper icon={ArrowRight} iconColor="green" />
          </div>
        </div>
      </FundContent>
    </FundContainer>
  );
};

const FundHeader = styled(Box)`
  background-color: #1e2e50;
  border: 1px solid blue;
  color: white;
  padding: 0 15px;
  height: 160px;
`;
const FundTableHeader = styled.th`
  font-weight: normal;
`;

const FundContent = styled(Box)`
  border-left: 5px solid green;
  padding: 10px 10px;
`;

const FundContainer = styled(Box)`
  flex: 1 1 calc(33% - 20px);
  max-width: calc(33% - 20px);
  background-color: white;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(10px 10px 20px rgba(36, 36, 36, 0.2));
  }
`;

const TableData = styled.td`
  text-align: center;
`;
