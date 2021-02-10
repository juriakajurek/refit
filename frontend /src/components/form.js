import React, { useState } from "react";
import formStyles from "./form.module.scss";
import inputFieldStyles from "./inputField.module.scss";
import PlacesAutocomplete from "react-places-autocomplete";
import DatePicker from "react-date-picker";
import InputField from "./inputField";
import RoomLabel from "./roomLabel";

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
    console.log(address);
    setAddress(address);
    // geocodeByAddress(address)
    //   .then((results) => getLatLng(results[0]))
    //   .then((latLng) => console.log("Success", latLng))
    //   .catch((error) => console.error("Error", error));
  };

  const manageArea = (value) => {
    if (
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(
        parseInt(
          value[
            value.length - 1 //jesli ostatnia jest cyfrą
          ]
        )
      ) &&
      !value[value.length - 2].match(/[a-z]/i) //i przed ostatnia nie jest literą
    ) {
      return value + "m²";
    } else if (
      value[value.length - 2] === "m" &&
      value[value.length - 1] === "2"
    ) {
      let curr = value;
      curr = curr.replace("2", "²");
      return curr.toString();
    } else return value;
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
                  className: inputFieldStyles.input,
                })}
              />
              <div className={formStyles.dropdownContainer}>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? formStyles.activeSuggestionItem
                    : formStyles.suggestionItem;
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
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
        <DatePicker
          onChange={setStartDate}
          value={startDate}
          className={inputFieldStyles.input}
        />

        <p className={formStyles.question}>
          Jaka jest powierzchnia użytkowa inwestycji?
        </p>
        <InputField
          placeholder="np. 60m²"
          onBlur={(i) => {
            i.currentTarget.value = manageArea(
              i.currentTarget.value.toString()
            );
          }}
        ></InputField>
        <p className={formStyles.question}>
          Wybierz pomieszczenia którymi mamy się zająć.
        </p>
        <RoomLabel>Kuchnia</RoomLabel>
        <RoomLabel>Łazienka 1</RoomLabel>
        <RoomLabel>Łazienka 2</RoomLabel>
        <RoomLabel>Przedpokój</RoomLabel>
        <p className={(formStyles.questionm, formStyles.black)}>Inne</p>
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
