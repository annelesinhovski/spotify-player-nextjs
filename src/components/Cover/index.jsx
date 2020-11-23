import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import { WrapperCover } from "./style";

function CoverItem({ kind, url, imgCover, title, subtitle }) {
  return (
    <WrapperCover>
      <figure>
        <img src={imgCover} alt={title} />
      </figure>
      <p>{title}</p>
      <span>{subtitle}</span>
      <Link href={`/${kind}?id=${url}`}>
        <a>
          <FaPlayCircle color="white" size="60" />{" "}
        </a>
      </Link>
    </WrapperCover>
  );
}

export default CoverItem;
