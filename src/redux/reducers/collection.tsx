import {createSlice} from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'collectionData',
  initialState: {
    data: [],
  },
  reducers: {
    saveData: (state: any, action: any) => {
      state.data.push(action.payload);
    },
    updateItem: (state: any, action: any) => {
      state.data = state.data.map((item: any) =>
        item?.id === action.payload.id ? {...item, ...action.payload} : item,
      );
    },
    deleteItem: (state: any, action: any) => {
      state.data = state.data.filter((item: any) => item.id !== action.payload);
    },
  },
});

export const {saveData, updateItem, deleteItem} = chatSlice.actions;
export default chatSlice.reducer;
