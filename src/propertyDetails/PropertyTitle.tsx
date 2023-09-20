import React from "react";
import styled from "styled-components";

type PropertyTitleProps = {
  title?: string;
  route?: string;
};

export const AccomodationHeading = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const PropertyTitle: React.FC<PropertyTitleProps> = ({ title, route }) => {
  return title ? (
    <AccomodationHeading href={route}> {title}</AccomodationHeading>
  ) : null;
};

export default PropertyTitle;
