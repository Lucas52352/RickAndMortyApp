import { Container, Button } from "@mui/material";
import React from "react";
import { useNotification } from "../../Context/Notification.context";

export const HomePage: React.FC<{}> = () => {

    const { getError } = useNotification()
    
    const handleClick = () => {
        getError('Tai gastando caleta wn conchetumare')
    }

    return (
        <div>
            <Container sx={{mt: 0}} maxWidth='xl'>
                <Button onClick={handleClick} variant='contained'>
                    This is Home
                </Button>
            </Container>
        </div>
    )
}