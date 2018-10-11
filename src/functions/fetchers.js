import API_KEY from "../constants/apiKey";
import axios from "axios";

const BASE_URL_FIRST =
  "https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet,contentDetails&maxResults=16&forUsername=";

const BASE_URL_SECOND =
  "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=16&playlistId=";

const BASE_URL_THREE =
  "https://content.googleapis.com/youtube/v3/videos?part=statistics&id=";

export async function fetchAccount(channel) {
  const URL = `${BASE_URL_FIRST}${channel}&key=${API_KEY}`;
  let response = await axios.get(URL);
  console.log("first response :", response);
  return {
    name: response.data.items[0].snippet.title,
    bio: response.data.items[0].snippet.description,
    joined: response.data.items[0].snippet.publishedAt,
    avatarURL: response.data.items[0].snippet.thumbnails.high.url,
    numOfSubscribers: response.data.items[0].statistics.subscriberCount,
    numOfViews: response.data.items[0].statistics.viewCount,
    numOfVideos: response.data.items[0].statistics.videoCount,
    uploadsToken: response.data.items[0].contentDetails.relatedPlaylists.uploads
  };
}

export async function fetchVideos(uploadsToken) {
  const URL = `${BASE_URL_SECOND}${uploadsToken}&key=${API_KEY}`;
  let response = await axios.get(URL);
  console.log("second response :", response);

  const ids = response.data.items
    .map(el => el.snippet.resourceId.videoId)
    .join();

  const viewsArray = await fetchViews(ids);

  return {
    videos: response.data.items.map((el, index) => ({
      title: el.snippet.title,
      thumbnail: el.snippet.thumbnails.medium.url,
      publishDate: el.snippet.publishedAt
        .slice(0, 10)
        .replace("-", "/")
        .replace("-", "/"),
      views: viewsArray[index]
    })),
    nextPageToken: response.data.nextPageToken
  };
}

async function fetchViews(ids) {
  const URL = `${BASE_URL_THREE}${ids}&key=${API_KEY}`;
  let response = await axios.get(URL);
  return response.data.items.map(el => el.statistics.viewCount);
}
