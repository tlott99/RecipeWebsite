import {React} from 'react'
import {Box, Typography, Grid, useMediaQuery} from '@mui/material'

export default function Footer() {

    const medium = useMediaQuery('(min-width:900px)');
    const large = useMediaQuery('(min-width:1200px)');
return(
    <Box>
        <Grid container className="backgroundGrey" style={{pt:6}}>
            <Grid item sx={{pb:3, gridColumn:'1/1'}} md={4}>
                <Box sx={{display:'flex', flexDirection: 'column', pl:4}}>
                    <Typography variant="h4">Contact Us</Typography>
                    <Typography><a href="4355156278">(435)515-6278</a></Typography>
                    <Typography><a href="mailto:travislott@msn.com">travislott@msn.com</a></Typography>
                </Box>
            </Grid>
            <Grid item md={8}>
                <Typography variant="h2" align="left" sx={{pb:3, fontSize: large ? '3.75rem' : medium ? '2.0rem' : '1rem' }}>PutRecipeHere()</Typography>
            </Grid>
        </Grid>
    </Box>
)
}