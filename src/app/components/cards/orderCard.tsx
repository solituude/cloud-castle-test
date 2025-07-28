import Image from "next/image";

import {IOrderStage} from "@/app/lib/types";

import s from './cards.module.scss';

export const OrderCard = (stage: IOrderStage) => {
    return (
        <button className={s.orderCard__button}>
            <div className={s.orderCard__img}>
                <Image src={`/${stage.icon}`}
                       alt={stage.title}
                       fill />
            </div>
            <h3 className={"h3"}>{stage.title}</h3>
        </button>
    )
}