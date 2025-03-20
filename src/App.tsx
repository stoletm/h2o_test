import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Report from './Pages/Report';
import './styles/index.scss'
import Header from './components/Header';

const siderWidth: number = 130;

const styles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '56px'
}

const App: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', zIndex: 0, height: '100vh', borderRadius: 15, overflow: 'hidden' }}>
      <Box component='main' sx={{ ...styles, left: siderWidth, width: `calc(100% - ${siderWidth}px)`, bgcolor: '#fff', zIndex: 2, height: 300 }}>
        <Header />
      </Box>
      <Box component='main' sx={{ ...styles, left: siderWidth, top: 154, width: `calc(100% - ${siderWidth}px)`, bgcolor: 'primary.main', zIndex: 3}}>
        <Report />
      </Box>
      <Box component='aside' sx={{ ...styles, bgcolor: 'secondary.main', zIndex: 1 }}>
        <Sidebar />
      </Box>
    </Box>
  );
};

export default App;