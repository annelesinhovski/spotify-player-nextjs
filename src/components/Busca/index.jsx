import React, { useState } from "react";
import Router from "next/router";
import { WrapperBusca } from "./style";

function Busca() {
  const [inputSearch, setInputSearch] = useState("");

  const okp = (event) => {
    if (event.key === "Enter") {
      Router.push({
        pathname: "/resultado-busca",
        query: { termo: inputSearch },
      });
    }
  };

  return (
    <>
      <WrapperBusca>
        <p>Busque por artistas, álbuns ou música</p>
        <input
          type="text"
          onKeyPress={okp}
          placeholder="O que você quer ouvir?"
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
      </WrapperBusca>
    </>
  );
}

export default Busca;
