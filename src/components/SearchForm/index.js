import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="cities">Country:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="city"
          list="cities"
          type="text"
          className="form-control"
          placeholder="Type in a country code to begin (Ex: Great Britain = gb)"
          id="city"
        />        <datalist id="citiess">

        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;