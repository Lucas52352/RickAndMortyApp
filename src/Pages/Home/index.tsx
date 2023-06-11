import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Header } from "../../Components";
import { characters } from "../../api/characters";

export const HomePage: React.FC<{}> = () => {

    useEffect(() => {
        
        characters

            .getById({id: 7})

            .then((response) => {
                console.log(response.data);
            })

            .catch((error) => {
                console.log(error.message);  
            })

    }, [])

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