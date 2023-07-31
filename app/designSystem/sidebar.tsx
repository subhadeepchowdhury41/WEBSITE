"use client";
import React from "react";
import "./sidebar.css";
import { useMediaQuery } from "react-responsive";

interface SidebarProps {
  location: string;
  page: string;
  array: Array<{}>;
}

const Sidebar: React.FC<SidebarProps> = ({ page, array, location }) => {
  const isSidebar = useMediaQuery({ minWidth: 700 });

  return (
    <>
      {isSidebar ? (
        <div className="sidebar">
          <span className="sidebar-location">{location}</span>
          <br></br>
          <span className="sidebar-heading">{page}</span>
          <br></br>
          {array[0].headings.map((index) => {
            return (
              <>
                <span className="sidebar-subheading">{index.label}</span>
                <ul>
                  {array[index.id].subheadings.map((i) => {
                    return (
                      <>
                        <a href={i.link}>
                          <li>{i.label}</li>
                        </a>
                      </>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
