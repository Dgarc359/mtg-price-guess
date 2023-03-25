import { Card } from "../../lib/types";
import { cn } from "../../lib/utils";

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

    return (
        <div id={id}
            className={
                cn([
                    visible ? "" : "invisible",
                    "fixed z-1 top-10 w-1/3 h-1/3 overflow-auto bg-white left-1/3"
                ])
            }
        >

        <div>
            <span onClick={() => onModalCloseClick(playerChoice === winningCard?.name)} className="cursor-pointer">&times;</span>
            <p>{`You chose ${playerChoice}. Which is ${playerChoice === winningCard?.name ? "Correct!!" : "Incorrect!!"}`}</p>
            <p>{`${firstCard?.name} price: $${firstCard?.prices.usd}`}</p>
            <p>{`${secondCard?.name} price: $${secondCard?.prices.usd}`}</p>
          </div>
        </div>
    )
}