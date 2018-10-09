import API_KEY from "../constants/apiKey";
import axios from "axios";

const BASE_URL_FIRST =
  "https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet,contentDetails&forUsername=";

async function fetchAccount(channel) {
  const URLOne = `${BASE_URL_FIRST}${channel}&key=${API_KEY}`;
  //   const URLTwo = "google.com";
  let chan;
  await axios.get(URLOne).then(
    firstResponse => {
      //   console.log("dsds", firstResponse);
      // axios.get(URLOne).then(secondResponse => { //change URL
      //   return {
      chan = {
        name: firstResponse.data.items[0].snippet.title,
        bio: firstResponse.data.items[0].snippet.description,
        joined: firstResponse.data.items[0].snippet.publishedAt,
        avatarURL: firstResponse.data.items[0].snippet.thumbnails.high.url,
        numOfSubscribers:
          firstResponse.data.items[0].statistics.subscriberCount,
        numOfViews: firstResponse.data.items[0].statistics.viewCount,
        numOfVideos: firstResponse.data.items[0].statistics.videoCount,
        uploadsToken:
          firstResponse.data.items[0].contentDetails.relatedPlaylists.uploads
      };
    }
    // })
  );
  return chan;
}

export default fetchAccount;
