import { configureStore, createSlice } from "@reduxjs/toolkit";

// useState() 역할
// state 만들기
let words = createSlice({
  name: "words",
  initialState: [
    {
      word: "Hello",
      desc: "안녕",
      ex: "Hello Sparta!!",
    },
    {
      word: "Apple",
      desc: "사과",
      ex: "What a delicious apple!!",
    },
    {
      word: "Computer",
      desc: "컴퓨터",
      ex: "Computer must be hit when it doesn't work.",
    },
    {
      word: "health",
      desc: "건강",
      ex: "You should work out for your health.",
    },
  ],
  reducers: {
    addWord(state, action) {
      state.push(action.payload);
    },
  },
});

export let { addWord } = words.actions;

// state등록
export default configureStore({
  reducer: {
    words: words.reducer,
  },
});
