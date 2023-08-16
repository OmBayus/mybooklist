import { configureStore } from '@reduxjs/toolkit'
import booklistSlice from 'features/booklist/booklistSlice'

export default configureStore({
  reducer: {
    booklist:booklistSlice
  }
})