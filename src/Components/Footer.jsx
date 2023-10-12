import {React} from 'react'
import {Box, Typography} from '@mui/material'

export default function Footer() {

return(
    <Box>
        <Box className="backgroundGrey" style={{pt:6, display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)'}}>
            <Box sx={{pb:3, gridColumn:'1/1'}}>
                <Box sx={{display:'flex', flexDirection: 'column', pl:4}}>
                    <Typography variant="h4">Contact Us</Typography>
                    <Typography><a href="4355156278">(435)515-6278</a></Typography>
                    <Typography><a href="mailto:travislott@msn.com">travislott@msn.com</a></Typography>
                </Box>
            </Box>
            <Typography variant="h2" align="center" sx={{pb:3, gridColumn:'2/2'}}>PutRecipeHere()</Typography>
        </Box>
    </Box>
)
}