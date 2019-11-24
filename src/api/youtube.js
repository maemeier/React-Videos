import axios from "axios";

const KEY = "AIzaSyBRKGXRrn7tNpb7iyfs3sZxAiHG-sbTyXs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    myRating: "",
    key: KEY
  }
});
