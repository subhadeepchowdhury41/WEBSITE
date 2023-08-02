"use client";
import React from "react";
import "./sidebar.css";

interface HeadingInterface {
  label: string;
  id: number;
}
interface SubHeadingInterface {
  label: string;
  link: string;
}
interface ArrayInterface {
  headings?: Array<HeadingInterface>;
  subheadings?: Array<SubHeadingInterface>;
}
interface SidebarProps {
  location: string;
  page: string;
  array: Array<ArrayInterface>;
}


const Sidebar: React.FC<SidebarProps> = ({ page, array, location }) => {

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
                    <a href={i.link}>
                      <span >{i.label}</span>
                    </a>
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
