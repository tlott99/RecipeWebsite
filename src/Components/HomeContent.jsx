import { Typography, Button, Box , Container} from "@mui/material";

export default function HomeContent(){

    return(
        <Container>
            <Typography variant="h4" align="center" sx={{mt: 5, display: 'flex', justifyContent: 'center', mb:4}}>
                Welcome to PutRecipeHere()
            </Typography>
            <Typography variant="body1" align= 'center' sx={{mb:2}}>
                As I was searching for what to do my project on I was talking with my brother Derek. One of his goals was to write a cookbook. I enjoy cooking and it was one of the topics
                that I was thinking of doing my project on. I looked at different websites for ways to record a recipe and only found one site and it took about 15 minutes to find the place
                to record a recipe. I decided to create my own place to put these recipes and I've had multiple people ask for the website so they can do the same thing. 
            </Typography>
            <Typography variant="body1" align= 'center' sx={{mt:6}}>
                If you would like to see my code just click on the button below
            </Typography>
            <Typography align="center" sx={{mt:2}}>
                <Button sx={{justifyContent:"center"}} variant="contained" href="https://github.com/tlott99/RecipeWebsite"> 
                    GitHub
                </Button>
            </Typography>
        </Container>
    )
}