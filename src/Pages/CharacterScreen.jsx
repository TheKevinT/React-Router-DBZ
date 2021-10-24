import React from "react";
import { useParams } from "react-router";
import { Characters } from "../models/Characters";

const CharacterScreen = ({ history }) => {
  const { id } = useParams();
  const { type, name, description } = Characters.find(
    (character) => character.id === id
  );
  const path = `/assets/${type}-${id}.png`;
  const _handleBack = () => {
    history.goBack();
  };

  return (
    <>
      <div className="container row mt-5">
        <div className="col-8">
          <img
            className="img-thumbnail mt-3"
            src={path}
            alt={id}
            style={{ width: "70%", height: "600px" }}
          />
        </div>
        <div className="col-4">
          <h2>Nombre: {name}</h2>
          <p>Descripción: {description}</p>
          <button
            type="button"
            className="btn btn-warning"
            onClick={_handleBack}
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default CharacterScreen;
