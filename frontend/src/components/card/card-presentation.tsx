import { Card as MuiCard, CardMedia, CardContent, Typography, CardActionArea, Paper, Grid, IconButton } from "@mui/material";
import React from "react";
import { Card } from "../../lib/types";
import { cn } from "../../lib/utils";

interface ICard {
  cardData: Card | undefined;
  // imageOnClick?: (event?: MouseEvent<HTMLImageElement, MouseEvent>) => void,
  imageOnClick?: (event?: unknown) => void;
}

export const CardView = (props: ICard) => {
  const {
    imageOnClick,
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
      {/* <img
        src={props.cardData?.image_uris?.art_crop}
        alt=""
        className="blur-xl"
      /> */}

      {/* <div
        id="div-img-container"
        className={cn([
          "absolute",
          "max-sm:h-1/2", 
        ])}
      > */}
        {/* <img
          id={props.cardData?.name}
          src={props.cardData?.image_uris?.png}
          alt=""
          className={cn([
            "hover:cursor-pointer",
            "max-sm:w-2/6",
            "md:w-1/4 md:h-1/2 md:m-auto",
          ])}
          onClick={imageOnClick}
        /> */}
        {/* <div className={cn([
          "max-sm:absolute",
          "w-1/4 text-center m-auto mt-8"
        ])}>
          <div className={cn([
            // "bg-red-100",
            "bg-white",
            "before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0",
            "shadow-2xl rounded-xl",
            // "blur-md opacity-75"
            "relative overflow-hidden"
          ])}>
            <div id="card-name" className="text-center text-3xl p-2">
              {props.cardData?.name}
            </div>
            <div id="card-action" className={cn([
              "md:text-center p-2"
            ])}>
              {props.cardData?.oracle_text}
            </div>
           
          </div>
         
        </div> */}
        {/* <MuiCard sx={{ 
            // width: 400, 
            width: {
              xs: 300,
              md: 400
            }
            // maxWidth: "50%",
            // minWidth: "50%",
        }}>
          <CardActionArea onClick={imageOnClick} id={props.cardData?.name}>
          <img
          id={props.cardData?.name}
          src={props.cardData?.image_uris?.art_crop}
          alt=""
          className={cn([
            "hover:cursor-pointer",
            "max-sm:w-2/6",
            "md:w-full md:h-full md:m-auto",
          ])}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component={"div"}>
              {props.cardData?.name}
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              {props.cardData?.oracle_text}
            </Typography>
          </CardContent>
          </CardActionArea>
        </MuiCard> */}
      {/* </div> */}
      {/* <MuiCard sx={{width: {sm: 300, md: 400}}}>
      <CardActionArea>
      <CardContent> */}
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
          cursor: "pointer"
        }}
        onClick={imageOnClick}
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
              {/* {props.cardData?.name} */}
              Quick Stats
            </Typography>
            <Typography variant="body2" color={"text.secondary"} sx={{overflow: "hidden", whiteSpace: "nowrap", textAlign: { sm: "left", md: "center"}}}>
              {`Card Name: ${props.cardData?.name}`}
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
      {/* </CardContent>
      </CardActionArea> 
      </MuiCard> */}
    </div>
  );
};
