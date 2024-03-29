import { GameChoice, gameChoices } from "../state-orchestrator";
import useImage from "../../hooks/use-image";
import { cn } from "../../lib/utils";
import { Component } from "react";

function getImageUrl(name: string) {
    let c = new URL(`../../assets/img/${name}`, import.meta.url).href
    return c
}
interface CardChoice{
    choice: string,
    cardName: string,
    onClick: (e:any)=>void
}
const GameButton = (props: CardChoice) => {

    const cardBack = getImageUrl(props.cardName)

    return (
        <div  className="" >
            <button id={props.choice} onClick = {props.onClick}>
                <img id={props.choice} src={cardBack} alt="Card Back" className="w-45 h-64 transition duration-300 ease-in-out hover:scale-110 "  />
            </button>
        </div>

    )
}

const Logo = () => {
    return (
        <div id="logo-container" className="flex bg-slate-300 justify-center p-8">
            <div id="logo" className="rounded-full bg-black ">
                <img src="mtg-guessing-game-logo.svg" className="w-24 h-24 rounded-full" />
            </div>
        </div>)
}
interface Props{
    onClick: (e: any) => void,
}
export const ChooseGamePresentation = (props: Props) => {
    const {
        onClick,
    }=props;
    return (

        <div id="background" className="h-full bg-slate-300" >
            <Logo />
            <div id="header" className="pb-5 flex justify-center sm: text-4xl">
                Choose a TCG
            </div>
            <p id="description" className="pb-5 px-5 sm:text-center">After choosing one of the TCG below,
                you will be redirected to choose between 2 random cards in that TCG. Pick the card you think
                is worth more. </p>
            <div id="container" className="flex justify-center gap-10">
                {gameChoices.map((choice: string) => {
                    const t = choice.split(" ").join("") + ".png"
                    
                    return <GameButton choice={choice} cardName={t} key={t} onClick = {onClick}/>
                })}
            </div>
        </div>

    )
}
