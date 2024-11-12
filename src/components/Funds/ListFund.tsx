import React from 'react';
import { Box } from "@mui/material";
import styled from 'styled-components';
import { ArrowIcon } from "../ArrowIcon";

type FundProps = {
    fundName: string;
    benchmark: string;
    domicile: string;
    region: string;
    holdings: string;
    fundSize: string;
    launchDate: string;
}


export const ListFund = ({fundName, benchmark, domicile, region, holdings, fundSize, launchDate}: FundProps) => {
    return (
        <FundContainer>

            <div style={{flex: 3, lineHeight: 0.5}}>
                <h3> {fundName} </h3>
                <p> {benchmark} </p>
            </div>
            
            <FundText style={{flex: 1}}>
                <p> {domicile} </p>
            </FundText> 

            <FundText style={{flex: 1, textAlign: 'start'}}>
                <p> {region} </p>
            </FundText> 

            <FundText style={{flex: 1, textAlign: 'end'}}>
                <p> {holdings} </p>
            </FundText> 

            <FundText style={{flex: 1}}>
            <p> GBP {fundSize} </p>
            </FundText> 

            <FundText style={{flex: 1}}>
                <p> {launchDate} </p>
            </FundText> 

            <ArrowIcon/>

        </FundContainer>
    )
}


const FundContainer = styled(Box)`
    display: flex;
    border-left: 5px solid green;
    margin-top: 25px;
    padding: 10px 10px;
    background-color: white;
    cursor: pointer;

    &:hover {
      filter: drop-shadow(10px 10px 20px rgba(36, 36, 36, 0.2));
    }
`

const FundText = styled.div`
    flex: 1;
    text-align: center;
    margin: auto;
    border: 1px  red;
`