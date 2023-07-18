import React from "react";
import './header.css';

interface ButtonProps {
  text: string;
}

const HEADER: React.FC<ButtonProps> = ({ text }) => {

  return (
    <span className='achievment-header'>
        <hr/>
          <p>{text}</p>
        <hr/>         
    </span>
  );
};

export default HEADER;
