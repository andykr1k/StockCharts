import { useState } from 'react'
import * as React from 'react'
import './App.css'
import { motion } from 'framer-motion'
import axios from "axios";
import { StockInfo } from './components/'

function App() {
  var [tickerName, setTickerName] = React.useState('')
  
  const price = (tickerName) => {

    const options = {
      method: 'GET',
      url: 'https://twelve-data1.p.rapidapi.com/price',
      params: {symbol: 'tickerName', format: 'json', outputsize: '30'},
      headers: {
        'X-RapidAPI-Key': '2b51fb0855msh66b614e107d0b9cp198049jsn8566ed43aeb7',
        'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
}

  return (
    <div className="p-3">
      <form className='grid place-items-center'>
          <h1 className="text-3xl">Stock Search</h1>
          <input className='w-1/2 p-3 mt-3 text-sm border-2 border-gray-200 bg-transparent rounded-md' id="name" placeholder='Stock Ticker' onChange={ (e) => setTickerName(e.target.value) }></input>
          <motion.button type='submit' whileHover={{scale:1.2}} className='w-1/5 p-3 mt-3 text-sm bg-white bg-opacity-5 rounded-md' onClick={() => price(tickerName)}>
            Submit
          </motion.button>
      </form>
      <StockInfo />
    </div>
  )
}

export default App
