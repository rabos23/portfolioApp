import React, {useState} from "react";
import { Line } from "react-chartjs-2";
import { useFetch } from './useFetch2';
    
function Graph(props) {
  
  const data = {
    labels: [],
    datasets: [
     {
     
      lineTension: 0.3,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDashOffset: 0.0,
      borderJoinStyle: "bevel",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
      }
    ],
    options: [
      

    ]
  }  
/*   const url = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol='+props.crypto+'&market=EUR&apikey=Q2SOTR60XPBOWUDG';
 */  
const url = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=ETH&market=EUR&apikey=Q2SOTR60XPBOWUDG";
  const { loading, products } = useFetch(url)
  console.log(products)

  
   if (loading == true){
    console.log("loading")
  }else{
    data.labels = Object.keys(products["Time Series (Digital Currency Monthly)"])
    data.datasets[0].data = Object.keys(products["Time Series (Digital Currency Monthly)"]).map(el => products["Time Series (Digital Currency Monthly)"][el]["4a. close (EUR)"]) 
    console.log(data.datasets[0].data)
  } 
 

 
  return (

<Line data={data} options={{
            legend: false
          }} />
      
  
  );
}
export default Graph;
