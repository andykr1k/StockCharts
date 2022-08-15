import * as React from 'react';

const StockView = ({ name, price, symbol }) => {

  return (
    <div className='mt-5 bg-white rounded-2xl p-3 items-center'>
        <div className='grid place-items-center text-center'>
            <div className='flex'>
                <h1 className='font-extrabold text-xl'>{name}</h1>
                <p className='m-0 text-xs'>{symbol}</p>
            </div>
            <div className='flex space-x-2'>
                {/* {priceChange < 0 ? (
                    <p className='text-red-600'>{price}</p>
                    ) : (
                    <p className='text-green-600'>{price}</p>
                )}
                {priceChange != null && priceChange < 0 ? (
                    <p className='text-red-600'>{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className='text-green-600'>+{priceChange}%</p>
                )} */}
                {price}
            </div>
            <div className='text-xs m-0'>
            {/* <p className=''>Volume: {volume}</p>
            <p className=''>
                Market Cap: ${marketcap}
            </p> */}
            </div>
        </div>
    </div>
  );
};

export default StockView;