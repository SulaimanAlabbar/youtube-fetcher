import { ADD_YOUTUBER, SORT_BY, PRUNE, CHANGE_PAGE } from "../constants";

export function addYoutuber(channel) {
  return {
    type: ADD_YOUTUBER,
    channel
  };
}
