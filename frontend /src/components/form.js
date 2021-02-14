import React, { useState, useEffect } from "react";
import formStyles from "./form.module.scss";
import inputFieldStyles from "./inputField.module.scss";
import PlacesAutocomplete from "react-places-autocomplete";
import DatePicker from "react-date-picker";
import InputField from "./inputField";
import X from "../images/x.svg";
import RoomLabel from "./roomLabel";
import { graphql, useStaticQuery } from "gatsby";
import { gql, useMutation } from "@apollo/client";
// import { useMutation, gql } from "@apollo/client";

/*global google*/

const Form = () => {
  const getRooms = useStaticQuery(graphql`
    {
      allStrapiRooms {
        edges {
          node {
            Name
            id
          }
        }
      }
    }
  `);

  const ADD_QUESTIONNAIRE = gql`
    mutation AddQuestionnaire(
      $isHouse: Boolean!
      $flatArea: Float!
      $address: String!
      $startDate: String!
      $selectedRooms: JSON!
    ) {
      createQuestionnaire(
        input: {
          data: {
            isHouse: $isHouse
            flatArea: $flatArea
            address: $address
            startDate: $startDate
            selectedRooms: $selectedRooms
          }
        }
      ) {
        questionnaire {
          isHouse
          flatArea
          address
          startDate
          selectedRooms
          id
        }
      }
    }
  `;

  const [isHouse, setIsHouse] = useState({});
  const [address, setAddress] = useState({ name: "address", value: "" });
  const [startDate, setStartDate] = useState({
    name: "startDate",
    value: new Date(),
  });
  const [flatArea, setFlatArea] = useState({
    name: "flatArea",
    value: 0,
  });
  const [selectedRooms, setSelectedRooms] = useState({
    name: "selectedRooms",
    value: [],
  });
  const [customRoom, setCustomRoom] = useState({
    name: "customRoom",
    value: "",
  });

  const [addTodo, { data }] = useMutation(ADD_QUESTIONNAIRE);

  const [, updateState] = useState();

  useEffect((e) => {
    // localStorage.setItem(isHouse.name, isHouse.value);
    // localStorage.setItem(address.name, address.value);
    // localStorage.setItem(startDate.name, startDate.value);
    // localStorage.setItem(flatArea.name, flatArea.value);
    // localStorage.setItem(selectedRooms.name, selectedRooms.value);
    // console.log(
    //   localStorage.getItem("isHouse") +
    //     " | " +
    //     localStorage.getItem("address") +
    //     " | " +
    //     localStorage.getItem("startDate") +
    //     " | " +
    //     localStorage.getItem("flatArea") +
    //     " | " +
    //     localStorage.getItem("selectedRooms")
    // );
    // console.log(isHouse);
    // console.log(Boolean(isHouse.value));
    // if (localStorage.getItem("isHouse") == String(isHouse.value)) {
    //   setIsHouse({
    //     name: "isHouse",
    //     value: Boolean(localStorage.getItem("isHouse")), ///////////MUSZE TO debagować
    //   });
    // }
    // if (localStorage.getItem("address") !== String(address.value)) {
    //   setAddress({ name: "address", value: localStorage.getItem("address") });
    // }
    // // if (localStorage.getItem("startDate") !== startDate) {
    // //   setStartDate({
    // //     name: "startDate",
    // //     value: localStorage.getItem("startDate"),
    // //   });
    // // }
    // // localStorage.getItem("startDate") !==
    // console.log(startDate);
    // // if (localStorage.getItem("flatArea") !== address) {
    // //   setFlatArea({
    // //     name: "flatArea",
    // //     value: localStorage.getItem("flatArea"),
    // //   });
    // // }
  });

  const rooms = getRooms.allStrapiRooms.edges;

  const update = () => {
    updateState({});
  };
  const handlePlaceChange = (address) => {
    setAddress({ name: "address", value: address });
  };

  const handlePlaceSelect = (address) => {
    console.log(address);
    setAddress({ name: "address", value: address });
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

  const isFormCompleted = () => {
    if (isHouse) return false;
  };
  return typeof google === "object" && typeof google.maps === "object" ? (
    <header className={formStyles.form}>
      <form
        className={formStyles.formModule}
        onSubmit={(e) => {
          e.preventDefault();
          // prettier-ignore
          addTodo({
            variables: {
              isHouse: Boolean(isHouse.value),
              flatArea: parseFloat(flatArea.value.match(/\d/g).join("")),
              address: address.value,
              startDate: startDate.value.toISOString(),
              selectedRooms: {
                "name": selectedRooms.name,
                "value": selectedRooms.value,
              },
            },
          });
        }}
      >
        <p className={formStyles.question}>Czym mamy się zająć?</p>
        <div className={formStyles.radio}>
          <label>
            <input
              type="radio"
              value="dom"
              checked={Boolean(isHouse.value)}
              onChange={() => {
                setIsHouse({ ...isHouse, value: true });
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
              checked={Boolean(!isHouse.value)}
              onChange={() => {
                setIsHouse({ ...isHouse, value: false });
              }}
            />
            <span className={formStyles.box}></span>
            <span> Mieszkanie</span>
          </label>
        </div>

        <PlacesAutocomplete
          value={address.value || ""}
          onChange={handlePlaceChange}
          onSelect={handlePlaceSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <div className={inputFieldStyles.inputContainer}>
                <input
                  {...getInputProps({
                    placeholder: "Adres inwestycji",
                    className: inputFieldStyles.input,
                  })}
                />
              </div>
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

        <div className={inputFieldStyles.inputContainer}>
          <div className={inputFieldStyles.input}>
            <DatePicker
              onChange={(e) => {
                setStartDate({ name: "startDate", value: e });
              }}
              value={startDate.value}
              className={inputFieldStyles.datePicker}
              calendarClassName={inputFieldStyles.calendar}
            />
          </div>
        </div>

        <p className={formStyles.question}>
          Jaka jest powierzchnia użytkowa inwestycji?
        </p>
        <InputField
          spellcheck="false"
          placeholder="np. 60m²"
          value={flatArea.value}
          onBlur={(i) => {
            i.currentTarget.value = manageArea(
              i.currentTarget.value.toString()
            );
            setFlatArea({
              name: flatArea.name,
              value: i.currentTarget.value.toString(),
            });
          }}
        />
        <p className={formStyles.question}>
          Wybierz pomieszczenia którymi mamy się zająć.
        </p>

        <div className={formStyles.labelsContainer}>
          {selectedRooms.value.map((el) => {
            return (
              <li key={el.id} style={{ listStyleType: "none" }}>
                <div className={formStyles.roomLabel}>
                  <p className={formStyles.paragraph}>{el}</p>
                  <img
                    className={formStyles.icon}
                    src={X}
                    onClick={(e) => {
                      let rooms = selectedRooms.value.filter((el) => {
                        return el != e.target.parentNode.children[0].innerText;
                      });
                      console.log(rooms);
                      setSelectedRooms({
                        name: "selectedRooms",
                        value: rooms,
                      });
                    }}
                    alt="X sign"
                  ></img>
                </div>
              </li>
            );
          })}
        </div>
        {rooms.map((el) => {
          return (
            <li key={el.id} style={{ listStyleType: "none" }}>
              <RoomLabel
                onClick={() => {
                  const lastSimilarItem = selectedRooms.value
                    .reverse()
                    .find((e) => {
                      return e.includes(el.node.Name) + "";
                    });
                  setSelectedRooms({
                    name: "selectedRooms",
                    value: [
                      ...selectedRooms.value.reverse(),

                      selectedRooms.value.includes(el.node.Name) &&
                      Array.isArray(
                        lastSimilarItem[lastSimilarItem.length - 1].match(/\d/g)
                      ) &&
                      lastSimilarItem[lastSimilarItem.length - 1].match(/\d/g)
                        .length
                        ? el.node.Name +
                          " " +
                          (parseInt(lastSimilarItem.match(/\d+/).join(""), 10) +
                            1)
                        : selectedRooms.value.includes(el.node.Name)
                        ? el.node.Name + " " + "2"
                        : el.node.Name,
                    ],
                  });
                }}
              >
                {el.node.Name}
              </RoomLabel>
            </li>
          );
        })}
        <p className={`${formStyles.question} ${formStyles.black}`}>Inne</p>
        <InputField
          placeholder={"np. Garderoba"}
          value={customRoom.value}
          withIcon={true}
          onChange={(e) => {
            setCustomRoom({
              name: flatArea.name,
              value: e.target.value,
            });
          }}
          onClick={(e) => {
            if (
              selectedRooms.value.includes(
                e.target.parentNode.children[0].value
              )
            ) {
              alert("Pomieszczenie o takiej nazwie zostało już dodane.");
            } else if (selectedRooms.value == "") {
              alert("Musisz podać nazwę pomieszczenia.");
            } else {
              setSelectedRooms({
                name: "selectedRooms",
                value: [
                  ...selectedRooms.value,
                  e.target.parentNode.children[0].value,
                ],
              });
            }
          }}
          onBlur={(i) => {}}
        ></InputField>

        <div className={inputFieldStyles.inputContainer}>
          {isFormCompleted() ? (
            <button
              id="submit-button"
              type="submit"
              className={`${inputFieldStyles.input} ${inputFieldStyles.button}`}
            >
              Dalej
            </button>
          ) : (
            <button
              disabled
              id="submit-button"
              type="submit"
              className={`${inputFieldStyles.input} ${inputFieldStyles.button} ${inputFieldStyles.disable}`}
            >
              Dalej
            </button>
          )}
        </div>
        <p className={`${formStyles.question} ${formStyles.hint}`}>
          Aby przejść dalej uzupełnij pola powyżej
        </p>
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
