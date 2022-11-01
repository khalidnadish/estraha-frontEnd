import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${(props) => props.type !== "sm" && "30%"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  /* cursor: pointer; */
  display: ${(props) => props.type === "sm" && "flex"};
  height: fit-content;
  background-color: ${({ theme }) => theme.soft};
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;

export const Image = styled.img`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  border-radius: 8px;
  margin: auto;
  margin-top: 10px;
`;

export const Details = styled.div`
  display: flex;
  width: 100%;
  padding:5px;
`;

export const Texts = styled.div`
  width: 100%;
  mix-blend-mode: normal;
  margin-top: 10px;
  text-shadow: 1px 1px  7px;
  /* box-shadow: 0 0 5px 25px; */
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-right: 10px;
`;

export const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-right: 10px;
`;

export const VewInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-right: 10px;
`;

export const InfoWraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ClickImage = styled.img`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #999;
  border-radius: 8px;
  margin: auto;
  margin-top: 10px;
  box-shadow: 0 0 10px #ddd inset;
`;

export const Hr = styled.hr`
  margin: 3px 0px;
  border: 0.5px solid ${({ theme }) => theme.text};
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

export const ReserveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size:14px;
  font-weight: 600;
  background-color:red;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius:4px;
  width: 80%;
  padding: 5px 10px  5px 10px;
  margin: 10px 10px  10px 10px;
  cursor: pointer;
`;
