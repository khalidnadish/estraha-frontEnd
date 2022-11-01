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

 
 
 

export const HourStyle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};

`;

 

export const ConutDownWraper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  width: 100%;
`;


export const UnitWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: .5px solid ${({ theme }) => theme.textSoft};
  border-radius: 4px;
 
`;

 
export const Hr = styled.hr`
  margin: 3px 0px;
  border: 0.5px solid ${({ theme }) => theme.text};
`;

export const TileStyle = styled.h1`
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};

`;
 