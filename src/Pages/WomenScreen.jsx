import React from "react";
import Card from "../Components/Card";
import { Characters } from "../models/Characters";

const WomenScreen = () => {
  const womens = Characters.filter((character) => character.type === "m");
  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center">WOMEN</h1>
        <div className="row">
          {womens.map((women) => (
            <Card key={women.id} {...women} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WomenScreen;
