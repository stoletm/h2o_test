import React, { useEffect } from 'react';
import {
  ResponsiveContainer,
  LineChart as ReLineChart,
  Line,
  XAxis, Tooltip,
  Legend,
  CartesianGrid
} from 'recharts';
import { Box, Typography, ToggleButton, ToggleButtonGroup, Stack, Menu, MenuItem, Fade } from '@mui/material';
import { DataItem } from '../../utils/dataGenerator';
import { periods } from './utils/periodTypes';
import { months } from './utils/months';
import TooltipItem from './components/Tooltip';
import LegendItem from './components/Legend';
import { getChartData } from './utils/getChartData';

interface ChartProps {
  data: Array<DataItem>,
  activeDivision: string
}

const Chart: React.FC<ChartProps> = ({ data, activeDivision }) => {
  const [period, setPeriod] = React.useState<string>('year');
  const [chartData, setChartData] = React.useState<Array<DataItem>>(getChartData(data, period));
  const [chartMonth, setChartMonth] = React.useState<number>(1);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    
  useEffect(() => {
    setChartData(getChartData(data, period, activeDivision, chartMonth));
  }, [period, activeDivision, data, chartMonth])

  return (
    <Box sx={{ pt: '25px', px: '32px', pb: '30px', borderRadius: '32px', bgcolor: '#fff' }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, fontSize: 20 }}>
          Общая статистика
        </Typography>
        <ToggleButtonGroup
          value={period}
          exclusive
          onChange={(e, value) => setPeriod(value)}
          aria-label="period"
          sx={{ mb: 2, border: 'none' }}
          >
            {periods.map((item) => {
              return <>
                <ToggleButton
                  id='fade-button'
                  sx={{
                    textTransform: 'capitalize',
                    fontSize: 16,
                    border: 'none',
                    bgcolor: '#fff !important',
                    borderBottom: period === item.value ? 5 : 'none',
                    borderColor: 'secondary.main'
                  }}
                  value={item.value}
                  aria-label={item.value}
                  onClick={(e) => {
                    if (item.value === 'month') {
                      e.preventDefault();
                      e.persist();
                      handleClick(e)
                    }
                  }}
                >
                  {item.title}
                </ToggleButton>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    'aria-labelledby': 'fade-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  {months.map(i => {
                    return <MenuItem onClick={() => {
                      handleClose()
                      setChartMonth(i.value);
                      setPeriod('month')
                    }}>{i.title}</MenuItem>
                  })}
                </Menu>
              </>
            })}
        </ToggleButtonGroup>
      </Stack>
      <Box sx={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ReLineChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="periodName" />
            <Tooltip content={<TooltipItem />}/>
            <Legend content={<LegendItem chartData={chartData} />}/>
            <Line strokeWidth={3} dot={false} type="monotone" dataKey="revenue" stroke="#73CF7A" />
            <Line strokeWidth={3} dot={false} type="monotone" dataKey="expenses" stroke="#30C7DC" />
            <Line strokeWidth={3} dot={false} type="monotone" dataKey="income" stroke="#45AAF2" />
            <Line strokeWidth={3} dot={false} type="monotone" dataKey="debt" stroke="#F5E230" />
            <Line strokeWidth={3} dot={false} type="monotone" dataKey="total" stroke="#AC74FC" />
          </ReLineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Chart;