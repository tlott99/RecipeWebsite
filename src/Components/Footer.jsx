import {React} from 'react'
import {Box, Typography, Grid, useMediaQuery} from '@mui/material'

export default function Footer() {

    const medium = useMediaQuery('(min-width:900px)');
    const large = useMediaQuery('(min-width:1200px)');
return(
    <div style={{marginTop:8}}>
        <Grid container className="backgroundGrey" style={{pt:6}}>
            <Grid item sx={{pb:3}} xs={12}>
                <Box sx={{display:'flex', flexDirection: 'column'}}>
                    <Typography variant="h4" sx={{display: 'flex',justifyContent:'center'}}>Contact Us</Typography>
                    <Typography sx={{display: 'flex', justifyContent:'center'}}><a href="4355156278">(435)515-6278</a></Typography>
                    <Typography sx={{display: 'flex',justifyContent:'center'}}><a href="mailto:travislott@msn.com">travislott@msn.com</a></Typography>
                </Box>
            </Grid>
        </Grid>
    </div>
)
}