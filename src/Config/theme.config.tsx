import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import React from "react"

type ThemeProp = {
    children: JSX.Element
}

export enum themePalette {
    BG = '#160c28',
    PR = '#efcb68',
    FONT_GLOBAL = "'Playfair Display', serif",

    //! ALERT STYLES
    ERROR_MAIN = '#F44336',
    BG_ERROR_MAIN = 'rgba(244, 78, 54, 0.3)'
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
        },

        MuiAlert:{

            defaultProps:{ 
                style: {
                    borderRadius: '0.8em',
                    fontSize: '1em',    
                }
            },

            styleOverrides: {
                standardError: {
                    border: `1px solid ${themePalette.ERROR_MAIN}`,
                    background: themePalette.BG_ERROR_MAIN
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