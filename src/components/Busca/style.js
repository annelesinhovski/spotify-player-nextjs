import styled from "styled-components";

export const WrapperBusca = styled.div`
  margin: 50px 0;
  p {
    font-size: 16px;
    margin: 10px 0;
  }
  input[type="text"] {
    background: none;
    border: none;
    border-bottom: 1px solid var(--cinza);
    color: var(--cinza);
    font-size: 48px;
    font-weight: 700;
    padding: 5px;
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
    @media screen and (max-width: 414px) {
      font-size: 24px;
    }
  }
`;
