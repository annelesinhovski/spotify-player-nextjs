import React, { useState, useEffect } from "react";
import Link from "next/link";
import Page from "@components/Page";
import Busca from "@components/Busca";
import CoverList from "@components/CoverList";
import Cookies from "js-cookie";
import { getTopArtists } from "@services/artists";

function Dashboard() {
  const token = Cookies.get("access_token");
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    getArtists();
  }, []);

  const getArtists = async () => {
    const response = await getTopArtists();
    setTopArtists(response.data.items);
  };

  if (token) {
    return (
      <Page>
        <Busca />
        <h2>Seus artistas mais ouvidos</h2>
        <CoverList kind="artist" cover={topArtists} />
      </Page>
    );
  }
  return (
    <Page>
      <p>Você não está logado.</p>
      <Link href="/">
        <a>Clique aqui para logar</a>
      </Link>
    </Page>
  );
}

export default Dashboard;
