import api from "../../../config/api";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      await api.delete(`/delete-user/${userId}`);
      dispatch(deleteUserSuccess(userId));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
};

export const updateUser = () => {
  return async (dispatch) => {
    dispatch(updateUserLogin());
  };
};

export const editUser = (name, email, password, cellPhone, userId) => {
  return async (dispatch) => {
    try {
      const response = await api.post(`/edit/user/${userId}`, {
        name,
        email,
        password,
        cellPhone,
      });
      dispatch(editUserSuccess(response.data));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
};

export const createUser = (
  name,
  email,
  password,
  role,
  crm,
  cpf,
  cellPhone
) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/save/user", {
        name,
        email,
        password,
        role,
        crm,
        cpf,
        cellPhone,
      });
      dispatch(createUserSuccess(response.data));
    } catch (error) {
      dispatch(error.message);
    }
  };
};

export const loginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const loginError = (error) => {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
};

export const createUserSuccess = (message) => {
  return {
    type: "CREATE_USER",
    payload: message,
  };
};

export const editUserSuccess = (message) => {
  return {
    type: "EDIT_USER",
    payload: message,
  };
};

export const updateUserLogin = () => {
  return {
    type: "UPDATE",
  };
};

export const deleteUserSuccess = (userId) => {
  return {
    type: "DELETE_USER_SUCCESS",
    payload: userId,
  };
};
