import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: '',
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    london: 59,
   
    month: 'Jan',
  },
  {
    london: 50,
 
  
    month: 'Fev',
  },
  {
    london: 47,
   
    month: 'Mar',
  },
  {
    london: 54,
   
    month: 'Apr',
  },
  {
    london: 57,
  
    month: 'May',
  },
  {
    london: 60,
  
    month: 'June',
  },
  {
    london: 59,
   
    month: 'July',
  },
  {
    london: 65,
  
    month: 'Aug',
  },
  {
    london: 51,
   
    month: 'Sept',
  },
  {
    london: 60,
   
    month: 'Oct',
  },
  {
    london: 67,
   
    month: 'Nov',
  },
  {
    london: 61,
  
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function Linebar() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'london', valueFormatter }
       
     
      ]}
      {...chartSetting}
    />
  );
}
