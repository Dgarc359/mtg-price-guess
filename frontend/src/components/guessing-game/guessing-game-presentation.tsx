import { Card } from "../../lib/types";
import { CardView } from "../card/card-presentation";

interface Props {
  firstCard: Card | undefined
  secondCard: Card | undefined
}

/**
 * CSS and element positioning for guessing game
 * @param props
 * @returns 
 */
export const GuessingGamePresentation =  (props: Props) => {
  const {
    firstCard, 
    secondCard
  } = props;
  
  return (<>
      <div id="main-container" className="flex">
        <CardView card={firstCard} />
        <div className="w-2 h-screen bg-black"></div>
        <CardView card={secondCard}/>
      </div>
    </>)
}