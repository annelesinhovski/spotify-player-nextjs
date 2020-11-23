import styled from "styled-components";

export const WrapperCover = styled.div`
  padding: 30px 0;
  width: 180px;
  position: relative;
  @media screen and (max-width: 414px) {
    width: 140px;
  }
  a {
    position: absolute;
    top: 30px;
    left: 15px;
    height: 0;
    background: rgba(0, 0, 0, 0.3);
    width: 150px;
    height: 150px;
    cursor: pointer;
    transition: background 0.3s;
    @media screen and (max-width: 414px) {
      width: 120px;
      height: 120px;
      left: 10px;
    }
    svg {
      margin: 45px auto;
      display: block;
      opacity: 0;
      transition: all 0.2s;
      @media screen and (max-width: 414px) {
        margin: 35px auto;
      }
    }
    &:hover {
      background: rgba(0, 0, 0, 0.8);
      svg {
        opacity: 1;
      }
    }
  }
  figure {
    margin: 0 auto 20px;
    width: 150px;
    height: 150px;
    display: block;
    background: var(--cinza);
    @media screen and (max-width: 414px) {
      width: 120px;
      height: 120px;
    }
    img {
      width: 100%;
    }
  }
  p {
    text-align: center;
    width: 80%;
    margin: 0 10%;
    font-size: 16px;
    color: var(--cinza-claro);
  }
  span {
    display: block;
    text-align: center;
    font-size: 16px;
    color: var(--cinza);
  }
`;
