import { gameChoices } from "../state-orchestrator";
import { ChooseGamePresentation } from "./choose-game-presentation";
interface Props {
    setGameChoice: React.Dispatch<React.SetStateAction<"Pokemon" | "Magic The Gathering" | undefined>>
    
}
export const ChooseGameState = (props:Props) => {
    
    type ev = {
        target: {
            id: any
        }
    }
    
    const onPlayerChoiceClick = (e: ev) => {
       console.log(gameChoices,e.target.id)
       props.setGameChoice(e.target.id)
    }

    return(<ChooseGamePresentation onClick = {onPlayerChoiceClick}/>)
}