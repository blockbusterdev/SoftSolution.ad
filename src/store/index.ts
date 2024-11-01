import { configureStore } from '@reduxjs/toolkit'

/** Reducers */
import maskReducer from './mask'
import headerReducer from './header'

/** Create reducer */
export const store = configureStore({
  reducer: {
    mask: maskReducer,
    header: headerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch