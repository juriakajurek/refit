import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case `SET_VALUATION`:
      return { ...state, valuation: action.valuation };
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
    default:
      return state;
  }
};

const initialState = {
  valuation: {},
  isHouse: { name: "isHouse", value: false },
  address: { name: "address", value: "" },
  startDate: {
    name: "startDate",
    value: null,
  },
  flatArea: {
    name: "flatArea",
    value: 0,
  },
  selectedRooms: {
    name: "selectedRooms",
    value: [],
  },
  serviceForms: {
    name: "serviceForms",
    value: [],
  },
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
