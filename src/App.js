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
          height: '200px',
          backgroundColor: '#ffffff', // White background
          borderBottom: '4px solid #000000', // Black border
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
        }}
      >
        <Typography 
          variant="h2" 
          color="black" 
          sx={{
            fontFamily: 'Roboto, sans-serif', 
            fontWeight: 'bold',
            textIndent: '20px'
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
          variant="h2" 
          color="black" 
          sx={{
            fontFamily: 'Roboto, sans-serif', 
            fontWeight: 'bold',
            textIndent: '20px'
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
          height: '200px',
          backgroundColor: '#ffffff', // White background
          borderTop: '4px solid #000000', // Black border
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
        }}
      >
        <Typography 
          variant="h2" 
          color="black" 
          sx={{
            fontFamily: 'Roboto, sans-serif', 
            fontWeight: 'bold',
            textIndent: '20px'
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
