import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Report from './Pages/Report';

const bgcolors = {
  sidebar: '#54D3C2',
  main: '#F8F8F8',
  header: '#FFFFFF',
}

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
      <Box component='main' sx={{ ...styles, left: 130, bgcolor: bgcolors.main, zIndex: 2 }}>
        <Report />
      </Box>
      <Box component='aside' sx={{ ...styles, bgcolor: bgcolors.sidebar, zIndex: 1 }}>
        <Sidebar />
      </Box>
    </Box>
  );
};

export default App;