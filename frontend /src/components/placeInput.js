import React from "react";
import formStyles from "./form.module.scss";
import inputFieldStyles from "./inputField.module.scss";
import PlacesAutocomplete from "react-places-autocomplete";

/*global google*/

const PlaceInput = (props) => {
  const handlePlaceChange = (address) => {
    props.setAddress({ name: "address", value: address });
  };

  const handlePlaceSelect = (address) => {
    props.setAddress({ name: "address", value: address });
    // geocodeByAddress(address)
    //   .then((results) => getLatLng(results[0]))
    //   .then((latLng) => console.log("Success", latLng))
    //   .catch((error) => console.error("Error", error));
  };

  return (
    <PlacesAutocomplete
      value={props.address.value || ""}
      onChange={handlePlaceChange}
      onSelect={handlePlaceSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <div className={inputFieldStyles.inputContainer}>
            <input
              {...getInputProps({
                placeholder: "Adres inwestycji",
                className: inputFieldStyles.input,
              })}
            />
          </div>
          <div className={formStyles.dropdownWrapper}>
            <div className={formStyles.dropdownContainer}>
              {loading && <div></div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? `${formStyles.activeSuggestionItem} ${formStyles.suggestionItem}`
                  : formStyles.suggestionItem;
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                  >
                    <span className={formStyles.suggestionText}>
                      {suggestion.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default PlaceInput;
