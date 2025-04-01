import { configureStore } from '@reduxjs/toolkit'
import menuClicked from '../features/menuclicked/menuClicked'
import PopupShow from '../features/popupShow/PopupShow'

export const store = configureStore({
  reducer: {
    menuClicker: menuClicked,
    PopupShower: PopupShow
  },
})