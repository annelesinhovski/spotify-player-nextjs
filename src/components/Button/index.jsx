import React from "react";
import { WrapperCTA, BtnCTA } from "./style";

function Button({ children, className, link = "" }) {
  return (
    <>
      <WrapperCTA className={className}>
        <BtnCTA href={link}>{children}</BtnCTA>
      </WrapperCTA>
    </>
  );
}

export default Button;
