import styled from "styled-components";

const EmployeeCard = styled.div`
  width: 20%;
  height: 450px;
  border: 1px solid #d2d2d2;
  border-radius: 12px;
  min-width: 20%;
  margin: 32px 0;
  cursor: pointer;
  position: relative;
  transition: 200ms;
  user-select: none;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: 0 1px 5px 10px #f1f1f1;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Details = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #4a4a4a;
  background: #fff;

  & > span:last-child {
    font-size: 14px;
  }
`;
const DetailContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;
const EmployeeInfo = styled.div`
  width: 30%;
  height: 150px;
  margin-top: 32px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 5px 5px #f2f2f2;
  border: 1px solid #d2d2d2;

  & > span {
    height: 30px;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export { EmployeeCard, DetailContainer, Details, EmployeeInfo };
