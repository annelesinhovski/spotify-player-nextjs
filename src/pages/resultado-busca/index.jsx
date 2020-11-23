import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Page from "@components/Page";
import CoverList from "@components/CoverList";
import ButtonVoltar from "@components/ButtonVoltar";
import { getSearchResult } from "@services/search-result";

function SearchResult() {
  const [result, setResult] = useState({});
  const { query } = useRouter();

  useEffect(() => {
    if (query.termo) {
      getResults();
    }
  }, [query.termo]);

  const getResults = async () => {
    const response = await getSearchResult(query.termo);
    setResult(response.data);
  };

  return (
    <Page>
      <ButtonVoltar onClick={() => window.history.back()}>
        Fazer nova busca
      </ButtonVoltar>
      <h2>
        Estes são os seus resultados para:{" "}
        <i style={{ color: "#1bd05c" }}>{query.termo}</i>
      </h2>
      <CoverList
        kind="album"
        cover={result.albums ? result.albums.items : []}
      />
    </Page>
  );
}

export default SearchResult;
