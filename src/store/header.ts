/**
 * Visible or hidden sub-header - Redux-slice
 * @author Denys Ostroverkh
 * @published Aug 03, 2024
 * @modified Aug 03, 2024
 */

import { createSlice } from '@reduxjs/toolkit'

interface HeaderState {
  visible: boolean
} //State type

const initialState: HeaderState = {
  visible: true,
} //State value

//Reducre of Mask
const maskSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    visibleHeader: (state) => {
      state.visible = true;
    },
    hiddenHeader: (state) => {
      state.visible = false;
    },
  },
})

export const { visibleHeader, hiddenHeader } = maskSlice.actions
export default maskSlice.reducer