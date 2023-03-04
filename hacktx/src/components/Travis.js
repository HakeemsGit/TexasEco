import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
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
            backgroundColor: 'blue',
          },
          {
            label: 'Surface Area',
            data: [],
            backgroundColor: 'green',
          },
          {
            label: 'Reservoir Storage',
            data: [],
            backgroundColor: 'red',
          },
          {
            label: 'Conservation Storage',
            data: [],
            backgroundColor: 'orange',
          },
          {
            label: 'Percent Full',
            data: [],
            backgroundColor: 'purple',
          },
          {
            label: 'Conservation Capacity',
            data: [],
            backgroundColor: 'brown',
          },
          {
            label: 'Dead Pool Capacity',
            data: [],
            backgroundColor: 'grey',
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
    Papa.parse('/lake_travis.csv', {
      download: true,
      header: true,
      complete: (results) => {
        const data = results.data;

        const labels = data.map((item) => item.date);
        const waterLevels = data.map((item) => item.water_level);
        const surfaceAreas = data.map((item) => item.surface_area);
        const reservoirStorages = data.map((item) => item.reservoir_storage);
        const conservationStorages = data.map((item) => item.conservation_storage);
        const percentFull = data.map((item) => item.percent_full);
        const conservationCapacity = data.map((item) => item.conservation_capacity);
        const deadPoolCapacity = data.map((item) => item.dead_pool_capacity);

        const chartData = {
          labels: labels,
          datasets: [
            {
              label: 'Water Level',
              data: waterLevels,
              backgroundColor: 'blue',
            },
            {
              label: 'Surface Area',
              data: surfaceAreas,
              backgroundColor: 'green',
            },
            {
              label: 'Reservoir Storage',
              data: reservoirStorages,
              backgroundColor: 'red',
            },
            {
              label: 'Conservation Storage',
              data: conservationStorages,
              backgroundColor: 'orange',
            },
            {
              label: 'Percent Full',
              data: percentFull,
              backgroundColor: 'purple',
            },
            {
              label: 'Conservation Capacity',
              data: conservationCapacity,
              backgroundColor: 'brown',
            },
            {
              label: 'Dead Pool Capacity',
              data: deadPoolCapacity,
              backgroundColor: 'grey',
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
        <Bar
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
