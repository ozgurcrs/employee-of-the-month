import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  padding: 12px;

  & > h1 {
    font-size: 48px;
    font-weight: 200;
  }

  @media screen and (max-width: 600px) {
    & > h1 {
      font-size: 32px;
    }
  }
`;

export { Container };
