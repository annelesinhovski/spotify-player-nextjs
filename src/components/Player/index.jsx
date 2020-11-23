import React from "react";
import SpotifyPlayer from "react-spotify-player";

function Player({ id }) {
  return <SpotifyPlayer uri={"spotify:album:" + `${id}`} />;
}

export default Player;
