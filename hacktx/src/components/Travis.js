import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Travis = () => {
  const [waterData, setWaterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('"http://localhost:8080/https://www.waterdatafortexas.org/reservoirs/individual/travis.csv"');
      setWaterData(response.data);
      console.log(response)
      console.log(response.data)
    };
    fetchData();
  }, []);

  const chartData = {
    labels: waterData.map((data) => data.date),
    datasets: [
      {
        label: 'Water Level',
        data: waterData.map((data) => data.level),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h1>Travis Water Level</h1>
      <Line data={chartData} />
    </div>
  );
};

export default Travis;



