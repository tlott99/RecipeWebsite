import {React} from 'react'
import {Stack, Box, Button, Typography, useMediaQuery, Grid} from '@mui/material'


export default function Header() {
    const small = useMediaQuery('(min-width:600px)');
    const medium = useMediaQuery('(min-width:900px)');
    const large = useMediaQuery('(min-width:1200px)');
    
return(
    <Box className="header">
      <Grid container className="backgroundGrey" style={{ pt: 6 }}>
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: large ? 'left' : 'center',
              alignItems: small ? 'center' : 'flex-start', // Align to the top on small screens
            }}
          >
            {large ? (
              <Button href="/login" variant="contained">
                Login
              </Button>
            ) : null}
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography
            variant="h2"
            align="center"
            sx={{ pb: 3, fontSize: large ? '3.75rem' : medium ? '2.0rem' : '1rem' }}
          >
            PutRecipeHere()
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Stack
            spacing={2}
            direction="row"
            sx={{
              pt: 1,
              display: 'flex',
              justifyContent: large ? 'right' : 'center',
              alignItems: small ? 'center' : 'flex-start', // Align to the top on small screens
              marginBottom: 3,
              height: '30px',
            }}
          >
            {large ? (null) :       
            <Button href="/login" variant="contained" sx={{fontSize: large ? '16px' : medium ? '12px' :  '8px'}}>
            Login
            </Button>}
            <Button href="/" variant="contained" sx={{fontSize: large ? '16px' : medium ? '12px' :  '8px'}}>
              Home
            </Button>
            <Button href="/RecipeFinder" variant="contained" sx={{fontSize: large ? '16px' : medium ? '12px' :  '8px'}}>
              Recipe Finder
            </Button>
            <Button href="/RecipeBuilder" variant="contained" sx={{fontSize: large ? '16px' : medium ? '12px' :  '8px'}}>
              Recipe Builder
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
)
}