import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
} from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: '#fff',
        boxShadow: 'none',
        borderBottom: '1px solid #eee',
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Сводный отчет внутри компании
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body1">Kristina</Typography>
          <Avatar alt="Kristina" src="/path/to/avatar.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
