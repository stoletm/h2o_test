import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

interface Issue {
  title: string;
  status: string;
}

const issues: Issue[] = [
  { title: 'F 300 (Сбои)', status: 'Высокий приоритет' },
  { title: 'F 101 (Бюджет)', status: 'Средний приоритет' },
  { title: 'F 208 (Сроки)', status: 'Низкий приоритет' },
];

const IssuesList: React.FC = () => {
  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Проблемные зоны
        </Typography>
        <List>
          {issues.map((issue, i) => (
            <ListItem key={i} disableGutters>
              <ListItemText
                primary={issue.title}
                secondary={issue.status}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default IssuesList;
