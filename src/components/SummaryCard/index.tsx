import React from 'react';
import {
  Card,
  CardContent,
  Typography
} from '@mui/material';
import { prettyPrice } from '../../utils/prettyPrice';
import PercentChangeLabel from './components/PercentChangeLabel';

interface SummaryCardProps {
  setDivision: () => void;
  isActive?: boolean;
  description?: string;
  amount: number | string;
  change: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ setDivision, description, amount, change, isActive }) => {
  const isPositive: boolean = parseFloat(change.toString()) > 0;
  const bgcolor: string = isActive ?
    isPositive ? 'secondary.main' : 'error.main' :
    '#fff';

  return (
    <Card
      onClick={() => setDivision()}
      sx={{
        borderRadius: '24px',
        width: '100%',
        border: 'none',
        boxShadow: 'none',
        bgcolor,
        pt: '32px',
        pb: '15px',
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 0 }}>
        <PercentChangeLabel value={change} isActive={isActive} />
        <Typography variant="h3" color={isActive ? '#fff' : ''} sx={{ mt: '13px', p: 0, fontSize: 28, fontWeight: 500 }}>
          <span style={{ fontFamily: 'Roboto', fontWeight: 900 }}>₽</span> {prettyPrice(amount)}
        </Typography>
        <Typography variant="h6" color={isActive ? '#fff' : ''} sx={{ p: 0, fontSize: 16, fontWeight: 500 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
