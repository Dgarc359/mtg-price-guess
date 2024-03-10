import { gameChoices } from "../state-orchestrator";
import { ChooseGamePresentation } from "./choose-game-presentation";
interface Props {
    setGameChoice: React.Dispatch<React.SetStateAction<"Pokemon" | "Magic The Gathering" | undefined>>
    
}
export const ChooseGameState = (props:Props) => {
    type ev = {
        target: HTMLElement
    }
    
    const onPlayerChoiceClick = (e: ev) => {
       props.setGameChoice(e.target.getAttribute('id') as any)
    }

    return(<ChooseGamePresentation onClick = {onPlayerChoiceClick}/>)
}