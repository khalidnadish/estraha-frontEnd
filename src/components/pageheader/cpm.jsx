import styled from "styled-components";

export const HeaderWraper = styled.div`
display:flex;
justify-content: center;
align-items: center;
width: 100%;
gap: 10px;
background-color: ${({ theme }) => theme.soft};
padding: 8px;
border-radius: 4px;
position: sticky;
  top:55px
`;

export const PageheaderDiv = styled.h4`
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  text-align: center;
  border-bottom: 2px solid ${({ theme }) => theme.text};
`;
export const CatArea = styled.p`
font-size: 12px;
font-weight:lighter;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 3px 10px 3px 10px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 8px;
  cursor: pointer;
`;




