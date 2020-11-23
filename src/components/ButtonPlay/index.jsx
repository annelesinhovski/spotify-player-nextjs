import React from "react";
import { WrapperCTA, BtnCTA } from "./style";

function Play({ children, className, onClick = "" }) {
  return (
    <>
      <WrapperCTA className={className}>
        <BtnCTA onClick={onClick}>{children}</BtnCTA>
      </WrapperCTA>
    </>
  );
}

export default Play;
