import React, { act, FC } from 'react';
import { FundContext, FundProvider, useFunds } from './FundContext';
import { render, renderHook, screen } from '@testing-library/react';
import {data} from '../data'

describe('FundContext', () => {

  it('throws Error when not used within context provider', async () => {

    const consoleError = console.error;
    console.error = jest.fn();

    const FakeComponet: FC = () => {
        const { currentSelectedRegions} = useFunds();
        return <div> <h1> Fund Center </h1></div>
    }

    const renderFakeComponent = () => render(<FakeComponet />);
    expect(renderFakeComponent).toThrow(
        'UseAuth must be used within an FundProvider'
    )

    console.error = consoleError;
  });

  it('update the context state and return updated domicile list', () => {
    const wrapper = ({ children }: {children: any}) => <FundProvider fundData={[]}>{children}</FundProvider>
    const {result} = renderHook(() => useFunds(), {wrapper} );

    act(() => {
        result.current.updateSelectedDomicile(['London'])
    })

    expect(result.current.currentSelectedDomicile()).toStrictEqual(['London'])
  })


  it('return reduced list of data when selection is updated. ', () => {
    const wrapper = ({ children }: {children: any}) => <FundProvider fundData={data}>{children}</FundProvider>
    const {result} = renderHook(() => useFunds(), {wrapper} );

    expect(result.current.data).toHaveLength(17)

    act(() => {
        result.current.updateSelectedDomicile(['Dublin'])
        result.current.updateSelectedRegions(['Global'])
    })

    expect(result.current.data).toHaveLength(3)
  })

  it('return reduced list of data when search function is filtered by Fund Name', () => {
    const wrapper = ({ children }: {children: any}) => <FundProvider fundData={data}>{children}</FundProvider>
    const {result} = renderHook(() => useFunds(), {wrapper} );

    expect(result.current.data).toHaveLength(17)
    
    act(() => {
        result.current.handleSearch('Vanguard Global Equity Fund')
    })

    expect(result.current.data).toHaveLength(1)
  })

  it('return reduced list of data when search function is filtered by ISIN', () => {
    const wrapper = ({ children }: {children: any}) => <FundProvider fundData={data}>{children}</FundProvider>
    const {result} = renderHook(() => useFunds(), {wrapper} );

    expect(result.current.data).toHaveLength(17)
    
    act(() => {
        result.current.handleSearch('AB1234567891')
    })

    expect(result.current.data).toHaveLength(1)
  })

});
