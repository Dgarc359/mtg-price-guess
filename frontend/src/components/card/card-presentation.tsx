import { Card as MuiCard, CardMedia, CardContent, Typography, CardActionArea, Paper, Grid, IconButton } from "@mui/material";
import React from "react";
import { Card } from "../../lib/types";
import { cn } from "../../lib/utils";

interface ICard {
  cardData: Card | undefined;
  // imageOnClick?: (event?: MouseEvent<HTMLImageElement, MouseEvent>) => void,
  imageOnClick?: (event?: unknown) => void;
  onClickDisabled: boolean;
}

export const CardView = (props: ICard) => {
  const {
    imageOnClick,
    onClickDisabled,
  } = props;

  return (
    <div
      id={`card-container`}
      className={cn([
        "p-4 m-4"
        // "flex",
        // "max-sm:w-full max-sm:h-[50vh]",
        // "md:w-1/2 md:h-screen md:justify-center md:align-middle md:8",
      ])}
    >
      <IconButton>
      <Paper 
        sx={{
          p:2,
          margin: "auto",
          // maxWidth: 500,
          flexGrow: 1,
          backgroundColor: "#fff",
          width: {
            sm: 300,
            md: 400,
          },
          cursor: onClickDisabled ? "pointer" : "default"
        }}
        onClick={onClickDisabled ? imageOnClick : () => {}}
        id={props.cardData?.name}
      >
        <Grid container spacing={2}>
          <Grid item md={12} xs={4}>
            <img
            id={props.cardData?.name}
            src={props.cardData?.image_uris?.png}
            alt=""
            className={cn([
              // "hover:cursor-pointer",
              "max-sm:w-[90%]",
              "md:w-[70%] md:m-auto",
            ])}
            />
         
          </Grid>
          <Grid item md={12} xs={8}>
            <Typography gutterBottom variant="h5" component={"div"} sx={{textAlign: {sm: "left", md: "center"}}}>
              {props.cardData?.name}
              {/* Quick Stats */}
            </Typography>
            <Typography variant="body2" color={"text.secondary"} sx={{textAlign: {sm: "left", md: "center"}}}>
              {/* {props.cardData?.oracle_text} */}
              {props.cardData?.legalities.modern === "legal" ? "Legal in Modern" : "Illegal in Modern"}
            </Typography>
            
            <Typography variant="body2" color={"text.secondary"} sx={{textAlign: {sm: "left", md: "center"}}}>
              {`Set: ${props.cardData?.set_name}`}
            </Typography>
          </Grid>

        </Grid>
      </Paper>
      </IconButton>
    </div>
  );
};
