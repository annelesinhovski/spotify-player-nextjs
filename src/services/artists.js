import CustomAxios from "./http-client";

async function getTopArtists() {
  return await CustomAxios({
    url: "/me/top/artists",
    method: "GET",
  });
}

async function getArtist(id) {
  return await CustomAxios({
    url: "/artists/" + id,
    method: "GET",
  });
}

async function getArtistAlbums(id) {
  return await CustomAxios({
    url: "/artists/" + id + "/albums",
    method: "GET",
  });
}

export { getTopArtists, getArtist, getArtistAlbums };
