import CustomAxios from "./http-client";

async function getSearchResult(termo) {
  return await CustomAxios({
    url: "/search?q=" + termo + "&type=artist,album,track",
    method: "GET",
  });
}

export { getSearchResult };
