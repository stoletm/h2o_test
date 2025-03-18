// src/pages/Dashboard.tsx
import React from 'react';
import { Box, Grid } from '@mui/material';
import SummaryCard from '../components/SummaryCard';
import Chart from '../components/Chart';
import IssuesList from '../components/IssuesList';

const Report: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'F8F8F8',
        flexGrow: 1,
        px: '39px',
        py: '28px',
      }}
    >
      {/* Карточки сводной статистики */}
      <SummaryCard amount={20000} />

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {/* График */}
        <Grid item xs={12} md={8}>
          <Chart />
        </Grid>

        {/* Проблемные зоны */}
        <Grid item xs={12} md={4}>
          <IssuesList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Report;
