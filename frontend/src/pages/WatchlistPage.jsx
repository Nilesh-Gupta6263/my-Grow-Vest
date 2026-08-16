import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import Loader from '../components/Loader';
import Notice from '../components/Notice';

export default function WatchlistPage() {
  const [items, setItems] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const response = await api.get('/watchlist');
        if (isMounted) setItems(response.data);
      } catch {
        if (isMounted) setMessage('Could not load your watchlist.');
      }
    };

    loadData();
    return () => { isMounted = false; };
  }, []);

  const remove = async (symbol) => {
    try {
      await api.delete(`/watchlist/${symbol}`);
      setItems((currentItems) => currentItems.filter((item) => item.symbol !== symbol));
      setMessage(`${symbol} removed from your watchlist.`);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Could not remove stock.');
    }
  };

  if (!items) return <Loader />;

  return <>
    <h1>Watchlist</h1><p>Companies you want to keep an eye on.</p>
    <Notice message={message} type={message.includes('removed') ? 'success' : 'error'} />
    {items.length ? <div className="card list">{items.map((item) => <div className="mini-row" key={item._id}><Link to={`/stocks/${item.symbol}`}><strong>{item.symbol}</strong><small>{item.companyName}</small></Link><button className="button danger small" onClick={() => remove(item.symbol)}>Remove</button></div>)}</div> : <div className="empty-card"><h2>No stocks in watchlist</h2><p>Find sample companies and add the ones you want to follow.</p><Link className="button" to="/stocks">Browse stocks</Link></div>}
  </>;
}
