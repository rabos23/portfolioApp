import React, {useState} from "react";
import { Line } from "react-chartjs-2";
import { useFetch } from './useFetch2';
    
function Graph(props) {
  const data = {
    datasets: [
     {
        data: []
      }
    ],
    
  };  
/*   const url = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol='+props.crypto+'&market=EUR&apikey=Q2SOTR60XPBOWUDG';
 */  
const url = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=EUR&apikey=Q2SOTR60XPBOWUDG";
  const { loading, products } = useFetch(url)
  const [dataset, setDataset] = useState(data);
  console.log(products)

  
 

 
  return (
    <div> 
    {
    loading ? 'loading...' : Object.keys(products["Time Series (Digital Currency Monthly)"])
    .map(el => setDataset(products["Time Series (Digital Currency Monthly)"][el]["4a. close (EUR)"]))  
    
    } 
  
<Line data={data}/>
  
    </div>

   
  );
}
export default Graph;
