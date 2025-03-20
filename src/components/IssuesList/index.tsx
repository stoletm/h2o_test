import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar
} from '@mui/material';
import { Circle } from '@mui/icons-material';
import { DataItem } from '../../utils/dataGenerator';
import { prettyPrice } from '../../utils/prettyPrice';

interface IssuesProps {
  data: DataItem[];
}

const IssuesList: React.FC<IssuesProps> = ({ data }) => {
  return (
    <Card sx={{ p: '30px', pb: 0, borderRadius: '32px', boxShadow: 'none', height: '100%' }}>
      <CardContent sx={{ p: 0 }}>
        <Typography sx={{ fontSize: 20, fontWeight: 700 }} variant="h6" gutterBottom>
          Проблемные зоны
        </Typography>
        <List>
          {data.filter((item: DataItem) => item.amount > 10000).filter((_, index) => index <= 7 ).map((item: DataItem, i: number) => (
            <ListItem sx={{ py: '9px', m: 0 }} key={i} disableGutters>
              <ListItemAvatar>
                <Circle sx={{ fontSize: '30px', color: item.amount > 50000 ? '#FC5C65' : '#F7B731' }}>!</Circle>
              </ListItemAvatar>
              <ListItemText
                sx={{ p: 0, m: 0 }}
                primary={<Typography sx={{ fontSize: 14, fontWeight: 600 }}>{item.category}</Typography>}
                secondary={<Typography sx={{ fontSize: 18, fontWeight: 800 }}><span style={{ fontFamily: 'Roboto', marginRight: 5 }}>₽</span>{prettyPrice(item.amount)}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default IssuesList;
