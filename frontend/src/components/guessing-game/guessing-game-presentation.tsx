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
  } = props;
  
  return (<>
      <div id="main-container" className={
          cn([
            "max-sm:block",
            "max-lg:flex",
            "lg:flex",
          ])
        }
      >
        
        <CardView 
          cardData={firstCard}
          imageOnClick={onPlayerChoiceClick}
        />
        <div className={
          cn([
            "max-sm:bg-red-500 max-sm:invisible",
            "md:w-2 md:h-screen md:bg-black",
          ])
        }/>
        <CardView cardData={secondCard} imageOnClick={onPlayerChoiceClick}/>
      </div>
      <div id="modal" className={
          cn([
            modalVisible ? "" : "invisible",
            "fixed z-1 top-10 w-1/3 h-1/3 overflow-auto bg-white left-1/3",
          ])
        }>
          <div>
            <span onClick={onModalCloseClick} className="cursor-pointer">&times;</span>
            <p>{`You chose ${playerChoice}. Which is ${playerChoice === winningCard?.name ? "Correct!!" : "Incorrect!!"}`}</p>
            <p>{`${firstCard?.name} price: $${firstCard?.prices.usd}`}</p>
            <p>{`${secondCard?.name} price: $${secondCard?.prices.usd}`}</p>
          </div>
        </div>
    </>)
}