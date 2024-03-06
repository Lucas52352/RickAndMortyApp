import { AppBar, Box, Button, Container, Grid, Stack, Toolbar, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import logo from './Assets/logo.png'

export const NavBar: React.FC<{}> = () => {

    const navigate = useNavigate()

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed'>
                <Toolbar>
                    <Container maxWidth='xl'>
                        <Grid
                            container
                            direction='row'
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Link to='/'>
                                    <img src={logo} style={{ width: '6em', margin: '1em' }} />
                                </Link>
                                <Typography sx={{ m: 3 }}>Rick & Morty</Typography>

                            </Grid>

                            <Grid item>

                                <Stack spacing={5} direction='row'>
                                    <Button variant="contained" onClick={() => navigate('/login')}> Login </Button>
                                    <Button variant="outlined"> Register </Button>
                                </Stack>
                            </Grid>


                        </Grid>

                    </Container>

                </Toolbar>

            </AppBar>

        </Box>

    )

}