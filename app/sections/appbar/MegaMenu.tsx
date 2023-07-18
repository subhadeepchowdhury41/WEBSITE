import React from 'react';

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
    // <div className='navbar'>
    <div className="navbar p-7 m-0 rounded-md" style={{ display: 'flex' }}>
      {menus.map((menu, index) => (
        <div className="dropdown" key={index} style={{ flex: 1 }}>
          <div className="dropdown-content" style={{ marginLeft: `` }}>
            {/* <ul style={{ listStyle: 'none', padding: 0 }}> */}
            {menu.items.map((item, itemIndex) => (
              // <li key={itemIndex}>
              <a className='dropdown-link' key={itemIndex} href={item.link}>{item.label}</a>
              // </li>
            ))}
            {/* </ul> */}
          </div>
        </div>
      ))}
    </div>
    // </div>
  );
};

export default MegaMenu;
