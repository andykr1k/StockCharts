import axios from "axios";

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const StockList = () =>
  `https://api.twelvedata.com/stocks`;
