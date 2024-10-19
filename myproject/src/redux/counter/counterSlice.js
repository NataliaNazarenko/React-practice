import { createSlice } from '@reduxjs/toolkit'
import { incrementAction, decrementAction, incrementByAmountAction } from './counterActions'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: incrementAction,
    decrement: decrementAction,
    incrementByAmount: incrementByAmountAction,
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer