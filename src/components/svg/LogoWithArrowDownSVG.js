import React from "react";

const SvgText = ({
  className = "svg-text",
  text,
  fontSize = 16,
  fontFamily = "Arial",
  color = "black",
}) => {
  return (
    <svg className={className} width="180" height="65">
      <text
        x="10"
        y="32"
        fontSize={fontSize}
        fontFamily={fontFamily}
        fill={color}
      >
        {text}
      </text>
      <polygon points="54,40 79,58 104,40" fill={color} />
    </svg>
  );
};

export default SvgText;
