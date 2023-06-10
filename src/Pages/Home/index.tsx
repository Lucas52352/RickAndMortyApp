import { Button, Container } from "@mui/material";
import React from "react";
import { Header } from "../../Components";

export const HomePage: React.FC<{}> = () => {



    return (
        <div>
            <Container sx={{mt: 6}} maxWidth='xl'>
                <Header 
                    title="Hola Mundo" 
                    description="Bienvenido a WW"
                    element={<Button fullWidth variant="contained"> Iniciar </Button>}    
                />
            </Container>
        </div>
    )
}