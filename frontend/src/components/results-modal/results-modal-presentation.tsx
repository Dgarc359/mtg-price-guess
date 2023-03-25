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
                p: 2,
                margin: "auto",
                backgroundColor: "#fff",
                width: {
                    sm: 500,
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
                left: "30%",
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
                    <span onClick={() => onModalCloseClick(playerWon)} className="cursor-pointer">&times;</span>
                </Grid>
                <Grid item xs={12} >
                <Typography>
                    {playerWon ? "You won!" : "You lost!"}
                </Typography>
                </Grid>
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