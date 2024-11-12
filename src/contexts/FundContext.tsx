import React, {
    useState,
    createContext,
    useContext,
    useMemo,
  } from 'react';
import { Domicile, Fund, data as originalData, Regions} from '../data'


type iFundContext = {
    updateSelectedRegions: (regions: Regions[]) => void;
    currentSelectedRegions: () => Regions[];
    currentSelectedDomicile: () => Domicile[];
    updateSelectedDomicile: (domicile: Domicile[]) => void;
    data: Fund[];
    handleSearch: (value: string) => void;
  };
  


export const FundContext = createContext<iFundContext>(undefined!);

export const FundProvider = ({ fundData, children }: { fundData: Fund[], children: React.ReactNode }) => {

    const [selectedRegions, setSelectedRegions] = useState<Regions[]>([]);
    const [selectedDomicile, setSelectedDomicile] = useState<Domicile[]>([]);
    const [searchValue, setSearchValue] = useState('');


    const updatedDate = useMemo(()=> {
        let data = fundData;

        if(selectedDomicile.length){
            data = data.filter((fund) => selectedDomicile.includes(fund.domicile));
        } 

        if(selectedRegions.length){
            data = data.filter((fund) => selectedRegions.includes(fund.region))
        }

        if(searchValue){
            const searchString = searchValue.toLowerCase();
            data = originalData.filter(fund => {
                return (
                   ( fund.fundname && fund.fundname.toLowerCase().includes(searchString)) ||
                   ( fund.isin && fund.isin.toLowerCase().includes(searchString)) || 
                   ( fund.benchmark && fund.benchmark.toLowerCase().includes(searchString)) || 
                   ( fund.manager && fund.manager.toLowerCase().includes(searchString)) 
                )
            })
        }

        return data;
        
    },[selectedDomicile, selectedRegions, searchValue])

    const updateSelectedRegions = (regions: Regions[]) => {
        setSelectedRegions(regions)
    };

    const currentSelectedRegions = () => selectedRegions;

    const currentSelectedDomicile = () => selectedDomicile;

    const updateSelectedDomicile = (domiciles: Domicile[]) => {
        setSelectedDomicile(domiciles)
    }

    const handleSearch = (value: string) => {
        setSearchValue(value)
    }


    return (
    <FundContext.Provider value={{updateSelectedRegions, currentSelectedRegions, updateSelectedDomicile, currentSelectedDomicile, handleSearch, data: updatedDate}}>
        {children}
    </FundContext.Provider>
    )

};


export const useFunds = () => {
    const context = useContext(FundContext);
    if(context === undefined){
        throw new Error('UseAuth must be used within an FundProvider');
    }
    return context;
}
