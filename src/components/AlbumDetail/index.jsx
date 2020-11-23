import React, { useState } from "react";
import { useRouter } from "next/router";
import { WrapperAlbum, AlbumCover, FullList } from "./style";
import Play from "@components/ButtonPlay";
import Player from "@components/Player";

function AlbumDetail({ album, albumlist = [] }) {
  const [player, setPlayer] = useState(false);
  const { query } = useRouter();

  const songs = albumlist.map((albumlist, i) => (
    <li key={albumlist + i}>
      <p>{albumlist.name}</p>
    </li>
  ));

  if (!player) {
    return (
      <WrapperAlbum>
        <AlbumCover>
          <img
            src={
              album.images && album.images.length > 0 ? album.images[0].url : ""
            }
            alt={album.name}
          />
          <figcaption>
            <p>{album.name}</p>
            <span>
              {album.artists && album.artists.length > 0
                ? album.artists[0].url
                : ""}
            </span>
          </figcaption>
          <Play
            onClick={() => {
              setPlayer(!player);
            }}
          >
            Ouvir o album
          </Play>
        </AlbumCover>
        <FullList>{songs}</FullList>
      </WrapperAlbum>
    );
  }

  return (
    <WrapperAlbum>
      <AlbumCover>
        <img
          src={
            album.images && album.images.length > 0 ? album.images[0].url : ""
          }
          alt={album.name}
        />
        <figcaption>
          <p>{album.name}</p>
          <span>
            {album.artists && album.artists.length > 0
              ? album.artists[0].url
              : ""}
          </span>
        </figcaption>
        <Play
          onClick={() => {
            setPlayer(!player);
          }}
        >
          Ouvir o album
        </Play>
      </AlbumCover>
      <FullList>
        <Player id={query.id} />
      </FullList>
    </WrapperAlbum>
  );
}

export default AlbumDetail;
