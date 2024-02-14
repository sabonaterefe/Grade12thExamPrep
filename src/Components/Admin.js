import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, TextField, Button, Typography, Grid, Paper } from '@mui/material';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#23AF51',
    },
    background:{
    default: '#ffe4e1'
    }
  },
});

const Admin = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAdminRegistration = (event) => {
    event.preventDefault();
    console.log('Admin Registration:', formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        className="registration-container" // Apply custom CSS class for background styling
      >
          <Paper sx={{ minHeight: '100vh', backgroundColor: theme.palette.background.default }} className='registration-paper'> {/* Apply custom CSS class for paper styling */}
          <Typography variant="h5" gutterBottom align="center">
            Admin Registration
          </Typography>
          <form onSubmit={handleAdminRegistration}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Admin;
