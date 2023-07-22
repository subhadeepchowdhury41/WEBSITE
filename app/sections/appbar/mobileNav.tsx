/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import '../../../styles/mobilemenu.css'

interface SubMenuItem {
    label: string;
    link: string;
}
interface SubMenu {
    items: SubMenuItem[];
}
interface MenuItem {
    label: string;
    index: number;
    submenu: SubMenu[];
}

interface Menu {
    items: MenuItem[];
}

interface MegaMenuProps {
    menus: Menu[];
}

const MobileNavMenu: React.FC<MegaMenuProps> = ({ menus }) => {
    const [sub, setSub] = useState(0)
    const ShowSubMenuFunc = (id: React.SetStateAction<number>) => {
        if (sub === id)
            setSub(0)
        else
            setSub(id)
    }
    return (

        < div className='mobile-menu-outbox' >
            {
                menus.map((menu, idx) => (
                    <div className='menu-box'>
                        {menu.items.map((index) => (
                            <div className='menu-title' onClick={() => ShowSubMenuFunc(index.index)}>
                                <span>{index.label}</span>
                                <hr className='menu-hr' />
                                <span>{index?.submenu?.map((iter) => (
                                    <div className={sub === index.index ? 'menu-sub-box active' : 'menu-sub-box'}
                                        style={sub === index.index ? { height: `${iter.items.length * 62 + 20}px` } : {}}>
                                        {iter?.items?.map((ind) => (
                                            // eslint-disable-next-line react/jsx-key
                                            <div className='menu-sub-title'>
                                                <a href={ind.link}>{ind.label}</a>
                                            </div>
                                        ))}
                                    </div>
                                ))}</span>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div >

    );
};

export default MobileNavMenu;