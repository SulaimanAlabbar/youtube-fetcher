import {
  SET_ACCOUNT_INFO,
  ADD_VIDEOS,
  SORT_BY,
  PRUNE,
  CHANGE_PAGE,
  CHANGE_ACCOUNT
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
        currentAccountIndex:
          state.account.length === 0 ? 0 : state.account.length,
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

    case CHANGE_ACCOUNT:
      return {
        ...state,
        currentAccountIndex: action.index
      };

    default:
      return state;
  }
}

export default reducer;
