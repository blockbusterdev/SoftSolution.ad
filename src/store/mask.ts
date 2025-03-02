/**
 * Visible or hidden mask - Redux-slice
 * @author Soft Voyager
 * @published July 26, 2024
 * @modified July 26, 2024
 */

import { createSlice } from '@reduxjs/toolkit'

interface MaskState {
  visible: boolean
} //State type

const initialState: MaskState = {
  visible: false,
} //State value

//Reducre of Mask
const maskSlice = createSlice({
  name: 'mask',
  initialState,
  reducers: {
    visibleMask: (state) => {
      state.visible = true;
    },
    hiddenMask: (state) => {
      state.visible = false;
    },
  },
})

export const { visibleMask, hiddenMask } = maskSlice.actions
export default maskSlice.reducer