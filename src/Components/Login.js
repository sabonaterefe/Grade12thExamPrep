import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, IconButton, InputAdornment, Dialog, DialogTitle, DialogContent, DialogActions, ThemeProvider, createTheme, CssBaseline, GlobalStyles } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Define the custom theme using createTheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#C6B2CE',
    },
    secondary: {
      main: '#99C4E0',
    },
    background: {
      default: '#f0f0f0', // Light grey background
    },
  },
});

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showIncorrectDialog, setShowIncorrectDialog] = useState(false);

  const handleLogin = () => {
    // Check username and password (dummy check for example)
    if (username.length === 8 && password.length === 8) {
      // Redirect to user's eXam Prep account
      window.location.href = '/exam-prep-account'; // Example redirection
    } else {
      // Show incorrect message dialogue and reset form
      setShowIncorrectDialog(true);
      setUsername('');
      setPassword('');
    }
  };

  const handleCloseDialog = () => {
    setShowIncorrectDialog(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply global styles from Material-UI */}
      <GlobalStyles styles={{ // Remove duplicate styles prop
        body: {
          backgroundColor: theme.palette.background.default,
        },
      }} />
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>Login</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Username"
              required
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              inputProps={{ maxLength: 8 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Password"
              required
              variant="outlined"
              type={showPassword ? 'text' : 'password'} // Toggle visibility based on state
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              inputProps={{ maxLength: 8 }}
               // eslint-disable-next-line 
              InputProps={{ // Add input adornment for visibility toggle
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12}>
            {/* Button for Login */}
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>Login</Button>
          </Grid>
          <Grid item xs={12}>
            {/* Button for Forgot password */}
            <Button variant="outlined" color="secondary" fullWidth>Forgot password</Button>
          </Grid>
          <Grid item xs={12}>
            {/* Button for Sign Up */}
            <Button variant="outlined" fullWidth>Sign Up</Button>
          </Grid>
        </Grid>

        {/* Incorrect message dialog */}
        <Dialog open={showIncorrectDialog} onClose={handleCloseDialog}>
          <DialogTitle>Incorrect Credentials</DialogTitle>
          <DialogContent>
            <Typography variant="body1">Please check your username and password and try again.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
