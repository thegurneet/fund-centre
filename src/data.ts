export type Regions = 'UK' | 'Global' | 'Europe' | 'Emerging' | 'Asia';

export type Domicile = 'Dublin' | 'London';

export type Fund = {
  fundname: string;
  domicile: Domicile;
  region: Regions;
  holdings: string;
  fundsize: string;
  launchdate: string;
  isin: string;
  manager: string;
  benchmark: string;
};

export const data: Fund[] = [
  {
    fundname: 'JOHCM Asia ex Japan Fund',
    domicile: 'Dublin',
    region: 'Asia',
    holdings: '41',
    fundsize: '18.19m',
    launchdate: '1731292235750',
    isin: 'AB1234567891',
    manager: 'John Smith',
    benchmark: 'MSCI AC Asia ex Japan NR'
  },
  {
    fundname: 'Fidelity UK Growth Fund',
    domicile: 'London',
    region: 'UK',
    holdings: '52',
    fundsize: '250m',
    launchdate: '1597962235750',
    isin: 'GB0987654321',
    manager: 'Emma Taylor',
    benchmark: 'FTSE All-Share Index'
  },
  {
    fundname: 'Vanguard Global Equity Fund',
    domicile: 'Dublin',
    region: 'Global',
    holdings: '158',
    fundsize: '500m',
    launchdate: '1629562235750',
    isin: 'IE1234567890',
    manager: 'Liam Johnson',
    benchmark: 'MSCI World Index'
  },
  {
    fundname: 'Schroders European Alpha Plus Fund',
    domicile: 'London',
    region: 'Europe',
    holdings: '74',
    fundsize: '80m',
    launchdate: '1586442235750',
    isin: 'GB8765432109',
    manager: 'Sophia Martin',
    benchmark: 'STOXX Europe 600'
  },
  {
    fundname: 'BlackRock Asia Growth Leaders Fund',
    domicile: 'London',
    region: 'Asia',
    holdings: '65',
    fundsize: '120m',
    launchdate: '1649292235750',
    isin: 'GB1928374650',
    manager: 'Olivia Chen',
    benchmark: 'FTSE Asia Pacific ex-Japan'
  },
  {
    fundname: 'Legal & General UK Small Cap Fund',
    domicile: 'London',
    region: 'UK',
    holdings: '92',
    fundsize: '45m',
    launchdate: '1610732235750',
    isin: 'GB1234598765',
    manager: 'Henry Brown',
    benchmark: 'FTSE 250'
  },
  {
    fundname: 'JOHNCM UK DYNAMIC FUND',
    domicile: 'London',
    region: 'UK',
    holdings: '85',
    fundsize: '160m',
    launchdate: '1603142235750',
    isin: 'IE8765432109',
    manager: 'Alice Carter',
    benchmark: 'FTSE All-Share TR'
  },
  {
    fundname: 'Templeton Emerging Markets Fund',
    domicile: 'London',
    region: 'Emerging',
    holdings: '130',
    fundsize: '200m',
    launchdate: '1574982235750',
    isin: 'GB3456789123',
    manager: 'Michael Evans',
    benchmark: 'MSCI Emerging Markets Index'
  },
  {
    fundname: 'Baillie Gifford Global Discovery Fund',
    domicile: 'Dublin',
    region: 'Global',
    holdings: '100',
    fundsize: '600m',
    launchdate: '1554932235750',
    isin: 'IE1122334455',
    manager: 'Rachel White',
    benchmark: 'FTSE All-World Index'
  },
  {
    fundname: 'Aviva UK Income Fund',
    domicile: 'London',
    region: 'UK',
    holdings: '54',
    fundsize: '220m',
    launchdate: '1587322235750',
    isin: 'GB9081726345',
    manager: 'Daniel Moore',
    benchmark: 'FTSE All-Share Index'
  },
  {
    fundname: 'Invesco Asia Opportunities Fund',
    domicile: 'Dublin',
    region: 'Asia',
    holdings: '39',
    fundsize: '95m',
    launchdate: '1657832235750',
    isin: 'IE5472910318',
    manager: 'Chloe Zhang',
    benchmark: 'MSCI AC Asia ex Japan NR'
  },
  {
    fundname: 'HSBC Global Growth Fund',
    domicile: 'London',
    region: 'Global',
    holdings: '142',
    fundsize: '780m',
    launchdate: '1531832235750',
    isin: 'GB5129034129',
    manager: 'James Scott',
    benchmark: 'MSCI World Index'
  },
  {
    fundname: 'BNP Paribas Pacific Equities Fund',
    domicile: 'Dublin',
    region: 'Asia',
    holdings: '48',
    fundsize: '135m',
    launchdate: '1614932235750',
    isin: 'IE3928475021',
    manager: 'Amelia Taylor',
    benchmark: 'FTSE Asia Pacific ex-Japan'
  },
  {
    fundname: 'Jupiter UK Smaller Companies Fund',
    domicile: 'London',
    region: 'UK',
    holdings: '67',
    fundsize: '75m',
    launchdate: '1573822235750',
    isin: 'GB7890123456',
    manager: 'George Robinson',
    benchmark: 'FTSE 250'
  },
  {
    fundname: 'Schroder Global Sustainable Fund',
    domicile: 'Dublin',
    region: 'Global',
    holdings: '110',
    fundsize: '450m',
    launchdate: '1509472235750',
    isin: 'IE9384712093',
    manager: 'Hannah Wilson',
    benchmark: 'FTSE All-World Index'
  },
  {
    fundname: 'Amundi European Equities Fund',
    domicile: 'London',
    region: 'Europe',
    holdings: '93',
    fundsize: '160m',
    launchdate: '1592962235750',
    isin: 'GB5764893210',
    manager: 'Max Turner',
    benchmark: 'MSCI Europe (ex-UK)'
  },
  {
    fundname: 'Pictet Emerging Markets Equity Fund',
    domicile: 'Dublin',
    region: 'Emerging',
    holdings: '115',
    fundsize: '280m',
    launchdate: '1558362235750',
    isin: 'IE8976543210',
    manager: 'Charlie Wright',
    benchmark: 'MSCI Emerging Markets Index'
  }
];
