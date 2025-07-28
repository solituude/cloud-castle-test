"use client"

import ReactCardFlip from "react-card-flip";

import {IBingoCard} from "@/app/lib/types";

import "@/app/styles/globals.scss";
import s from './cards.module.scss';
import {useOpen} from "@/app/lib/hooks";

export const FlipCard = (card: IBingoCard) => {
    const {isOpen, handleChangeVisible} = useOpen();

    return (
        <ReactCardFlip isFlipped={isOpen} flipDirection={"horizontal"}>
            <button onClick={handleChangeVisible} className={s.flipCard_front}>
                <h3 className={"h3"}>{card.term}</h3>
                <img src={card.backgroundIcon} alt={card.backgroundIcon} />
            </button>

            <button onClick={handleChangeVisible} className={s.flipCard_back}>
                <span className={"text"}>{card.definition}</span>
            </button>
        </ReactCardFlip>
    )
}