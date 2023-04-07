import { Container } from '@mui/material'
import React from 'react'

const CentralContainer = ({children}) => {
  return (
    <Container sx={{paddingLeft: "0px !important", paddingRight: "0px !important", maxWidth: '1400px !important'}}>
        {children}
    </Container>
  )
}

export default CentralContainer