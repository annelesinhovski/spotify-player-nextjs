import React from "react";
import Button from "@components/Button";

const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/callback/";
const scopes = ["user-read-currently-playing", "user-read-playback-state"];
const clientId = process.env.CLIENT_ID;

export default () => {
  return (
    <Button
      link={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        "%20"
      )}&response_type=token&show_dialog=true`}
    >
      Clique para acessar o Spotify
    </Button>
  );
};
