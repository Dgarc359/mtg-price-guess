import { Card } from "../../lib/types";
import { cn } from "../../lib/utils";
import { Card as MuiCard, CardMedia, CardContent, Typography, CardActionArea, Paper, Grid, IconButton, Box } from "@mui/material";

interface IResultsModal {
    id: string;
    visible: boolean;
    onModalCloseClick: (arg0: boolean) => void;
    playerChoice?: string;
    winningCard: Card | undefined;
    firstCard: Card | undefined;
    secondCard: Card | undefined;
}

export const ResultsModal = (props: IResultsModal): JSX.Element => {

    const {
        id,
        visible,
        onModalCloseClick,
        playerChoice,
        winningCard,
        firstCard,
        secondCard
    } = props;

    const playerWon = playerChoice === winningCard?.name;

    return (
        <Paper
            sx={{
                p: {
                  sm: 0,
                  md: 2,
                },
                margin: "auto",
                backgroundColor: "#fff",
                width: {
                    sm: 350,
                    md: 600
                },
                height: {
                    sm: 400,
                    md: 500,
                },
                position: "fixed",
                zIndex: 1,
                top: "2.5rem",
                overflow: "auto",
                left : {
                  sm: "0%",
                  md: "30%"
                },
                visibility: visible ? "visible" : "hidden"
            }}
            elevation={3}
        >
            {/* <div className={'invisible'}></div>
            <span onClick={() => onModalCloseClick(playerWon)} className="cursor-pointer">&times;</span>
            {playerWon ? <div>You Won!</div> : <div>You Lost!</div>} */}
            <Grid container spacing={2}>
                <Grid item xs={11}/>
                <Grid item xs={1}>
                    <Typography
                        onClick={() => onModalCloseClick(playerWon)}
                        sx={{
                            cursor: "pointer",
                        }}
                        variant="h4"
                    >
                        &times;
                    </Typography>
                </Grid>
                <Grid item xs={12}/>
                <Grid item xs={12} >
                <Typography variant="h2" sx={{textAlign: "center"}} >
                    {(playerWon ? "You won!" : "You lost!")}
                </Typography>
                
                </Grid>
                <Grid item xs={12} sx={{textAlign: "center"}}>
                <Typography variant="body1">
                    {` You chose: ${playerChoice}`}
                </Typography>
                </Grid>
                <Grid item xs={12} sx={{textAlign: "center"}}>
                    <Typography variant="body1">
                        {`${firstCard?.name} price: $${firstCard?.prices.usd}`}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" sx={{textAlign: "center"}}>
                        {`${secondCard?.name} price: $${secondCard?.prices.usd}`}
                    </Typography>
                </Grid>

                {/* <p>{`You chose ${playerChoice}. Which is ${playerChoice === winningCard?.name ? "Correct!!" : "Incorrect!!"}`}</p>
            <p>{`${firstCard?.name} price: $${firstCard?.prices.usd}`}</p>
            <p>{`${secondCard?.name} price: $${secondCard?.prices.usd}`}</p> */}
            </Grid>
        </Paper>
        // <div id={id}
        //     className={cn([
        //         visible ? "" : "invisible",
        //         "fixed z-1 top-10 w-1/3 h-1/3 overflow-auto bg-white left-1/3",
        //         "rounded-lg"
        //     ])}
        // >
        
    )
}