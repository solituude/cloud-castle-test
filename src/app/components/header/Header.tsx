"use client"
import Image from "next/image";

import s from './header.module.scss';
import React, {useState} from "react";
import {Drawer} from "@mui/material";

interface IMenuItem {
    title: string,
    href: string,
}

const MENU_ITEMS: IMenuItem[] = [
    {title: "Что ждет", href: "#whatWaitingFor"},
    {title: "Маршрут", href: "#path"},
    {title: "Бинго", href: "#bingo"},
    {title: "FAQs", href: "#faqs"},

];


export const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if ((event.type === 'keydown') &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setOpenMenu(open);
        };
    return (
        <header className={s.header}>
            <div className={s.header__imageLogo}>
                <Image src={'/logo.svg'} alt={'logo'} fill />
            </div>


            <menu className={s.header__menu}>
                {
                    MENU_ITEMS.map(item => (
                        <a href={item.href} key={item.href}>
                            <span>{item.title}</span>
                        </a>
                    ))
                }
            </menu>

            <div className={s.burger__menu}>
                <button onClick={toggleDrawer(true)} className={s.burger__button}>
                    <Image src={"/burger.svg"} alt={'sideMenu'} fill/>
                </button>
                <Drawer
                    anchor={'right'}
                    open={openMenu}
                    onClose={toggleDrawer(false)}>
                    {
                        MENU_ITEMS.map(item => (
                            <a href={item.href} key={item.href} onClick={toggleDrawer(false)}>
                                <span>{item.title}</span>
                            </a>
                        ))
                    }
                </Drawer>
            </div>
        </header>
    )
}