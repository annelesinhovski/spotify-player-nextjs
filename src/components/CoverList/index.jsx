import React from "react";
import CoverItem from "@components/Cover";
import { WrapperCoverList } from "./style";

function CoverList({ cover = [], kind }) {
  const covers = cover.map((cover, i) => (
    <CoverItem
      key={cover.name + i}
      imgCover={
        cover.images && cover.images.length > 0 ? cover.images[1].url : ""
      }
      title={cover.name}
      subtitle={cover.subtitle || null}
      url={cover.id}
      kind={kind}
    />
  ));

  return <WrapperCoverList>{covers}</WrapperCoverList>;
}

export default CoverList;
