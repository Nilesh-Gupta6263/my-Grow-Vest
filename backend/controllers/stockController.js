import { stocks, findStock } from '../config/stocks.js';
export const getStocks = (req, res) => res.json({ stocks, disclaimer: 'Demo/mock data only. Not real-time market data.' });
export const getStock = (req, res) => { const stock = findStock(req.params.symbol); if (!stock) return res.status(404).json({ message: 'Stock not found.' }); res.json({ stock, disclaimer: 'Demo/mock data only. Not real-time market data.' }); };
