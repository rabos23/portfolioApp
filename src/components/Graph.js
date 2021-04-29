import React from "react";
import { Line } from "react-chartjs-2";
import { useFetch } from "./useFetch2";
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
        data: [],
      },
    ],
    options: [],
  };
  /*   const url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=50';
   */
  const url =
    "https://api.coingecko.com/api/v3/coins/"+props.cryptoName+"/market_chart?vs_currency=usd&days=50";
  const { loading, products } = useFetch(url);
  console.log(products);

  if (loading === true) {
    console.log("loading");
  } else {
    data.labels = Object.keys(products["prices"]);
    data.datasets[0].data = Object.keys(products["prices"]).map(
      (el) => products["prices"][el]["1"]
    );
    console.log(data.datasets[0].data);
    console.log(data.labels);
  }

  /* console.log(getCurrentDate()) */

  var date = new Date(new Date().setDate(new Date().getDate() - 30));
  date.toLocaleDateString();
  console.log(date);
  return (
    <Line
      data={data}
      options={{
        legend: false,
        scales: {
          xAxes: [
            {
              ticks: {
                reverse: true,
                beginAtZero: false,
              },
            },
          ],
        },
      }}
    />
  );
}
export default Graph;
