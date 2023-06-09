import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import React from "react"

type ThemeProp = {
    children: JSX.Element
}

export enum themePalette {
    BG = '#160c28',
    PR = '#efcb68',
    FONT_GLOBAL = "'Playfair Display', serif"
}

const theme = createTheme({
    palette: {
        mode: 'dark',
        background:{
            default: themePalette.BG,
        },
        primary: {
            main: themePalette.PR
        },

    },
    typography: {
        fontFamily: themePalette.FONT_GLOBAL,
        fontSize: 25
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '0.5em'
                }
            }
        }
    }
})

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                {children}
        </ThemeProvider>
    )
}