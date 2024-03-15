import { AppBar, Badge, Box, Button, Container, Grid, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import logo from './Assets/logo.png'
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { useState } from "react"
import { Favorite } from "@mui/icons-material"
import { FavsComponent } from "./Favs"
import { logOut } from "../redux/slices/authSlice"

export const NavBar: React.FC<{}> = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const items = useAppSelector((state) => state.FavsReducer)
    const { isAuth } = useAppSelector((state) => state.AuthReducer)
    const [open, setOpen] = useState<boolean>(false)

    const handleStateViewDrawer = () => {
        setOpen(state => !state)
    }

    const handleLogOut = () => {
        dispatch(logOut())
        navigate('/login')
    }

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

                                {
                                    isAuth ? (<Button variant='contained' onClick={handleLogOut}>Log out</Button>)
                                        : (
                                            <Stack spacing={5} direction='row'>
                                                <Button variant="contained" onClick={() => navigate('/login')}> Login </Button>
                                                <Button variant="outlined"> Register </Button>
                                                <IconButton
                                                    color="primary"
                                                    onClick={handleStateViewDrawer}
                                                >
                                                    <Badge color="error" badgeContent={items.length}>
                                                        <Favorite />
                                                    </Badge>
                                                </IconButton>
                                            </Stack>
                                        )
                                }

                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <FavsComponent
                open={open}
                handleStateViewDrawer={handleStateViewDrawer}
            />
        </Box>
    )
}