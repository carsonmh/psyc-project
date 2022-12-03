import { Chart } from "react-google-charts";
import Papa from "papaparse";
import React from "react";

function parseData(data) {
  const rdata = Papa.parse(data);
  const actData = rdata.data;
  const headers = [
    null,
    null,
    "Asian",
    "American Indian",
    "Black",
    "Hispanic",
    "White",
  ];
  const one = actData[25];
  const three = actData[75];
  const barData = [];
  barData.push([
    "header",
    "pop. of 25th percentile",
    "pop. of 75th percentile",
  ]);
  for (let i = 2; i < 7; i++) {
    barData.push([headers[i], parseInt(one[i]), parseInt(three[i])]);
  }
  return barData;
}

function BarChart({ bgColor, txtColor }) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const target = `https://raw.githubusercontent.com/carsonmh/psyc-project/master/assets/pay-data.csv`;
    fetch(target)
      .then((response) => response.text())
      .then((response) => {
        setData(parseData(response));
      });
  }, []);
  const googleChartOptions = {
    titleTextStyle: { color: txtColor },
    backgroundColor: bgColor,
    title: "75th percentile vs 25th percentile by race",
    hAxis: {
      title: "# total people",
      titleTextStyle: {
        color: txtColor,
      },
      minValue: 0,
      textStyle: {
        color: txtColor,
      },
    },
    vAxis: {
      title: "Race",
      textStyle: {
        color: txtColor,
      },
      titleTextStyle: {
        color: txtColor,
      },
    },
    legend: {
      textStyle: {
        color: txtColor,
      },
    },
    width: "100%",
  };
  return (
    <div style={{ height: "100%", width: "100%" }}>
      {data ? (
        <Chart
          chartType="BarChart"
          data={data}
          height={"100%"}
          width={"100%"}
          options={googleChartOptions}
        />
      ) : (
        <div>loading... </div>
      )}
    </div>
  );
}

export default BarChart;
