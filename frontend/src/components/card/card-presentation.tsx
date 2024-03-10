import { Card as MuiCard, CardMedia, CardContent, Typography, CardActionArea, Paper, Grid, IconButton, Skeleton } from "@mui/material";
import React from "react";
import { Card } from "../../lib/types";
import { cn } from "../../lib/utils";

interface ICard {
  cardData: Card | undefined;
  imageOnClick?: (event?: unknown) => void;
  onClickDisabled: boolean;
  timePassed: boolean;
}

export const CardView = (props: ICard) => {
  const {
    imageOnClick,
    onClickDisabled,
    timePassed,
  } = props;

  return (
    <div
      id={`card-container`}
      className={cn([
        "p-4 m-4"
      ])}
    >
      <IconButton
        id={props.cardData?.name}
        onClick={onClickDisabled ? imageOnClick : () => {}}
      >
      <Paper
        sx={{
          p:2,
          margin: "auto",
          flexGrow: 1,
          backgroundColor: "#fff",
          width: {
            sm: 300,
            md: 400,
          },
          cursor: onClickDisabled && timePassed ? "pointer" : "default"
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={12} xs={4}>
            {
              timePassed ?
              <img
                id={props.cardData?.name}
                src={props.cardData?.image_uris?.png}
                alt=""
                width={400}
                height={500}
                className={cn([
                  "max-sm:w-[90%]",
                  "md:w-[70%] md:m-auto",
                ])}
              /> :
              <Skeleton
                variant="rounded"
                sx={{
                  margin: "auto",
                  width: {
                    sm: 100,
                    md: 300,
                  },
                  height: {
                    sm: 150,
                    md: 400,
                  }

                }}
              />
            }

          </Grid>
          <Grid item md={12} xs={8}>
            {
              timePassed ?
              <Typography gutterBottom variant="h5" component={"div"} sx={{textAlign: {sm: "left", md: "center"}}}>
                {props.cardData?.name}
              </Typography>
              : <Skeleton
                variant="text"
                sx={{
                  margin: "auto",
                  width: {
                    md: 300,
                    sm: 300,
                  },
                  height: {
                    md: 40,
                    sm: 40,
                  }
                }}
              />
            }
            {
              timePassed ?
              <Typography variant="body2" color={"text.secondary"} sx={{textAlign: {sm: "left", md: "center"}}}>
              {props.cardData?.legalities.modern === "legal" ? "Legal in Modern" : "Illegal in Modern"}
              </Typography> :
              <Skeleton
                variant="text"
                sx={{
                  margin: "auto",
                  width: {
                    md: 200,
                    sm: 100,
                  },
                  height: 20,
                }}
              />
            }

            {
              timePassed ?
              <Typography variant="body2" color={"text.secondary"} sx={{textAlign: {sm: "left", md: "center"}}}>
              {`Set: ${props.cardData?.set_name}`}
              </Typography> :
              <Skeleton
                variant="text"
                sx={{
                  margin: "auto",
                  width: {
                    md: 200,
                    sm: 100,
                  },
                  height: 20,
                }}
              />
            }
          </Grid>

        </Grid>
      </Paper>
      </IconButton>
    </div>
  );
};
