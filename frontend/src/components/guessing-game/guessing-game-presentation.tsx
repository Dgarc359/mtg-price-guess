import { Card } from "../../lib/types";
import { cn } from "../../lib/utils";
import { CardView } from "../card/card-presentation";
import { ResultsModal } from "../results-modal";

interface Props {
  firstCard: Card | undefined
  secondCard: Card | undefined
  onPlayerChoiceClick: (e: any) => any
  onModalCloseClick: (e: any) => any
  modalVisible: boolean,
  playerChoice: string | undefined
  winningCard: Card | undefined
  playerStreak: number
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
    winningCard,
    playerStreak,
  } = props;

  return (
    <>
      <div id="main-container" className={
        cn([
          // "bg-gray-400",
          "max-sm:block max-sm:pt-10",
          "max-lg:flex lg:flex",
        ])
      }
      >
        <div className={cn([
          // "flex justify-evenly w-full"
          modalVisible ? "blur-md" : "",
          "sm:flex-row",
          "md:flex md:justify-evenly w-full"
        ])}>
          <CardView cardData={firstCard} imageOnClick={onPlayerChoiceClick} />
          {/* <div className={
            cn([
              "max-sm:bg-red-500 max-sm:invisible",
              "md:w-2 md:h-screen md:bg-black",
            ])
          }/> */}
          {/* <div id="divider" className={cn(["w-1/3 h-full"])}></div> */}
          <div
            className={cn([
              "flex", "md:flex-col",
              "py-4 m-4 px-4",
              // "max-sm:px-4 max-sm:py-4 max-sm:m-4"
            ])}
          >
            <div className={cn(["max-sm:pr-4"])}>Current Streak</div>
            <div className={cn(["md:text-center"])}>{playerStreak}</div>
          </div>
          <CardView cardData={secondCard} imageOnClick={onPlayerChoiceClick} />
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