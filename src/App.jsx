import { useState } from 'react'
import * as React from 'react'
import './App.css'
import { motion } from 'framer-motion'
import { StockInfo, RealTimePrice } from './config/api.js'

function App() {
  var [tickerName, setTickerName] = React.useState('')
  
  return (
    <div className="p-3">
      <form className='grid place-items-center'>
          <h1 className="text-3xl">Stock Search</h1>
          <input className='w-1/2 p-3 mt-3 text-sm border-2 border-gray-200 bg-transparent rounded-md' id="name" placeholder='Stock Ticker' onChange={ (e) => setTickerName(e.target.value) }></input>
          <motion.button type='submit' whileHover={{scale:1.2}} className='w-1/5 p-3 mt-3 text-sm bg-white bg-opacity-5 rounded-md' onClick={() => RealTimePrice(tickerName)}>
            Submit
          </motion.button>
      </form>
    </div>
  )
}

export default App
