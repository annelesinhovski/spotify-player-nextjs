import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Page from "@components/Page";
import ButtonVoltar from "@components/ButtonVoltar";
import CoverList from "@components/CoverList";
import { getArtist, getArtistAlbums } from "@services/artists";

function Artista() {
  const [album, setAlbum] = useState([]);
  const [artist, setArtist] = useState("");
  const { query } = useRouter();

  useEffect(() => {
    if (query.id) {
      getArtistName();
      getArtistAlbum();
    }
  }, [query.id]);

  const getArtistName = async () => {
    const response = await getArtist(query.id);
    setArtist(response.data);
  };

  const getArtistAlbum = async () => {
    const response = await getArtistAlbums(query.id);
    setAlbum(response.data.items);
  };

  return (
    <Page>
      <ButtonVoltar onClick={() => window.history.back()}>Voltar</ButtonVoltar>
      <h2>
        Estes são os principais álbuns de:{" "}
        <i style={{ color: "#1bd05c" }}>{artist.name}</i>
      </h2>
      <CoverList kind="album" cover={album} />
    </Page>
  );
}

export default Artista;
