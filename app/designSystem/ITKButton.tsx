import React from "react";
import "./ITKButton.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: "small" | "large";
}

const ITKButton: React.FC<ButtonProps> = ({ text, onClick, disabled, size }) => {
  let className = "button";

  if (size === "small") {
    className += " button--small";
  } else if (size === "large") {
    className += " button--large";
  }

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ITKButton;
