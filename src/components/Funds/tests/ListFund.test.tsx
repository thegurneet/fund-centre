import { render, screen } from '@testing-library/react';
import { ListFund } from '../ListFund';
import React from 'react';

describe('List Fund', () => {

  it('renders correctly', () => {

    render(<ListFund  fundName='fundName' benchmark='benchmark' region='region' domicile='domicile' holdings='holdings' fundSize='fundSize' launchDate='10 Nov 2024'/>)
    
    const fundName = screen.findByText('fundName')
    const benchmark = screen.findByText('benchmark')
    const region = screen.findByText('region')
    const domicile = screen.findByText('domicile')
    const holdings = screen.findByText('holdings')
    const fundSize = screen.findByText('fundSize')
    const launchDate = screen.findByText('10 Nov 2024')


    expect(fundName).toBeDefined()
    expect(benchmark).toBeDefined()
    expect(region).toBeDefined()
    expect(domicile).toBeDefined()
    expect(fundName).toBeDefined()
    expect(holdings).toBeDefined()
    expect(fundSize).toBeDefined()
    expect(launchDate).toBeDefined()


  });


});
