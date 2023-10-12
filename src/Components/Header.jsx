import {React} from 'react'
import {Stack, Box, Button, Typography} from '@mui/material'


export default function Header() {

return(
    <Box>
        <Box className="backgroundGrey" style={{pt:6, display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)'}}>
            <Typography variant="h2" align="center" sx={{pb:3, gridColumn:'2/2'}}>PutRecipeHere()</Typography>
            <Stack spacing ={2} direction ="row" sx={{pt:1, display: 'flex', justifyContent: 'right', marginBottom:3, gridColumn: '3/3', height:'30px'}}>
                <Button href="/" variant="contained">Home</Button>
                <Button href="/RecipeFinder" variant="contained">Recipe Finder</Button>
                <Button href="/RecipeBuilder" variant="contained">Recipe Builder</Button>
            </Stack>
        </Box>
    </Box>
)
}