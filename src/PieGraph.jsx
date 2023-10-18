import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 20, label: 'A' },
 
  { value: 35, label: 'C' },
  { value: 45, label: 'D' },
];

const size = {
  width: 600,
  height: 300,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieGraph() {
  return (
    <PieChart series={[{ data, innerRadius: 110 }]} {...size}>
      <PieCenterLabel>65% Total new Children</PieCenterLabel>
    </PieChart>
  );
}
