import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StockView } from '../components';

const StockInfo = () => {
    const [stocks, setStocks] = useState([]);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
      axios
        .get(
            'https://api.twelvedata.com/stocks'
        )
        .then(res => {
          setStocks(res.data);
          console.log(res.data);
        })
        .catch(error => console.log(error));
    }, []);
  
    const handleChange = e => {
      setSearch(e.target.value);
    };
  
    // const filteredStocks = stocks.filter(stock =>
    //   stock.symbol.toLowerCase().includes(search.toLowerCase())
    // );
    console.log(stocks);
  return (
    <div>
        <div className='flex justify-center items-center'>
            <form>
            <input
                    className='block h-10 p-3 border-2 border-gray-200 rounded-lg bg-transparent'
                    type='text'
                    onChange={handleChange}
                    placeholder='Search'
                />
            </form>
        </div>
        <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
        {stocks.map(stock => {
          return (
           // <Link to={`/stock/${stock.name}`} element={<stock />}>
            <motion.div whileHover={{scale:1.2}}>
            <StockView
              key={stock.id}
              name={stock.name}
              price={stock.current_price}
              symbol={stock.symbol}
            //   marketcap={stock.total_volume}
            //   volume={stock.market_cap}
            //   image={stock.image}
            //   priceChange={stock.price_change_percentage_24h}
            />
            </motion.div>
           // </Link>
          );
        })}
        </div>
        
    </div>
  );
};

export default StockInfo;