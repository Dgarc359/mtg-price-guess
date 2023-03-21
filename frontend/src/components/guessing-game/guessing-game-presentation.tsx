import { Card } from "../../lib/types";
import { cn } from "../../lib/utils";
import { CardView } from "../card/card-presentation";

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
export const GuessingGamePresentation =  (props: Props) => {
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
  
  return (<>
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
        <CardView cardData={secondCard} imageOnClick={onPlayerChoiceClick}/>
      </div>
      </div>
      <div id="modal" className={
          cn([
            modalVisible ? "" : "invisible",
            "fixed z-1 top-10 w-1/3 h-1/3 overflow-auto bg-white left-1/3",
          ])
        }>
          <div>
            <span onClick={() => onModalCloseClick(playerChoice === winningCard?.name)} className="cursor-pointer">&times;</span>
            <p>{`You chose ${playerChoice}. Which is ${playerChoice === winningCard?.name ? "Correct!!" : "Incorrect!!"}`}</p>
            <p>{`${firstCard?.name} price: $${firstCard?.prices.usd}`}</p>
            <p>{`${secondCard?.name} price: $${secondCard?.prices.usd}`}</p>
          </div>
        </div>
    </>)
}