import { Box } from '@mui/material'
import React from 'react'

const ExtendedContainer = ({children, background, padding, minHeight, display, justifyContent, alignItems, paddingXS}) => {
  return (
    <Box sx={theme => ({
        padding: padding || '4rem 7.5rem',
        background,
        minHeight,
        display,
        justifyContent,
        alignItems, 
        [theme.breakpoints.down("lg")]: {
          padding: '2rem 3rem',
        },
        [theme.breakpoints.down("md")]: {
          padding: paddingXS ? paddingXS : '2rem 1rem',
        }
    })}>
        {children}
    </Box>
  )
}

export default ExtendedContainer