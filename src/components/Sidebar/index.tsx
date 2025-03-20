import React from 'react';
import {
  Drawer,
  Box,
  Typography, ListItem, Stack
} from '@mui/material';

import archive from '../../assets/icons/archive.svg';
import gear from '../../assets/icons/gear.svg';
import users from '../../assets/icons/users.svg';
import chart from '../../assets/icons/chart.svg';
import calendar from '../../assets/icons/calendar.svg';
import coins from '../../assets/icons/coins.svg';
import tasks from '../../assets/icons/tasks.svg';
import logo from '../../assets/icons/logo.svg';

const drawerWidth = 267;

const routes = [
  {
    icon: calendar,
    key: 'calendar',
    isActive: false,
  },
  {
    icon: tasks,
    key: 'tasks',
    isActive: false,
  },
  {
    icon: archive,
    key: 'archive',
    isActive: false,
  },
  {
    icon: users,
    key: 'users',
    isActive: false,
  },
  {
    icon: coins,
    key: 'coins',
    isActive: false,
  },
  {
    icon: chart,
    key: 'chart',
    isActive: true,
  },
  {
    icon: gear,
    key: 'gear',
    isActive: false,
  },
]

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      anchor='left'
      elevation={0}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          pl: '32px',
          width: drawerWidth,
          borderRadius: '56px',
          bgcolor: '#54D3C2',
        },
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" component="div" sx={{ mb: '32px', mt: '55px' }}>
          <img src={logo} alt="logo" />
        </Typography>
      </Box>
      <Stack sx={{ justifyContent: 'center', gap: '30px' }}>
        {routes.map((route, index) => (
          <ListItem sx={{
              ':hover': { bgcolor: '#A9E9E0' },
              p: '11px',
              width: '64px',
              height: '64px',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              bgcolor: route.isActive ? '#A9E9E0' : '',
            }} disablePadding key={route.key}>
                <img src={route.icon} alt={route.key} />
          </ListItem>
        ))}
      </Stack>
    </Drawer>
  );
};

export default Sidebar;
