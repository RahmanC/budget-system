import { createSlice } from "@reduxjs/toolkit";
import {
  invalidCredentialToast,
  loginSuccessToast,
} from "components/Notification";
import { login } from "services";

const initialState = {
  isLoggedIn: false,
  userProfile: {},
  isLoading: false,
  error: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    updateIsLoggenIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userProfile = action.payload.userProfile;
    },
    updateUserprofile(state, action) {
      state.userProfile = action.payload.userProfile;
    },
    signOut(state) {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.userProfile = {};
    },
  },
});

export default slice.reducer;

// login
export function LoginUser(values: any): any {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response: any = await login(values);

    if (response.status === 200 && response.data.success) {
      loginSuccessToast(response.data.message);
      dispatch(
        slice.actions.updateIsLoggenIn({
          isLoggedIn: true,
          userProfile: response.data.data.user,
        })
      );
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      invalidCredentialToast(response.data.message);
      dispatch(
        slice.actions.updateIsLoading({
          isLoading: false,
          error: false,
        })
      );
    }

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}

export function LogoutUser(): any {
  return async (dispatch: any) => {
    dispatch(slice.actions.signOut());
    window.location.href = "/login";
  };
}
