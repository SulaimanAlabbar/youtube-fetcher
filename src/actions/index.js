import {
  SET_ACCOUNT_INFO,
  ADD_VIDEOS,
  SORT_BY,
  PRUNE,
  CHANGE_PAGE,
  CHANGE_ACCOUNT
} from "../constants";

export function setAccountInfo(channelInfo) {
  return {
    type: SET_ACCOUNT_INFO,
    channelInfo
  };
}

export function addVideos(videosInfo) {
  return {
    type: ADD_VIDEOS,
    videosInfo
  };
}

export function changeAccount(index) {
  return {
    type: CHANGE_ACCOUNT,
    index
  };
}
