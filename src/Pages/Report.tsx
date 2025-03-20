import React, { useState } from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import SummaryCard from '../components/SummaryCard';
import Chart from '../components/Chart';
import IssuesList from '../components/IssuesList';
import { generateRandomData, DataItem, getRandomInt } from '../utils/dataGenerator';
import { useHotkeys } from 'react-hotkeys-hook';
interface Changes {
  [key: string]: number;
}

const changesTypes: { [key in keyof Changes]: string } = {
  total: 'Итоги',
  B2B: 'B2B',
  B2C: 'B2C'
}

const Report: React.FC = () => {
 
  const [data, setData] = useState<DataItem[]>(generateRandomData(1000));
  const [changes, setChanges] = useState<Changes>({
    total: getRandomInt(-100, 100),
    B2B: getRandomInt(-100, 100),
    B2C: getRandomInt(-100, 100)
  });
  const [division, setDivision] = useState<string>('total');

  useHotkeys('ctrl+shift+r', () => generateNewData(), { preventDefault: true })

  const generateNewData = () => {
    setData(generateRandomData(1000))
    setChanges({
      total: getRandomInt(-100, 100),
      B2B: getRandomInt(-100, 100),
      B2C: getRandomInt(-100, 100)
    })
  }

  const getFilteredData = (division: string) => {
    if (division !== 'total') {
      return data.filter((item: DataItem) => item.division === division)
    }
    return data
  }

  const getSummary = (division: string) => {
    return getFilteredData(division).reduce((acc: any, item: DataItem) => {
      return acc += item.amount
    }, 0)
  }

  return (
    <Box
      sx={{
        bgcolor: '#F8F8F8',
        flexGrow: 1,
        px: '40px',
        py: '28px',
        borderRadius: '56px'
      }}
    >
      <Typography variant='h4' sx={{ fontWeight: 900, fontSize: 28 }}>Сводный отчет</Typography>
      <Grid2 container spacing={'40px'} sx={{ mt: 2 }}>
        <Grid2 container spacing={'40px'} size={8}>
          <Grid2 container spacing={'40px'} size={12}>
            {Object.keys(changes).map((key: string) => {
              return <Grid2 size={4}>
                <SummaryCard
                  key={key}
                  isActive={division === key}
                  setDivision={() => setDivision(key)}
                  description={changesTypes[key]}
                  amount={getSummary(key)}
                  change={changes[key]}
                />
              </Grid2>
            })}
          </Grid2>
          <Grid2 sx={{ m: 0 }} size={12}>
            <Chart data={data} activeDivision={division}/>
          </Grid2>
        </Grid2>
        <Grid2 size={4}>
          <IssuesList data={data} />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Report;
