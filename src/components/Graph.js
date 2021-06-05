import React from "react";
import { Line } from "react-chartjs-2";
import { useFetch } from "./useFetch2";
function Graph(props) {
  const data = {
    labels: [],
    datasets: [
      {
        lineTension: 0.3,
        backgroundColor: "rgb(180, 180, 180)",
        borderColor: props.isGreen ? "rgb(137,218,89)": "rgb(255, 99, 71)",
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
        data: [],
      },
    ]
  };
  /*   const url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=50';
   */
  const url =
    "https://api.coingecko.com/api/v3/coins/"+props.crypto.toLowerCase()+"/market_chart?vs_currency=usd&days=50";
  const { loading, products } = useFetch(url);
  /* console.log(products); */

  if (!loading){
    data.labels = Object.keys(products["prices"]);
    data.datasets[0].data = Object.keys(products["prices"]).map(
      (el) => products["prices"][el]["1"]
    );
    /* console.log(data.datasets[0].data);
    console.log(data.labels); */
  }

  /* console.log(getCurrentDate()) */

  var date = new Date(new Date().setDate(new Date().getDate() - 30));
  date.toLocaleDateString();
  /* console.log(date); */
  return (
    <Line
      data={data}
      options={{
        legend: false,
        scales: {
          xAxes: [
            {
              ticks: {
                reverse: false,
                beginAtZero: false,
                display: false
              
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
          yAxes: [
            {
                gridLines: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                reverse: false,
                beginAtZero: false,
                maxTicksLimit: 7,
                display: false
              
              },
            },
          ],
        },elements: { line: { fill: false } }
      }}
    />
  );
}
export default Graph;
