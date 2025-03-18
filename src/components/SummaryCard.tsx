import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid
} from '@mui/material';

interface SummaryCardProps {
  isActive?: boolean;
  segment?: string,
  amount?: number | string,
  change?: number | string,
}

interface PercentChangeProps {
  value: number | string;
}
const SummaryCard: React.FC<SummaryCardProps> = ({ isActive, segment, amount, change }) => {
  return (
    <Card sx={{
      borderRadius: '24px',
      backgroundColor: isActive ? '#54D3C2' : '#FFFFFF',
      minWidth: 264,
      maxWidth: 300,
      pt: '32px',
      pb: '15px'
    }}>
      <CardContent sx={{ display:'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          {amount}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          {/* {item.value} */}
        </Typography>
        {/* {item.sub && ( */}
          {/* <Typography variant="caption" color="text.secondary"> */}
            {/* {item.sub} */}
          {/* </Typography> */}
        {/* )} */}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
