import { createSlice } from "@reduxjs/toolkit";

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

    dispatch(
      slice.actions.updateIsLoggenIn({
        isLoggedIn: true,
        userProfile: values,
      })
    );

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
