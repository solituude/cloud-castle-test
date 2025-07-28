"use client"
import Image from "next/image";
import {useEffect, useRef} from "react";

import {Drawer} from "@mui/material";

import {MENU_ITEMS} from "@/app/lib/constants";
import {useMenu} from "@/app/lib/hooks";

import s from './header.module.scss';


export const Header = () => {
    const {openMenu, toggleMenu} = useMenu();
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (headerRef.current) {
                    headerRef.current.classList.toggle(s.scrolled, !entry.isIntersecting);
                }
            },
            { threshold: 0.1 }
        );

        const target = document.querySelector("#begin");
        if (target) observer.observe(target);

        return () => observer.disconnect();
    }, []);

    return (

        <header ref={headerRef} className={s.header}>
            <a href={'#start'}>
            <div className={s.header__imageLogo}>
                <Image src={'/logo.svg'} alt={'logo'} fill />
            </div></a>


            <menu className={s.header__menu}>
                {
                    MENU_ITEMS.map(item => (
                        <a href={item.href} key={item.href}>
                            <span className={"text"}>{item.title}</span>
                        </a>
                    ))
                }
            </menu>

            <div className={s.burgerMenu__container}>
                <button onClick={toggleMenu(true)} className={s.burgerMenu__button}>
                    <Image src={"/burger.svg"} alt={'sideMenu'} fill/>
                </button>
                <Drawer
                    anchor={'right'}
                    open={openMenu}
                    onClose={toggleMenu(false)}>
                    <div className={s.burgerMenu}>
                        {
                            MENU_ITEMS.map(item => (
                                <a href={item.href} key={item.href} onClick={toggleMenu(false)}>
                                    <span className={"text"}>{item.title}</span>
                                </a>
                            ))
                        }
                    </div>

                </Drawer>
            </div>
        </header>
    )
}