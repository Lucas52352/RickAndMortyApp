import { Container, Button } from "@mui/material";
import React from "react";

export const HomePage: React.FC<{}> = () => {



    return (
        <div>
            <Container sx={{mt: 0}} maxWidth='xl'>
                <Button  variant='contained'>
                    This is Home
                </Button>
            </Container>
        </div>
    )
}