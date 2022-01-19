import React from "react";

export const Tile = ({ item }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{item.name}</p>
      {Object.values(item).map((item, i) => (
        <p key={i} className="tile">
          {item}
        </p>
      ))}
    </div>
  );
};
