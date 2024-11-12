import { Filter } from "../components/Funds/Filter"
import { FundResults } from "../components/Funds/FundResults"
import { FundProvider } from "../contexts/FundContext"
import {data} from '../data'

export const FundsPage = () => {

    return (
        <FundProvider fundData={data}>
            <main style={{backgroundColor: '#f0eeeb'}}>
            <div style={{display: 'flex', margin: '0 10vw'}}>

                <div style={{flex: 1}}>
                    <Filter />
                </div>
                <div style={{flex: 3, borderLeft: '1px solid grey'}}>
                    <FundResults />
                </div> 

                </div>
            </main>
        </FundProvider>
    )
}
