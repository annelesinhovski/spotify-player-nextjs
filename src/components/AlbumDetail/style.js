import styled from "styled-components";

export const WrapperAlbum = styled.div`
  display: flex;
  width: 100%;
  margin: 20px auto;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const AlbumCover = styled.div`
  width: 35%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  img {
    display: block;
    margin: 0 auto 10px;
    background: var(--cinza);
    max-width: 80%;
  }
  p {
    text-align: center;
    color: var(--cinza-claro);
    margin: 10px 0;
    font-size: 18px;
  }
  span {
    display: block;
    text-align: center;
    color: var(--cinza);
    margin: 10px 0;
    font-size: 14px;
  }
`;

export const FullList = styled.ol`
  margin: 0 0 0 5%;
  width: 60%;
  padding: 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
  li {
    position: relative;
    color: var(--cinza);
    margin: 0 0 10px;
    font-size: 14px;
  }
  p {
    color: var(--cinza-claro);
  }
  span {
    color: var(--cinza);
    position: absolute;
    right: 0;
    top: 0;
  }
  iframe {
    width: 100%;
  }
`;
