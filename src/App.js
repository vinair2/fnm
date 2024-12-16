import React from 'react';
import { Box, Typography } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
      }}
    >

    {/*---------------------------------*/}
      <Box 
        position="static" 
        sx={{
          height: '40px',
          backgroundColor: '#ffffff', // White background
          borderBottom: '2px solid #000000', // Black border
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
        }}
      >
        <Typography 
          variant="h5" 
          color="black" 
          sx={{
            fontFamily: 'Roboto, sans-serif', 
            fontWeight: 'bold',
            textIndent: '10px'
          }}
        >
          Financials
        </Typography>
      </Box>
    {/*---------------------------------*/}

    {/*---------------------------------*/}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography 
          variant="h5" 
          color="black" 
          sx={{
            fontFamily: 'Roboto, sans-serif', 
            fontWeight: 'bold',
            textIndent: '10px'
          }}
        >
          Main
        </Typography>
      </Box>
    {/*---------------------------------*/}

    {/*---------------------------------*/}
      <Box 
        position="static" 
        sx={{
          height: '40px',
          backgroundColor: '#ffffff', // White background
          borderTop: '2px solid #000000', // Black border
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
        }}
      >
        <Typography 
          variant="h5" 
          color="black" 
          sx={{
            fontFamily: 'Roboto, sans-serif', 
            fontWeight: 'bold',
            textIndent: '10px'
          }}
        >
          Nav
        </Typography>
      </Box>
    {/*---------------------------------*/}
    </Box>
  );
};

export default App;
