"use client"

import Image from "next/image";

import {useOpen} from "@/app/lib/hooks";

import '@/app/styles/globals.scss';
import s from './dropdown.module.scss';

export const Dropdown = () => {
    const {isOpen, handleChangeVisible} = useOpen();

    const iconStyleClass = `dropdown__icon${isOpen ? '_rotate' : ''}`;
    const descriptionStyle = `dropdown__description${isOpen ? '' : '_hide'}`;

    return(
        <div className={s.dropdown} onClick={handleChangeVisible}>
            <span className={"text_large"}>Что такое современный поиск</span>
            <div className={s[iconStyleClass]}>
                <Image src={'/arrow.svg'} alt={'arrow'} fill />
            </div>

            <div className={s[descriptionStyle]}>
                <span className={"text"}>
                    Процесс поиска неструктурированной документальной информации, удовлетворяющей информационные потребности
                </span>
            </div>
        </div>
    )
}