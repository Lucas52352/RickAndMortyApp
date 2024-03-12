import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useFormik } from 'formik'
import { LoginValidate } from '../../Utils/validateForm';
import { useNotification } from '../../Context/Notification.context';

type LoginType = {
  username: string;
  password: string;
};

const LoginPage: React.FC<{}> = () => {

  const { getSuccess } = useNotification()

  const formik = useFormik<LoginType>({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: LoginValidate,
    onSubmit: (values: LoginType) => {
      getSuccess(JSON.stringify(values))
    }
  })

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
              <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
                Log In
              </Typography>
              <Box component="form" onSubmit={formik.handleSubmit}>
                <TextField
                  name="username"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="Username"
                  sx={{ mt: 2, mb: 1.5 }}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={formik.touched.username && Boolean(formik.errors.username)}
                  helperText={formik.touched.username && formik.errors.username}
                />

                <TextField
                  name="password"
                  margin="normal"
                  type="password"
                  fullWidth
                  label="Password"
                  sx={{ mt: 1.5, mb: 1.5 }}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ mt: 1.5, mb: 3 }}
                  
                >
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

export default LoginPage