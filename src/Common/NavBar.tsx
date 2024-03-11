import { AppBar, Badge, Box, Button, Container, Grid, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import logo from './Assets/logo.png'
import { useAppSelector } from "../redux/hooks"
import { useState } from "react"
import { Favorite } from "@mui/icons-material"
import { FavsComponent } from "./Favs"

export const NavBar: React.FC<{}> = () => {

    const navigate = useNavigate()
    const items = useAppSelector((state) => state.FavsReducer)
    const [open, setOpen] = useState<boolean>(false)

    const handleStateViewDrawer = () => {
        setOpen(state => !state)
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
                                <Stack spacing={5} direction='row'>
                                    <IconButton
                                        color="primary"
                                        onClick={handleStateViewDrawer}
                                    >
                                        <Badge color="error" badgeContent={items.length}>
                                            <Favorite />
                                        </Badge>
                                    </IconButton>
                                    <Button variant="contained" onClick={() => navigate('/login')}> Login </Button>
                                    <Button variant="outlined"> Register </Button>
                                </Stack>
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