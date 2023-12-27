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

  & > a > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: 0 1px 5px 10px #f1f1f1;
  }

  &:hover > div.action-button {
    visibility: visible;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(45, 196, 77);
    padding: 10px;
    border-radius: 0 0 12px 12px;
    color: white;
    font-size: 24px;
    height: 50px;

    & > svg {
      display: block;
    }
  }
`;

const ActionButton = styled.div`
  visibility: hidden;
  width: 100%;
  position: absolute;
  bottom: -1px;
  transition: 200ms;

  & > svg {
    display: none;
  }
`;
const Score = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #f2f2f2;
  box-shadow: 0 1px 1px #d2d2d2;
  position: absolute;
  right: 12px;
  top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #4a4a4a;
  background: #fff;
  z-index: 999;
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

const Medal = styled.div`
  width: 100%;
  height: 30px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  color: #ffd700;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 400px;
`;

export { EmployeeCard, ActionButton, Score, Details, Medal, CardContainer };
