import {
  SET_ACCOUNT_INFO,
  ADD_VIDEOS,
  SORT_BY,
  PRUNE,
  CHANGE_PAGE
} from "../constants";

function reducer(state, action) {
  switch (action.type) {
    case SET_ACCOUNT_INFO:
      return {
        ...state,
        account: [
          ...state.account,
          {
            name: action.channelInfo.name,
            bio: action.channelInfo.bio,
            joined: action.channelInfo.joined
              .slice(0, 10)
              .replace("-", "/")
              .replace("-", "/"),
            avatarURL: action.channelInfo.avatarURL,
            stats: {
              numOfSubscribers: action.channelInfo.numOfSubscribers,
              numOfViews: action.channelInfo.numOfViews,
              numOfVideos: action.channelInfo.numOfVideos
            },
            uploadsToken: action.channelInfo.uploadsToken,
            videos: []
          }
        ],
        currentAccountIndex: state.currentAccountIndex + 1,
        loaded: true
      };

    case ADD_VIDEOS:
      return {
        ...state,
        account: [
          ...state.account.slice(0, state.currentAccountIndex),
          {
            ...state.account[state.currentAccountIndex],
            videos: state.account[state.currentAccountIndex].videos.concat(
              action.videosInfo.videos
            )
          },
          ...state.account.slice(state.currentAccountIndex + 1)
        ],
        nextPageToken: action.videosInfo.nextPageToken
      };

    default:
      return state;
  }
}

export default reducer;
