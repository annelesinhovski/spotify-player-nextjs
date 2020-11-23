import CustomAxios from "./http-client";

async function getAlbum(id) {
  return await CustomAxios({
    url: "/albums/" + id,
    method: "GET",
  });
}

export { getAlbum };
