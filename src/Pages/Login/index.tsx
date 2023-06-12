import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNotification } from '../../Context/Notification.context';
import { LoginValidate } from '../../Utils/validateForm';

export const LoginPage: React.FC<{}> = () => {
  type LoginType = {
    username: string;
    password: string;
  };

  const { getError, getSuccess } = useNotification();

  const [loginData, setLoginData] = useState<LoginType>({
    username: '',
    password: '',
  });

  const dataLogin = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    LoginValidate.validate(loginData)

      .then(() => {
        getSuccess(JSON.stringify(loginData));
      })

      .catch(error => {
        getError(error.message);
      });
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '90vh' }}>
          <Grid item>
            <Paper sx={{ padding: '1.2em', borderRadius: '.5em' }}>
              <Typography variant="h5" sx={{ mt: 1, mb: 1 }}>
                Log In
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  onChange={dataLogin}
                  name="username"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="Username"
                  sx={{ mt: 2, mb: 1.5 }}
                />

                <TextField
                  onChange={dataLogin}
                  name="password"
                  margin="normal"
                  type="password"
                  fullWidth
                  label="Password"
                  sx={{ mt: 1.5, mb: 1.5 }}
                />

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ mt: 1.5, mb: 3 }}>
                  Log In
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
