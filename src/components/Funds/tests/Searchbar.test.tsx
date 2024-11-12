import { render, screen } from '@testing-library/react';
import { SearchBar } from '../SearchBar';
import React from 'react';

describe('SearchBar', () => {

  it('renders correctly', () => {

    render(<SearchBar onChangeHandler={() => jest.fn()} />)
    const searchBar = screen.getByTestId("fund-search");

    expect(searchBar).toBeInTheDocument()
  })
});
