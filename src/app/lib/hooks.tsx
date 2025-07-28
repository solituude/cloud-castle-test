import React, {useState} from "react";

export const useMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if ((event.type === 'keydown') &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setOpenMenu(open);
        };

    return {openMenu, toggleMenu};
}

export const useOpen = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleChangeVisible = () => {
        setIsOpen(!isOpen);
    }

    return {isOpen, handleChangeVisible};
}