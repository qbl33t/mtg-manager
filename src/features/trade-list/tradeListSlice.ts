import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { CardDetail } from '../../types/CardDetail';

// Define a type for the slice state
interface TradingListState {
  value: Map<CardDetail, number>;
}

// Define the initial state using that type
const initialState: TradingListState = {
  value: new Map<CardDetail, number>(),
}

export const tradeListSlice = createSlice({
  name: 'tradeList',
  initialState,
  reducers: {
    add: (state, action) => {
      // get current state -> add wanted value or set wanted value
      const currentValue = state.value.get(action.payload);
      const wantedQuantity = action.payload.quantity;
      state.value.set(action.payload, currentValue !== undefined ? currentValue + wantedQuantity : wantedQuantity);
    },
    remove: (state, action) => {
      state.value.delete(action.payload);
    }
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

export const { add, remove } = tradeListSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: any) => (dispatch: (arg0: { payload: any; type: "tradeList/incrementByAmount" }) => void) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const tradeListSelector = (state: RootState) => state.tradeList.value

export default tradeListSlice.reducer
