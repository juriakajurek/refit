import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case `SET_VALUATION`:
      return { ...state, valuation: action.valuation };
    case `SET_FIRST_NAME`:
      return { ...state, firstName: action.firstName };
    case `SET_PHONE_NUMBER`:
      return { ...state, phoneNumber: action.phoneNumber };
    case `SET_EMAIL`:
      return { ...state, email: action.email };
    case `SET_IS_HOUSE`:
      return { ...state, isHouse: action.isHouse };
    case `SET_ADDRESS`:
      return { ...state, address: action.address };
    case `SET_START_DATE`:
      return { ...state, startDate: action.startDate };
    case `SET_FLAT_AREA`:
      return { ...state, flatArea: action.flatArea };
    case `SET_SELECTED_ROOMS`:
      return { ...state, selectedRooms: action.selectedRooms };
    case `SET_SERVICE_FORMS`:
      return { ...state, serviceForms: action.serviceForms };
    case `SET_ROOMS_IDS`:
      return { ...state, roomsIds: action.roomsIds };
    default:
      return state;
  }
};

const initialState = {
  valuation: {},
  firstName: "",
  phoneNumber: "",
  email: "",
  isHouse: { name: "isHouse", value: false },
  address: { name: "address", value: "" },
  startDate: {
    name: "startDate",
    value: null,
  },
  flatArea: {
    name: "flatArea",
    value: "",
  },
  selectedRooms: {
    name: "selectedRooms",
    value: [],
  },
  serviceForms: {
    name: "serviceForms",
    value: [],
  },
  roomsIds: [],
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
