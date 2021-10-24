import React from "react";
import Card from "../Components/Card";
import { Characters } from "../models/Characters";

const MenScreen = () => {
  const mens = Characters.filter((character) => character.type === "h");
  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center">Men</h1>
        <div className="row">
          {mens.map((men) => (
            <Card key={men.id} {...men} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MenScreen;
