import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: [],
  reducers: {
    addBookmarks: (state, action) => {
      const recipe = action.payload;
      state.push(recipe);
    },
    removeBookmarks: (state, action) => {
      const recipeId = action.payload;
      return state.filter((recipe) => recipe.id !== recipeId);
    },
  },
});

export const { addBookmarks, removeBookmarks } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
