import { createSlice } from "@reduxjs/toolkit";

interface IUIState {
  isNotificationModalOpen: boolean;
  isMobileMenuOpen: boolean;
}

export const initialUIState: IUIState = {
  isNotificationModalOpen: false,
  isMobileMenuOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    openNotificationModal: (state) => {
      state.isNotificationModalOpen = true;
    },
    closeNotificationModal: (state) => {
      state.isNotificationModalOpen = false;
    },
    openMobileMenu: (state) => {
      state.isMobileMenuOpen = true;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
  },
});

export const { openNotificationModal, closeNotificationModal, openMobileMenu, closeMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;
