import { SET_ACCOUNT_INFO, SORT_BY, PRUNE, CHANGE_PAGE } from "../constants";

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
            joined: action.channelInfo.joined.slice(0, 10),
            avatarURL: action.channelInfo.avatarURL,
            stats: {
              numOfSubscribers: action.channelInfo.numOfSubscribers,
              numOfViews: action.channelInfo.numOfViews,
              numOfVideos: action.channelInfo.numOfVideos
            },
            uploadsToken: action.channelInfo.uploadsToken
          }
        ],
        currentAccountIndex: state.currentAccountIndex + 1
      };

    default:
      return state;
  }
}

export default reducer;
