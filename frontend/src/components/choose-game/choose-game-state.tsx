import { gameChoices } from "../state-orchestrator";
import { ChooseGamePresentation } from "./choose-game-presentation";

export const ChooseGameState = (props:any) => {
    function redirectChoice(choice:string){
        props.setGameChoice(gameChoices[0])
    }
    const onPlayerChoiceClick = (e: any) => {
        console.log(gameChoices)
        
        
    }
    return(
        
        <ChooseGamePresentation
        onPlayerChoiceClick = {onPlayerChoiceClick}
        redirectChoice = {redirectChoice}
        />
    )
}