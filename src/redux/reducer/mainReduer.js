import {
    FETCH_PLANETS,
    FETCH_VEHICLES,
    INCREMENT_VEHICLE_COUNT,
    DECREMENT_VEHICLE_COUNT,
    FIND_FALCONE,
    UPDATE_SEARCH_TIME,
    SHOW_TOAST
  } from "../action/actionType";  
  
  const initialState = {
    planets: {},
    vehicles: {},
    findFalconeResult: {}
  };
  export const main = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PLANETS:
        return {
          ...state,
          planets: action.payload
        };
      case FETCH_VEHICLES:
        return {
          ...state,
          vehicles: action.payload
        };
      case INCREMENT_VEHICLE_COUNT:
        return {
          ...state,
          vehicles: state.vehicles.map(vehicle => {
            if (vehicle.name === action.payload) {
              return { ...vehicle, total_no: vehicle.total_no + 1 };
            } else {
              return { ...vehicle };
            }
          })
        };
      case DECREMENT_VEHICLE_COUNT:
        return {
          ...state,
          vehicles: state.vehicles.map(vehicle => {
            if (vehicle.name === action.payload && vehicle.total_no) {
              return { ...vehicle, total_no: vehicle.total_no - 1 };
            } else {
              return { ...vehicle };
            }
          })
        };
      case FIND_FALCONE:
        return {
          ...state,
          findFalconeResult: action.payload
        };
      default:
        return state;
    }
  };



export const searchTime= (state = {totalSearchTime:0}, action) => {
    switch (action.type) {
      case UPDATE_SEARCH_TIME:
        return {
          totalSearchTime: action.payload
        };
      default:
        return state;
    }
  };
  

  export const  toastReducer=(state = {
    isErrorbarOpen: false,
    errorText: ""
  }, action)=> {
    switch (action.type) {
      case SHOW_TOAST:
        return {
          ...state,
          isErrorbarOpen: action.payload ? true : false,
          errorText: action.payload
        };
      default:
        return state;
    }
  }