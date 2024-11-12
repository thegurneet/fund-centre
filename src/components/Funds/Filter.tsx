import { Checkbox } from "@mui/material"
import React, { useEffect, useState } from "react"
import { ClearAll } from "../Buttons/ClearButton"
import { useFunds } from "../../contexts/FundContext"
import { Domicile, Regions } from "../../data"


type ReigonNames = 'UK Equities' | 'Global Equities'| 'European Equities' | 'Emerging Marketing Equities' | 'Asian Equities'
type DomicileNames = 'Dublin (Irish ICAV)' | 'London (UK OEIC)'

type RegionMapProps = {
    [key in Regions]: ReigonNames
}

type DomicileNamesProps = {
    [key in Domicile]: DomicileNames
}

const RegionMap: RegionMapProps = {
    'UK': 'UK Equities',
    'Global': 'Global Equities',
    'Europe': 'European Equities',
    'Emerging': 'Emerging Marketing Equities',
    'Asia': 'Asian Equities'
} as const;

const DomicileMap: DomicileNamesProps = {
    'Dublin': 'Dublin (Irish ICAV)',
    'London': 'London (UK OEIC)',
}

export const Filter = () => {

    const [clearFilters, setClearFilters] = useState(false);

    const { currentSelectedRegions, updateSelectedRegions, currentSelectedDomicile, updateSelectedDomicile } = useFunds()


    const handleRegionSelect = (value: string) => {
        const region = value as Regions;
        const currentRegions = currentSelectedRegions()

        const containsValue = currentRegions.includes(region)

        if(containsValue){
            const updatedRegions = currentRegions.filter((currentRegion) => currentRegion !== region);
            updateSelectedRegions([...updatedRegions])
        } else {
            updateSelectedRegions([...currentRegions,region ])
        }

    }

    const handleDomicileSelect = (value: string) => {
        const domicile = value as Domicile;

        const currentDomiciles = currentSelectedDomicile();
        
        const containsValue = currentDomiciles.includes(domicile);

        if(containsValue) {
            const updatedDomiciles = currentDomiciles.filter((currentDomicile) => currentDomicile !== domicile);
            updateSelectedDomicile([...updatedDomiciles])
        } else {
            updateSelectedDomicile([...currentDomiciles, domicile])
        }

    }

    const handleClearAll = () => {
        updateSelectedRegions([]);
        updateSelectedDomicile([]);
    }


    const regions: Regions[] = ['UK' , 'Global' ,  'Europe' ,  'Emerging' , 'Asia']
    const domiciles: Domicile[] = ['Dublin', 'London']



    useEffect(() => {

        if(!currentSelectedDomicile().length && !currentSelectedRegions().length){
            setClearFilters(true);
        } else {
            setClearFilters(false)
        }

    },[currentSelectedRegions(), currentSelectedDomicile()])

    return (
        <div style={{margin: '25px'}}>


            <div style={{flex: 1}}>
                <div style={{display: 'flex' }}>
                    <div style={{flex: 1}}>
                        <h3> Filter </h3>
                    </div>
                    {
                        (!!currentSelectedRegions().length || !!currentSelectedDomicile().length) && (
                         <div style={{flex: 1}}>
                            <ClearAll onClick={handleClearAll}/>
                        </div>
                        )
                    }

                </div>
            </div>

            <div style={{flex: 1}}>
            <h3> Region </h3>
                <div>
                    <ul style={{listStyle: 'none', padding: 0}}>
                        {regions.map((region,index) => (
                            <CheckBoxWithLabel key={`${region}-${index}`} label={RegionMap[region]} filterValue={region} onChange={handleRegionSelect} clear={clearFilters}/>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3> Domicile </h3>
                    <ul style={{listStyle: 'none', padding: 0}}>
                        {domiciles.map((domicile,index) => (
                           <CheckBoxWithLabel key={`${domicile}-${index}`} label={DomicileMap[domicile]} filterValue={domicile} onChange={handleDomicileSelect} clear={clearFilters}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )

}


const CheckBoxWithLabel = ({label, filterValue, onChange, clear}: {label: string, filterValue: string, onChange: (value: string) => void, clear?: boolean}) => {


    const [checked, setChecked] = useState(false)

    useEffect(() => {

        if(clear){
            setChecked(false)
        }
    },[clear])

    return (
      <li> <Checkbox checked={checked} onChange={() => {
        setChecked(!checked)
        onChange(filterValue)
    }}/> {label} </li>
    )

}