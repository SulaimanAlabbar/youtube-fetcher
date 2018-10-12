import store from "../store";

export default function AccountInfo(loaded) {
  const state = store.getState();
  const currentAccount = {
    ...state.account[state.currentAccountIndex]
  };

  return store.getState().loaded
    ? {
        loaded: true,
        name: currentAccount.name,
        avatarURL: currentAccount.avatarURL,
        bio: currentAccount.bio,
        joined: currentAccount.joined,
        subs: currentAccount.stats.numOfSubscribers,
        views: currentAccount.stats.numOfViews,
        videos: currentAccount.stats.numOfVideos,
        currentAccountIndex: state.currentAccountIndex
      }
    : {
        loaded: false,
        name: -1,
        avatarURL: -1,
        bio: -1,
        joined: -1,
        subs: -1,
        views: -1,
        videos: -1,
        currentAccountIndex: -1
      };
}
