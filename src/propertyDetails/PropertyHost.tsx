import React from "react";

type Host = {
  name: string;
};

type PropertyHostProps = {
  host?: Host;
};

const PropertyHost: React.FC<PropertyHostProps> = ({ host }) => {
  return host ? (
    <div>
      <h3>Hostiteľ</h3>
      <p>Meno: {host.name}</p>
    </div>
  ) : null;
};

export default PropertyHost;
