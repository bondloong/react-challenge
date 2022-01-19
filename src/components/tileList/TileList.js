import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => {
  return (
    <div>
      {data?.map((item, i) => (
        <Tile key={i} item={item} />
      ))}
    </div>
  );
};
