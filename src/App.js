import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const App = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Welcome to My App
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container>
  );
};

export default App;