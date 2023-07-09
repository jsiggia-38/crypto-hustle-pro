import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Coin.css'

const API_KEY = import.meta.env.VITE_APP_API_KEY;


const Coin = ({ image, name, symbol }) => {
    const [price, setPrice] = useState(null);


    useEffect(() => {

        const controller = new AbortController();

        const fetchCoinPrice = async () => {

            try {
                const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=` + API_KEY, { signal: controller.signal });
                const json = await response.json();

                setPrice(json);

            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("it's ok");
                } else {
                    console.error(error);
                }
            }

        };

        fetchCoinPrice().catch(console.error);
        return () => controller.abort();

    }, [symbol]);

    return (
        <div>
            {price ? (
                <li className = "main-list" key = {symbol}>
                    <Link to = {`/coinDetails/${symbol}`} key = {symbol}><img className = "icons" src = {`https://www.cryptocompare.com${image}`} width = "50" height = "50" alt = {`Small icon for ${name} crypto coin`} />
                    {name}  
                    <span className = "tab"></span> ${price.USD} USD
                    </Link>
                </li>

            ) : null
            
            }
        </div>
    )
};

export default Coin;