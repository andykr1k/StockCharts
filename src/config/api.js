import axios from "axios";

export const RealTimePrice = async(tickerName) => {

    const options = {
      method: 'GET',
      url: 'https://twelve-data1.p.rapidapi.com/price',
      params: {symbol: tickerName, format: 'json', outputsize: '30'},
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

export const StockInfo = async(tickerName) => {

    const options = {
        method: 'GET',
        url: 'https://twelve-data1.p.rapidapi.com/symbol_search',
        params: {symbol: tickerName, outputsize: '30'},
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