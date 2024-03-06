import { gameChoices } from "../state-orchestrator";
import useImage from "../../hooks/use-image";
import { cn } from "../../lib/utils";
function getImageUrl(name:string) {
    console.log(name)
    let c = new URL(`../../assets/img/${name}`, import.meta.url).href
    console.log(c)
    return c
  }
const GameButton = (props:{choice:string, cardName:string}) => {
    // const {loading,error,image} = useImage(props.cardName)
    // if (error){
    //     return <div>There was a problem</div>
    // }
    // if (loading){
    //     return <div>We're Loading</div>
    // }
    const cardBack = getImageUrl(props.cardName)
    console.log(cardBack)
    return(

    <div id = {props.cardName} >
        <img src = {cardBack} alt = "Card Back" width = "100" height = "100"/>{props.choice}
        </div>

    )
}
export const ChooseGamePresentation = () => {
    return (
        <div >
            {gameChoices.map((choice: string)=>{
                const t = choice.split(" ").join("") + ".png"
                console.log(t)
            return <GameButton choice = {choice} cardName = {t} key = {t}/>
        })}
        </div>
       //<GameButton/>
    )
}