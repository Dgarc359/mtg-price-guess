import { Card } from "../../lib/types";
import { cn } from "../../lib/utils";
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
      <div id="main-container" className={
          cn([
            "max-sm:block",
            "max-lg:flex",
            "lg:flex",
          ])
        }
      >
        <CardView cardData={firstCard} />
        <div className={
          cn([
            "max-sm:bg-red-500 max-sm:invisible",
            "md:w-2 md:h-screen md:bg-black",
          ])
        }/>
        <CardView cardData={secondCard} />
      </div>
    </>)
}