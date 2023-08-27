import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { Bar } from 'react-chartjs-2'
// import faker from 'faker'

import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    // BT - This is the title
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

// BT - Label on the X-axis
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    // BT - Pass in labels above
  labels,
  //BT - An array of objects with 3 properties: label, data, backgroundColor.
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
        label: 'Dataset 3',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(157, 165, 234, 0.5)',
    },
  ],
};

export const VerticalBarChart = () => {
  return (

        <Bar options={options} data={data} />
  )
}
