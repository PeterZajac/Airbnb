import React from "react";

type PropertyTitleProps = {
  title?: string;
};

const PropertyTitle: React.FC<PropertyTitleProps> = ({ title }) => {
  return title ? <h1>Názov ubytovania: {title}</h1> : null;
};

export default PropertyTitle;
