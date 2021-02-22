import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

const initialState = {
  isHouse: {},
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
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
