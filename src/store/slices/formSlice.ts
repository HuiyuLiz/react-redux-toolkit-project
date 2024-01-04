import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { addCar } from './carsSlice'

export interface FormState {
  name: string
  cost: number
}

const initialState: FormState = {
  name: '',
  cost: 0,
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    changeCost: (state, action: PayloadAction<number>) => {
      state.cost = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCar, (state) => {
      state.name = ''
      state.cost = 0
    })
  },
})

// Action creators are generated for each case reducer function
export const { changeName, changeCost } = formSlice.actions

export default formSlice.reducer
