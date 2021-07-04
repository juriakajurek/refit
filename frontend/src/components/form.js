import React, { useState, useEffect } from "react";
import formStyles from "./form.module.scss";
import inputFieldStyles from "./inputField.module.scss";
import PlacesAutocomplete from "react-places-autocomplete";
import DatePicker from "react-date-picker";
import InputField from "./inputField";
import X from "../images/x.svg";
import RoomLabel from "./roomLabel";
import { graphql, Link, useStaticQuery } from "gatsby";
import { gql, useMutation } from "@apollo/client";
import Paragraph from "./paragraph";
import PlaceInput from "./placeInput";
import RadioInput from "./radioInput";
import LinkButton from "./linkButton";
import { removeArgumentsFromDocument } from "@apollo/client/utilities";
import RoomsForValuation from "./roomsForValuation";

/*global google*/

const Form = (props) => {
  const [customRoom, setCustomRoom] = useState({
    name: "customRoom",
    value: "",
  });
  const [isFormCompleted, setFormCompleted] = useState(false);
  const [, updateState] = useState();

  useEffect(() => {}, []);
  useEffect(() => {
    if (checkForm()) {
      setFormCompleted(true);
    } else {
      setFormCompleted(false);
    }
  });

  const update = () => {
    updateState({});
  };

  const handleRoomInput = (e) => {
    let typedName =
      e.target.parentNode.parentNode.children[0].value.charAt(0).toUpperCase() +
      e.target.parentNode.parentNode.children[0].value.slice(1).toLowerCase();
    if (props.selectedRooms.value.includes(typedName)) {
      alert("Pomieszczenie o takiej nazwie zostało już dodane.");
    } else if (typedName == "") {
      alert("Musisz podać nazwę pomieszczenia.");
    } else {
      props.setSelectedRooms({
        name: "selectedRooms",
        value: [...props.selectedRooms.value, typedName],
      });
      props.setServiceForms({
        name: "serviceForms",
        value: [...props.serviceForms.value, { name: typedName, values: [] }],
      });
    }
  };

  const addRoomToSelected = (el) => {
    const lastSimilarItem = props.selectedRooms.value.reverse().find((e) => {
      return e.includes(el.node.title);
    });

    var newRoom =
      props.selectedRooms.value.includes(el.node.title) &&
      Array.isArray(lastSimilarItem[lastSimilarItem.length - 1].match(/\d/g)) &&
      lastSimilarItem[lastSimilarItem.length - 1].match(/\d/g).length
        ? el.node.title +
          " " +
          (parseInt(lastSimilarItem.match(/\d+/).join(""), 10) + 1)
        : props.selectedRooms.value.includes(el.node.title)
        ? el.node.title + " " + "2"
        : el.node.title;

    props.setSelectedRooms({
      name: "selectedRooms",
      value: [...props.selectedRooms.value.reverse(), newRoom],
    });

    props.setServiceForms({
      name: "serviceForms",
      value: [...props.serviceForms.value, { name: newRoom, values: [] }],
    });
  };

  const deleteElement = (e) => {
    let rooms = props.selectedRooms.value.filter((el) => {
      return el != e.target.parentNode.children[0].innerText;
    });
    props.setSelectedRooms({
      name: "selectedRooms",
      value: rooms,
    });

    let serviceForms = props.serviceForms.value.filter((el) => {
      return el.name != e.target.parentNode.children[0].innerText;
    });
    props.setServiceForms({
      name: "serviceForms",
      value: serviceForms,
    });
  };

  const checkForm = () => {
    if (
      !!props.address.value &&
      !!props.startDate.value &&
      !!props.flatArea.value &&
      parseFloat(props.flatArea.value.match(/\d/g)) &&
      parseFloat(props.flatArea.value.match(/\d/g).join("")) > 0 &&
      Array.isArray(props.selectedRooms.value) &&
      props.selectedRooms.value.length > 0
    ) {
      return false;
    } else {
      return false;
    }
  };

  return typeof google === "object" && typeof google.maps === "object" ? (
    <header className={formStyles.form}>
      <form
        className={formStyles.formModule}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Paragraph>Czym mamy się zająć?</Paragraph>
        <RadioInput
          isHouse={props.isHouse}
          checked={!!props.isHouse.value}
          value="dom"
          onChange={() => {
            props.setIsHouse({ ...props.isHouse, value: true });
          }}
        />
        <RadioInput
          isHouse={props.isHouse}
          checked={!props.isHouse.value}
          value="mieszkanie"
          onChange={() => {
            props.setIsHouse({ ...props.isHouse, value: false });
            // localStorage.setItem(props.isHouse.name, false);
          }}
        />

        <PlaceInput address={props.address} setAddress={props.setAddress} />

        <div className={inputFieldStyles.inputContainer}>
          <div className={inputFieldStyles.input}>
            <DatePicker
              onChange={(e) => {
                props.setStartDate({ name: "startDate", value: e });
              }}
              value={props.startDate.value}
              className={inputFieldStyles.datePicker}
              calendarClassName={inputFieldStyles.calendar}
            />
          </div>
        </div>

        <Paragraph>Jaka jest powierzchnia użytkowa inwestycji?</Paragraph>
        <InputField
          value={props.flatArea.value}
          placeholder="np. 60m²"
          onChange={(e) => {
            props.setFlatArea({
              name: props.flatArea.name,
              value: e.target.value.toString(),
            });
          }}
          manageArea
          setArea={(area) => {
            props.setFlatArea({
              name: props.flatArea.name,
              value: area,
            });
          }}
        />

        <Paragraph>Wybierz pomieszczenia którymi mamy się zająć.</Paragraph>
        <RoomsForValuation
          withoutHeader
          selectedRooms={props.selectedRooms}
          icon="x"
          onClick={(e) => deleteElement(e)}
        />
        {props.rooms
          ? props.rooms.map((el) => {
              return (
                <li key={el.node.id} style={{ listStyleType: "none" }}>
                  <RoomLabel
                    onClick={() => {
                      addRoomToSelected(el);
                    }}
                  >
                    {el.node.title}
                  </RoomLabel>
                </li>
              );
            })
          : " "}
        <p className={`${formStyles.question} ${formStyles.black}`}>Inne</p>
        <InputField
          placeholder={"np. Garderoba"}
          value={customRoom.value}
          withIcon={true}
          onChange={(e) => {
            setCustomRoom({
              name: customRoom.name,
              value: e.target.value,
            });
          }}
          onClick={(e) => {
            handleRoomInput(e);
          }}
          onBlur={(i) => {}}
        ></InputField>

        {isFormCompleted ? (
          <LinkButton title="Dalej" to="/servicesChoice" />
        ) : (
          <LinkButton title="Dalej" to="/servicesChoice" disabled />
        )}
        <p className={`${formStyles.question} ${formStyles.hint}`}>
          Aby przejść dalej uzupełnij pola powyżej
        </p>
      </form>
    </header>
  ) : (
    <div>
      <h1>
        {setTimeout(() => {
          update();
        }, 10)}
      </h1>
    </div>
  );
};

export default Form;
