import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App'
import Layout from '../routes/Layout';
import './index.css'
import CoinDetail from '../routes/CoinDetail';
import NotFound from '../routes/NotFound';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Layout />}>
        <Route index = {true} element = {<App />} />
        <Route index = {false} path = "coinDetails/:symbol" element = {<CoinDetail />} />
      </Route>
      <Route path = "*" element = {<NotFound />} />


    </Routes>
  </BrowserRouter>
)
