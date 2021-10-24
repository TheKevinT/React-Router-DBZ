import React, { useEffect, useState, useRef} from "react";
import { useLocation } from "react-router";
import queryString from "query-string";
import { Characters } from "../models/Characters";
import Card from "../Components/Card";

const SearchScreen = ({ history }) => {
  const  textInput = useRef(null);
  const location = useLocation();
  const { search = "" } = queryString.parse(location.search);

  const [inputValue, setInputValue] = useState(search);
  const [characters, setCharacters] = useState([]);

  const _handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const _handleSubmit = (e) => {
    e.preventDefault();
    textInput.current.reset();
    history.push(`?search=${inputValue}`);
  };

  const getCharacters = () => {
    if (inputValue.trim() !== "") {
      const value = inputValue.toLocaleLowerCase();
      const newValue = Characters.filter((char) =>
        char.name.toLocaleLowerCase().includes(value)
      );
      setCharacters(newValue);
    } else {
      setCharacters([]);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [search]);

  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center">Search</h1>
        <div className="row">
          <div className="col-6">
            <form onSubmit={_handleSubmit}  ref={textInput}>
              <label className="form-label w-100">
                Character:
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name Character"
                  autoComplete="off"
                  onChange={_handleChange}
                />
              </label>
              <button type="submit" className="btn btn-success w-100">
                Search
              </button>
            </form>
          </div>
          <div className="col-6">
            <h2>Results: {characters.length}</h2>
            {characters.length === 0 && (
              <div className="alert alert-danger text-center">
                Please search a character !
              </div>
            )}
            {characters.map((character) => (
              <Card key={character.id} {...character} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
