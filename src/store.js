import { createStore } from "redux";
import reducer from "./reducers";

/*
const initialState = {
  account: [
    {
      name: "Name",
      bio: "abc",
      joined: "date",
      avatarURL: "image",
      stats: {
        numOfSubscribers: 123,
        numOfViews: 123,
        numOfVideos: 123,
      },
      uploadsToken: "123",
      videos: [
        {
          videoTitle: "title",
          views: 123,
          publishDate: "date"
        },
      ],
    },
  ],
  currentPage: 123,
  nextPageToken: "123"
};
*/
const initialState = {
  account: [],
  currentAccountIndex: -1,
  currentPage: 0,
  nextPageToken: ""
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
