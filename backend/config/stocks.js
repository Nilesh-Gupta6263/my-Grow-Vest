export const stocks = [
  { symbol: 'TCS', companyName: 'Tata Consultancy Services', price: 3845.6, change: 42.3, changePercent: 1.11, sector: 'IT', history: [3670, 3705, 3690, 3740, 3785, 3760, 3803, 3846] },
  { symbol: 'INFY', companyName: 'Infosys', price: 1482.25, change: -12.8, changePercent: -0.86, sector: 'IT', history: [1514, 1502, 1520, 1495, 1488, 1505, 1490, 1482] },
  { symbol: 'RELIANCE', companyName: 'Reliance Industries', price: 2921.4, change: 18.6, changePercent: 0.64, sector: 'Energy', history: [2850, 2865, 2900, 2882, 2910, 2892, 2903, 2921] },
  { symbol: 'HDFCBANK', companyName: 'HDFC Bank', price: 1654.1, change: 9.3, changePercent: 0.57, sector: 'Banking', history: [1602, 1615, 1620, 1612, 1630, 1642, 1645, 1654] },
  { symbol: 'ICICIBANK', companyName: 'ICICI Bank', price: 1218.75, change: -5.4, changePercent: -0.44, sector: 'Banking', history: [1245, 1230, 1238, 1220, 1215, 1227, 1224, 1219] },
  { symbol: 'WIPRO', companyName: 'Wipro', price: 512.35, change: 4.9, changePercent: 0.97, sector: 'IT', history: [490, 494, 500, 497, 503, 506, 507, 512] },
  { symbol: 'HINDUNILVR', companyName: 'Hindustan Unilever', price: 2490.8, change: 15.2, changePercent: 0.61, sector: 'FMCG', history: [2430, 2422, 2450, 2460, 2445, 2470, 2478, 2491] },
  { symbol: 'ITC', companyName: 'ITC Limited', price: 462.65, change: -2.15, changePercent: -0.46, sector: 'FMCG', history: [475, 470, 468, 471, 466, 464, 465, 463] },
  { symbol: 'BHARTIARTL', companyName: 'Bharti Airtel', price: 1456.2, change: 21.7, changePercent: 1.51, sector: 'Telecom', history: [1380, 1395, 1408, 1420, 1415, 1432, 1440, 1456] },
  { symbol: 'MARUTI', companyName: 'Maruti Suzuki', price: 12430.5, change: 86.4, changePercent: 0.70, sector: 'Automobile', history: [12020, 12080, 12110, 12070, 12200, 12300, 12344, 12431] }
];
export const findStock = (symbol) => stocks.find((stock) => stock.symbol === symbol.toUpperCase());
