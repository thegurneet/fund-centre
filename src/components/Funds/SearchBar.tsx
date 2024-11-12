import { TextField } from '@mui/material';
import React from 'react';

type SearchBarProps = {
  onChangeHandler: (value: string) => void;
};

export const SearchBar = ({ onChangeHandler }: SearchBarProps) => {
  return (
    <TextField
      data-testid="fund-search"
      label="Search by fund name, ISIN, benchmark, manager"
      variant="outlined"
      style={{ backgroundColor: 'white' }}
      fullWidth
      onChange={(event) => onChangeHandler(event.target.value)}
    />
  );
};
