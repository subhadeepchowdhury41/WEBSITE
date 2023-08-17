import React from 'react';
import '../../../styles/globals.css'
interface MenuItem {
  label: string;
  type?: string;
  link: string;
}

interface Menu {
  items: MenuItem[];
}

interface MegaMenuProps {
  menus: Menu[];
}

const MegaMenu: React.FC<MegaMenuProps> = ({ menus }) => {
  return (
    <div className="navbar p-7 m-0 rounded-md" style={{ display: 'flex' }}>
      {menus.map((menu, index) => (
        <div className="dropdown" key={index} style={{ flex: 1 }}>
          <div className="dropdown-content" style={{ marginLeft: `` }}>
            {menu.items.map((item, itemIndex) => (
              <a className='dropdown-link' key={itemIndex} href={item.link}>{item.label}</a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
