/**
 * Next Provider template
 * @author Joe Wilson
 * @Published Jan 15, 2024
 * @modified Feb 23, 2024
 */

"use client"

import { Provider } from 'react-redux'
import { store } from '@/store'
import { ReactNode } from 'react'

const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>
    {children}
  </Provider>
}

export default Providers