import React from 'react';
import {
  ResponsiveContainer,
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import { Box, Typography } from '@mui/material';

// Пример фиктивных данных
const chartData = [
  { name: 'Янв', A: 4000, B: 2400, C: 2400 },
  { name: 'Фев', A: 3000, B: 1398, C: 2210 },
  { name: 'Мар', A: 2000, B: 9800, C: 2290 },
  { name: 'Апр', A: 2780, B: 3908, C: 2000 },
  { name: 'Май', A: 1890, B: 4800, C: 2181 },
  { name: 'Июн', A: 2390, B: 3800, C: 2500 },
  { name: 'Июл', A: 3490, B: 4300, C: 2100 },
];

const Chart: React.FC = () => {
  return (
    <Box sx={{ mt: 4, p: 2, border: '1px solid #eee', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Общая статистика
      </Typography>
      <Box sx={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ReLineChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="A" stroke="#8884d8" />
            <Line type="monotone" dataKey="B" stroke="#82ca9d" />
            <Line type="monotone" dataKey="C" stroke="#ffc658" />
          </ReLineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Chart;
