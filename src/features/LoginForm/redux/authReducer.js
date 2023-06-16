const initialState = {
  user: {
    doctor: {
      name: String,
      patients: [],
    },
  },
  error: null,
  message: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case "CREATE_USER":
      return {
        ...state,
        message: action.payload,
      };
    case "UPDATE":
      return {
        ...state,
        message: null,
      };
    case "DELETE_USER_SUCCESS":
      const updatedPatients = state.user.patients.filter(
        (patient) => patient.id !== action.payload
      );
      return {
        ...state,
        user: {
          ...state.user,
          patients: updatedPatients,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
