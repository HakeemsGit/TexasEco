import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import Papa from 'papaparse';

class Travis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Water Level',
            data: [],
            borderColor: 'blue',
            fill: false,
          },
          {
            label: 'Reservoir Storage',
            data: [],
            borderColor: 'red',
            fill: false,
          },
          {
            label: 'Percent Full',
            data: [],
            borderColor: 'purple',
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Reservoir Data for Travis Lake',
          fontSize: 18,
        },
        legend: {
          display: true,
          position: 'bottom',
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  }

  componentDidMount() {
    Papa.parse('lake_travis.csv', {
      download: true,
      comments: '#',
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const data = results.data;

        const labels = data.map((item) => item.date);
        const waterLevels = data.map((item) => item.water_level);
        const reservoirStorages = data.map((item) => item.reservoir_storage);
        const percentFull = data.map((item) => item.percent_full);

        const chartData = {
          labels: labels,
          datasets: [
            {
              label: 'Water Level',
              data: waterLevels,
              borderColor: 'blue',
              fill: false,
            },
            {
              label: 'Reservoir Storage',
              data: reservoirStorages,
              borderColor: 'red',
              fill: false,
            },
            {
              label: 'Percent Full',
              data: percentFull,
              borderColor: 'purple',
              fill: false,
            },
          ],
        };

        this.setState({ chartData });
      },
    });
  }

  render() {
    return (
      <div className="travis-chart">
        <Line
          data={this.state.chartData}
          options={this.state.options}
          height={400}
          width={600}
        />
      </div>
    );
  }
}

export default Travis;
