import { Card } from "../../lib/types";
import { cn } from "../../lib/utils";
import { CardView } from "../card/card-presentation";
import { ResultsModal } from "../results-modal";
import {Typography} from '@mui/material';
import { LoadingCard } from "../card/loading-card-presentation";

interface Props {
  firstCard: Card | undefined
  secondCard: Card | undefined
  onPlayerChoiceClick: (e: any) => any
  onModalCloseClick: (e: any) => any
  modalVisible: boolean,
  playerChoice: string | undefined
  playerStreak: number
  timePassed: boolean
}

/**
 * CSS and element positioning for guessing game
 * @param props
 * @returns 
 */
export const GuessingGamePresentation = (props: Props) => {
  const {
    firstCard,
    secondCard,
    onPlayerChoiceClick,
    modalVisible,
    onModalCloseClick,
    playerChoice,
    playerStreak,
    timePassed,
  } = props;
  const winningCard = Number(firstCard?.prices.usd) > Number(secondCard?.prices.usd)
    ? firstCard
    : secondCard;

  return (
    <>
      <div id="main-container" className={
        cn([
          "max-sm:block max-sm:pt-10",
          "max-lg:flex lg:flex",
        ])
      }
      >
        <div className={cn([
          modalVisible ? "blur-md" : "",
          "sm:flex-row",
          "md:flex md:justify-evenly w-full"
        ])}>
            <CardView cardData={firstCard} imageOnClick={onPlayerChoiceClick} onClickDisabled={!modalVisible} timePassed={timePassed}/>
          <div
            className={cn([
              "flex", "flex-col",
              "py-4 m-4 px-4",
            ])}
          >
            <Typography variant="h4" sx={{
              textAlign:"center", 
            }}>
              Current Streak
            </Typography>
            <Typography variant="h4" sx={{textAlign: "center"}}>
              {playerStreak}
            </Typography>
          </div>
          <CardView cardData={secondCard} imageOnClick={onPlayerChoiceClick} onClickDisabled={!modalVisible} timePassed={timePassed}/>
        </div>
      </div>

      <ResultsModal
        id="results-modal"
        visible={modalVisible}
        onModalCloseClick={onModalCloseClick}
        playerChoice={playerChoice}
        winningCard={winningCard}
        firstCard={firstCard}
        secondCard={secondCard}
      />
    </>)
}