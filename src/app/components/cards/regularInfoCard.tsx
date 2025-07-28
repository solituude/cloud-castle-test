import {IRegularInfoCard} from "@/app/lib/types";

import "@/app/styles/globals.scss";
import s from './cards.module.scss';


export const RegularInfoCard = (card: IRegularInfoCard) => {
    return(
        <div className={s.regularInfo}>
            <span className={s.regularInfo__text_large}>{card.title}</span>
            <div className={s.regularInfo__text}>
                <span className="text">{card.description}</span>
            </div>
        </div>
    )
}