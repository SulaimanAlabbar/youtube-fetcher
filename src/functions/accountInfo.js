import store from "../store";

export default function AccountInfo(loaded) {
  const currentAccount = {
    ...store.getState().account[store.getState().currentAccountIndex]
  };

  return loaded
    ? {
        loaded: true,
        name: currentAccount.name,
        avatarURL: currentAccount.avatarURL,
        bio: currentAccount.bio,
        joined: currentAccount.joined,
        subs: currentAccount.stats.numOfSubscribers,
        views: currentAccount.stats.numOfViews,
        videos: currentAccount.stats.numOfVideos,
        currentAccountIndex: store.getState().currentAccountIndex
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
