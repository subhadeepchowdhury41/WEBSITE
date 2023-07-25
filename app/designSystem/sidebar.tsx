import React from "react";
import './sidebar.css';
import { useMediaQuery } from 'react-responsive';

interface ButtonProps {
    page: string;
    array: Array<{}>;
}



const Sidebar: React.FC<ButtonProps> = ({ page, array }) => {
    const isSidebar = useMediaQuery({ minWidth: 700 });

    return (
        <>
            {isSidebar ?
                <div className="sidebar">
                    <span className="sidebar-location">
                        About {'>'} Staff
                    </span>
                    <br></br>
                    <span className="sidebar-heading">
                        {page}
                    </span>
                    <br></br>
                    {array[0].headings.map((index) => {
                        return (
                            <>
                                <div className="sidebar-subheading">
                                    {index.label}
                                </div>
                                <ul>
                                    {array[index.id].subheadings.map((i) => {
                                        return (<li>{i.label}</li>)
                                    })}
                                </ul>
                            </>
                        )


                    })}


                </div>
                : ""}
        </>
    );
};

export default Sidebar;
