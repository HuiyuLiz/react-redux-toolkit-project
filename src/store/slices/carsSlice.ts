import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Car {
  id: number
  name: string
  cost: number
}
export interface CarsState {
  list: Car[]
  searchTerm: string
}

const initialState: CarsState = {
  list: [],
  searchTerm: '',
}

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    addCar: (state, action: PayloadAction<Omit<Car, 'id'>>) => {
      state.list.push({
        id: Date.now(),
        name: action.payload.name,
        cost: action.payload.cost,
      })
    },
    deleteCarById: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((car) => car.id !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeSearchTerm, addCar, deleteCarById } = carsSlice.actions

export default carsSlice.reducer
