import { Container, Grid, Paper } from "@mui/material";
import React from "react";

export const LoginPage: React.FC<{}> = () => {
    return (
        <div>
            <Container maxWidth='xl'>
                <Grid 
                    container
                    direction='row'
                    alignItems='center'
                    justifyContent='center'
                    sx={{minHeight: '100vh'}}
                >
                    <Grid item >
                        <Paper sx={{padding: '2em'}}>aaa</Paper>  
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}