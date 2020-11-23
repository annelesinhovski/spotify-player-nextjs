import axios from "axios";
import Cookies from "js-cookie";

const version = "/v1";

const CustomAxios = axios.create({
  baseURL: "https://api.spotify.com" + version,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + Cookies.get("access_token"),
  },
});

export default CustomAxios;
