import { SET_ACCOUNT_INFO, SORT_BY, PRUNE, CHANGE_PAGE } from "../constants";

export function setAccountInfo(channelInfo) {
  return {
    type: SET_ACCOUNT_INFO,
    channelInfo
  };
}
