import React, { useState } from "react";
import Layout from "../components/layout";
// import Form from "../components/form";
// import formStyles from "./form.module.scss";
import { connect } from "react-redux";
import { Link, useStaticQuery, useQuery, navigate, graphql } from "gatsby";
import { useMutation, gql } from "@apollo/client";
import initialSurveyStyles from "./initialSurvey.module.scss";
import contactFormStyles from "./contactForm.module.scss";
import RoomsForValuation from "../components/roomsForValuation";
import InputField from "../components/inputField";
import Header from "../components/header";
import Paragraph from "../components/paragraph";
import LinkButton from "../components/linkButton";
import ExternalLinkButton from "../components/externalLinkButton";
import { getDate } from "../utils/getDate";

const ADD_ROOM = gql`
  mutation AddRoom(
    $Name: String
    $questionnaire: ID
    $category: ID
    $service: ID
    $value: Float
  ) {
    createRoom(
      input: {
        data: {
          Name: $Name
          questionnaire: $questionnaire
          category: $category
          service: $service
          value: $value
        }
      }
    ) {
      room {
        id
        Name
        service {
          name
          category {
            title
          }
        }
        value
      }
    }
  }
`;

const ADD_QUESTIONNAIRE = gql`
  mutation AddQuestionnaire(
    $address: String
    $email: String
    $firstName: String
    $flatArea: Float
    $isHouse: Boolean
    $phoneNumber: Long
    $startDate: String
    $rooms: [ID]
  ) {
    createQuestionnaire(
      input: {
        data: {
          address: $address
          email: $email
          firstName: $firstName
          flatArea: $flatArea
          isHouse: $isHouse
          phoneNumber: $phoneNumber
          startDate: $startDate
          rooms: $rooms
        }
      }
    ) {
      questionnaire {
        id
        created_at
      }
    }
  }
`;

const mapStateToProps = ({
  valuation,
  firstName,
  phoneNumber,
  email,
  isHouse,
  address,
  startDate,
  flatArea,
  selectedRooms,
  serviceForms,
  roomsIds,
}) => {
  return {
    valuation,
    firstName,
    phoneNumber,
    email,
    isHouse,
    address,
    startDate,
    flatArea,
    selectedRooms,
    serviceForms,
    roomsIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setValuation: (valuation) => {
      dispatch({ type: `SET_VALUATION`, valuation });
    },
    setFirstName: (firstName) => {
      dispatch({ type: `SET_FIRST_NAME`, firstName });
    },
    setPhoneNumber: (phoneNumber) => {
      dispatch({ type: `SET_PHONE_NUMBER`, phoneNumber });
    },
    setEmail: (email) => {
      dispatch({ type: `SET_EMAIL`, email });
    },
    setIsHouse: (isHouse) => {
      dispatch({ type: `SET_IS_HOUSE`, isHouse });
    },
    setAddress: (address) => {
      dispatch({ type: `SET_ADDRESS`, address });
    },
    setStartDate: (startDate) => {
      dispatch({ type: `SET_START_DATE`, startDate });
    },
    setFlatArea: (flatArea) => {
      dispatch({ type: `SET_FLAT_AREA`, flatArea });
    },
    setSelectedRooms: (selectedRooms) => {
      dispatch({ type: `SET_SELECTED_ROOMS`, selectedRooms });
    },
    setServiceForms: (serviceForms) => {
      dispatch({ type: `SET_SERVICE_FORMS`, serviceForms });
    },
    setRoomsIds: (roomsIds) => {
      dispatch({ type: `SET_ROOMS_IDS`, roomsIds });
    },
  };
};

const ContactForm = (props) => {
  const [isValuationSaved, setValuationSaved] = useState(false);
  const [valuationId, setValuationId] = useState();
  const [createdDate, setCreatedDate] = useState();
  const [listOfRooms, setListOfRooms] = useState([]);

  const [addRoom, { addRoomData }] = useMutation(ADD_ROOM);
  const [addQuestionnaire, { addQuestionnaireData }] = useMutation(
    ADD_QUESTIONNAIRE
  );

  const BACKEND_URL = process.env.GATSBY_BACKEND_URL;

  // const getService = useStaticQuery(graphql`
  //   query {
  //     allStrapiServices {
  //       edges {
  //         node {
  //           strapiId
  //           name
  //         }
  //       }
  //     }
  //   }
  // `);
  // const services = getService.allStrapiServices.edges;

  const ConnectedRoomsForValuation = connect(
    mapStateToProps,
    mapDispatchToProps
  )(RoomsForValuation);

  // const getCategory = (index) => {
  //   switch (index) {
  //     case value:
  //       break;

  //     case value:
  //       break;

  //     default:
  //       break;
  //   }
  // };

  const saveValuation = async () => {
    if (true /*!isValuationSaved*/) {
      var addRoomPromises = [];
      var addedRooms = [];

      props.selectedRooms.value.forEach((selectedRoom) => {
        //dla każdego pokoju
        const selectedRoomServices = props.serviceForms.value.filter(
          //wez services
          (room) => {
            return room.name == selectedRoom;
          }
        )[0].values;

        addRoomPromises = [
          ...addRoomPromises,
          ...selectedRoomServices.map((e, index) => {
            if (e.value)
              return addRoom({
                //i dodaj do bazki
                variables: {
                  Name: selectedRoom.toString(),
                  questionnaire: null,
                  category: e.categoryId,
                  service: e.serviceId,
                  value: parseFloat(
                    e.value.slice(
                      0,
                      e.value.indexOf("m") >= 0
                        ? e.value.indexOf("m")
                        : e.value.length
                    )
                  ),
                },
              })
                .then((val) => {
                  addedRooms = [...addedRooms, val.data.createRoom.room.id];
                  setListOfRooms([
                    ...listOfRooms,
                    {
                      id: val.data.createRoom.room.id,
                      name: val.data.createRoom.room.Name,
                      service: val.data.createRoom.room.service.name,
                      category: val.data.createRoom.room.service.category.title,
                      value: val.data.createRoom.room.value,
                    },
                  ]);
                  console.log(addedRooms);
                })
                .catch((err) => {
                  console.log(err);
                });
          }),
        ];
      });

      var promise = new Promise((resolve, reject) => {
        Promise.all(addRoomPromises).then(() => {
          console.log(addedRooms);
          console.log(resolve);

          console.log(`
            address: ${props.address.value || null},
            email: ${props.email || null},
            firstName: ${props.firstName || null},
            flatArea:
            ${
              parseFloat(
                props.flatArea?.value?.slice(
                  0,
                  props.flatArea?.value?.indexOf("m") >= 0
                    ? props.flatArea?.value?.indexOf("m")
                    : props.flatArea?.value?.length
                )
              ) || null
            },
            isHouse: ${props.isHouse.value || null},
            phoneNumber: ${props.phoneNumber || null},
            startDate: ${props.startDate.value || null},
            rooms: ${addedRooms || []},            
          `);

          //zapisz kwestionariusz
          addQuestionnaire({
            //i dodaj do bazki
            variables: {
              address: props.address.value || null,
              email: props.email || null,
              firstName: props.firstName || null,
              flatArea:
                parseFloat(
                  props.flatArea?.value?.slice(
                    0,
                    props.flatArea?.value?.indexOf("m") >= 0
                      ? props.flatArea?.value?.indexOf("m")
                      : props.flatArea?.value?.length
                  )
                ) || null,
              isHouse: props.isHouse.value || null,
              phoneNumber: props.phoneNumber || null,
              startDate: props.startDate.value || null,
              rooms: addedRooms || [],
            },
          })
            .then((val) => {
              var created = getDate(
                new Date(val.data.createQuestionnaire.questionnaire.created_at)
              );

              console.log(
                "Dodano kwestionariusz id " +
                  val.data.createQuestionnaire.questionnaire.id +
                  " wygenerowany dnia " +
                  created
              );
              resolve({
                createdDate: created,
                valuationId: val.data.createQuestionnaire.questionnaire.id,
              });
            })
            .catch((err) => {
              alert(
                "Nie udało się zapisać danych. Spróbuj ponownie za chwilę lub skontaktuj się z nami."
              );
              console.log(err);
              reject(null);
            });
        });
      });

      return promise;
    }
  };

  return (
    <Layout heading="Prawie gotowe" selectedStep={3} backArrow={true}>
      <div className={contactFormStyles.contactForm}>
        <ConnectedRoomsForValuation
          icon="tick"
          onClick={(e) => {
            navigate(
              `/servicesChoice?showedRoom=${e.target.parentNode.children[0].innerHTML}`
            );
          }}
        />
        <Header heading="Informacje końcowe" />
        <Paragraph>Podaj nam resztę niezbędnych informacji</Paragraph>
        <br />
        <InputField
          value={props.firstName}
          onChange={(e) => {
            props.setFirstName(e.target.value);
          }}
          placeholder="Imię"
        />
        <InputField
          placeholder="Telefon"
          value={props.phoneNumber}
          onChange={(e) => {
            props.setPhoneNumber(e.target.value);
          }}
        />
        <InputField
          placeholder="Email"
          value={props.email}
          onChange={(e) => {
            props.setEmail(e.target.value);
          }}
        />
        <LinkButton
          disabled={
            !(props.selectedRooms.value && props.selectedRooms.value.length)
          }
          btn
          title="Zobacz wycenę"
          onClick={async () => {
            await saveValuation().then((val) => {
              setValuationSaved(true);

              console.log(val);
              navigate(
                `/valuation?valuationId=${val.valuationId}&documentDate=${val.createdDate}&name=${props.firstName}`
              );
            });
          }}
        ></LinkButton>

        <ExternalLinkButton
          disabled={
            !(props.selectedRooms.value && props.selectedRooms.value.length)
          }
          btn
          target="_blank"
          onClick={async () => {
            await saveValuation().then((val) => {
              setValuationSaved(true);

              console.log(val);
              navigate(
                `${BACKEND_URL}/generatePDF?valuationId=${val.valuationId}&documentDate=${val.createdDate}&name=${props.firstName}`
              );
            });
          }}
          title="Pobierz wycenę"
        ></ExternalLinkButton>
        <ExternalLinkButton
          disabled={
            !(props.selectedRooms.value && props.selectedRooms.value.length)
          }
          btn
          target="_blank"
          onClick={async () => {
            await saveValuation().then((val) => {
              setValuationSaved(true);

              console.log(val);
              window.open(
                `${BACKEND_URL}/sendMail?valuationId=${val.valuationId}&documentDate=${val.createdDate}&name=${props.firstName}&email=${props.email}`
              );
            });
          }}
          title="Wyślij wycenę na email"
        ></ExternalLinkButton>
      </div>
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
