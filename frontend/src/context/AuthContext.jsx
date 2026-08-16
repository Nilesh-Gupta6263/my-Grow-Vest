import React from "react";
import { createContext, useContext, useEffect, useState } from 'react'; import api from '../services/api';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => { const [user, setUser] = useState(null); const [loading, setLoading] = useState(true); useEffect(() => { const loadUser = async () => { if (!localStorage.getItem('growvest_token')) return setLoading(false); try { const { data } = await api.get('/auth/me'); setUser(data); } catch { localStorage.removeItem('growvest_token'); } finally { setLoading(false); } }; loadUser(); }, []); const signIn = (data) => { localStorage.setItem('growvest_token', data.token); setUser(data.user); }; const signOut = () => { localStorage.removeItem('growvest_token'); setUser(null); }; return <AuthContext.Provider value={{ user, loading, signIn, signOut, setUser }}>{children}</AuthContext.Provider>; };
export const useAuth = () => useContext(AuthContext);
