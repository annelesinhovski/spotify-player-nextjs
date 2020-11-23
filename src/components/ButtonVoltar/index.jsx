import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { WrapperCTA, BtnCTA } from "./style";

function Voltar({ children, className, onClick = "" }) {
  return (
    <>
      <WrapperCTA className={className}>
        <BtnCTA onClick={onClick}>
          <FaArrowLeft />
          <span>{children}</span>
        </BtnCTA>
      </WrapperCTA>
    </>
  );
}

export default Voltar;
