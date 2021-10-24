import React, { useState } from "react";
import { useLocation } from "react-router";
import queryString from "query-string";

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { search = "" } = queryString.parse(location.search);

  const [inputValue, setInputValue] = useState(search);

  const _handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const _handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?search=${inputValue}`);
  };

  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center">Search</h1>
        <div className="row">
          <div className="col-6">
            <form onSubmit={_handleSubmit}>
              <label className="form-label w-100">
                Character:
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name Character"
                  autoComplete="off"
                  value={inputValue}
                  onChange={_handleChange}
                />
              </label>
              <button type="submit" className="btn btn-success w-100">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
