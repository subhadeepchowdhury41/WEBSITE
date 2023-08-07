"use client";
import React from "react";
import "./sidebar.css";

interface HeadingInterface {
  label: string;
  id: number;
}
interface SubHeadingInterface {
  label: string;
  scroll?: number;
}
interface ArrayInterface {
  headings?: Array<HeadingInterface>;
  subheadings?: Array<SubHeadingInterface>;
}
interface SidebarProps {
  location: string | null;
  page: string | null;
  array: Array<ArrayInterface>;
}


const Sidebar: React.FC<SidebarProps> = ({ page, array, location }) => {
  const handleScroll = (top: number) => {
    window.scroll({ top: top, left: 0, behavior: 'smooth' });
  };
  return (
    <div className="sidebar">
      <div className="sidebar-location">{location}</div>
      <div className="sidebar-heading">{page}</div>
      {array[0].headings?.map((index) => {
        return (
          <div key={index.id}>
            <div className="sidebar-subheading">{index.label}</div>
            <div className="ul">
              {array[index.id].subheadings?.map((i) => {
                return (
                  <>
                    <span style={{ cursor: "pointer" }} onClick={() => handleScroll(i.scroll || 0)} >{i.label}</span>
                    <br />
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
