import styled from "styled-components";
import { FaSpotify } from "react-icons/fa";

export const WrapperPage = styled.div`
  margin: 30px auto;
  max-width: 980px;
  @media screen and (max-width: 768px) {
    margin: 20px;
  }
`;

export const Logo = styled(FaSpotify)`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 30px;
  top: 30px;
`;
