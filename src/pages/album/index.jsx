import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Page from "@components/Page";
import AlbumDetail from "@components/AlbumDetail";
import ButtonVoltar from "@components/ButtonVoltar";
import { getAlbum } from "@services/album";

function Album() {
  const [album, setAlbum] = useState([]);
  const [tracks, setTracks] = useState([]);
  const { query } = useRouter();

  useEffect(() => {
    if (query.id) {
      getAlbumlist();
    }
  }, [query.id]);

  const getAlbumlist = async () => {
    const response = await getAlbum(query.id);
    setAlbum(response.data);
    setTracks(response.data.tracks.items);
  };

  return (
    <Page>
      <ButtonVoltar onClick={() => window.history.back()}>Voltar</ButtonVoltar>
      <AlbumDetail album={album} albumlist={tracks} />
    </Page>
  );
}

export default Album;
