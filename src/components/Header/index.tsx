import React, { useState } from 'react';
import {
  Avatar,
  Grid2, ToggleButtonGroup,
  ToggleButton, Stack, ListItemText
} from '@mui/material';
import HeaderReportSwitcher from './components/HeaderSwitcher';
import { reports } from '../../utils/reportTypes';
import avatar from '../../assets/avatar.png';
import { ArrowDropDown } from '@mui/icons-material';

const Header: React.FC = () => {

  const [currentReport, setCurrentReport] = useState<string>('consolidated'); 

  return (
    <Grid2
      container
      sx={{
        py: '50px',
        px: '40px',
        boxShadow: 'none',
      }}
    >
      <Grid2 size={9}>
        <Stack direction={'row'} spacing={'20px'} sx={{ overflow: 'hidden' }}>
          <HeaderReportSwitcher currentReport={currentReport} setCurrentReport={setCurrentReport} />
          <ToggleButtonGroup
            exclusive
            value={currentReport}
            onChange={(e, value) => setCurrentReport(value)}
          >
            {reports.map(i => {
              const isActive: boolean = currentReport === i.value;

              return <ToggleButton              
                sx={{
                  textTransform: 'unset',
                  fontSize: '16px',
                  color: isActive ? '#323F47' : '#D2D1D1',
                  border: 'none',
                  bgcolor: '#fff !important',
                  borderBottom: isActive ? 5 : 1,
                  borderWidth: '',
                  borderColor: isActive ? 'secondary.main' : '#D2D1D1',
                }}
                key={i.value}
                value={i.value}
                aria-label={i.value}
              >
                {i.title}
              </ToggleButton>
            })}
          </ToggleButtonGroup>
        </Stack>
      </Grid2>
      <Grid2 size={3} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar alt="Kristina" src={avatar} />
        <ListItemText
          primary={<span style={{ fontSize: 16, fontWeight: 700, color: '#323F47' }}>Kristina 🐰</span>}
          secondary={<span style={{ fontSize: 14, fontWeight: 400, color: '#989FA3' }}>Менеджер продаж</span>}
        />
        <ArrowDropDown sx={{ color: '#B6BCC3'}} />
      </Grid2>
    </Grid2>
  );
};

export default Header;
