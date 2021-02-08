import React, { useState } from "react";
import formStyles from "./form.module.scss";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import DatePicker from "react-date-picker";

/*global google*/

const Form = () => {
  const [isHouse, setIsHouse] = useState(true);
  const [address, setAddress] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [, updateState] = useState();

  const update = () => {
    updateState({});
  };
  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  return typeof google === "object" && typeof google.maps === "object" ? (
    <header className={formStyles.form}>
      <form className={formStyles.formModule}>
        <p className={formStyles.question}>Czym mamy się zająć?</p>
        <div className={formStyles.radio}>
          <label>
            <input
              type="radio"
              value="dom"
              checked={isHouse}
              onChange={() => {
                setIsHouse(true);
              }}
            />
            <span className={formStyles.box}></span>
            <span>Dom</span>
          </label>
        </div>
        <div className={formStyles.radio}>
          <label>
            <input
              type="radio"
              value="mieszkanie"
              checked={!isHouse}
              onChange={() => {
                setIsHouse(false);
              }}
            />
            <span className={formStyles.box}></span>
            <span> Mieszkanie</span>
          </label>
        </div>

        <PlacesAutocomplete
          value={address || ""}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Adres inwestycji",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <DatePicker onChange={setStartDate} value={startDate} />
      </form>
    </header>
  ) : (
    <div>
      <h1>
        {console.log(
          setTimeout(() => {
            update();
            console.log("Ładowanie map google ...");
          }, 10)
        )}
      </h1>
    </div>
  );
};

export default Form;
