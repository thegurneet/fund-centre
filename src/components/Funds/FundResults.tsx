import React, { useState } from 'react';
import { Box } from '@mui/material';
import { ListFund } from './ListFund';
import { FundResultsTitles } from './FundResultTitles';
import { GridFund } from './GridFund';
import { GridViewButton } from '../Buttons/GridViewButton';
import { ListViewButton } from '../Buttons/ListViewButton';
import { formatDateFromUnix } from '../../utils/dateFormatter';
import { styled } from 'styled-components';
import { useFunds } from '../../contexts/FundContext';
import { SearchBar } from './SearchBar';

export const FundResults = () => {
  const [currentView, setView] = useState<'list' | 'grid'>('list');
  const { data, handleSearch } = useFunds();

  return (
    <div style={{ margin: '25px' }}>
      <Box display={'flex'} gap={25} marginBottom={'50px'}>
        <div style={{ flex: 1 }}>
          <SearchBar onChangeHandler={handleSearch} />
        </div>
        <div style={{ display: 'flex', marginLeft: 'auto' }}>
          <GridViewButton selected={currentView === 'grid'} onClick={() => setView('grid')} />
          <ListViewButton selected={currentView === 'list'} onClick={() => setView('list')} />
        </div>
      </Box>

      {currentView === 'list' ? (
        <Box>
          <FundResultsTitles />
          {data.flatMap((fund, index) => {
            return (
              <ListFund
                key={`${index}-${fund.fundname.replace(/ /g, '')}`}
                fundName={fund.fundname}
                benchmark={fund.benchmark}
                domicile={fund.domicile}
                region={fund.region}
                holdings={fund.holdings}
                fundSize={fund.fundsize}
                launchDate={formatDateFromUnix(fund.launchdate)}
              />
            );
          })}
        </Box>
      ) : (
        <GridBox style={{ display: 'flex' }}>
          {data.flatMap((fund, index) => {
            return (
              <GridFund
                key={`${index}-${fund.fundname.replace(/ /g, '')}`}
                fundName={fund.fundname}
                benchmark={fund.benchmark}
                holdings={fund.holdings}
                fundSize={fund.fundsize}
                launchDate={formatDateFromUnix(fund.launchdate)}
              />
            );
          })}
        </GridBox>
      )}
    </div>
  );
};

const GridBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
