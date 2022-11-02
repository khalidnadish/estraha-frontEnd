import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const DetailContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.text};
  width: 65%;
  border-radius: 4px;
  margin-top: 20px;
  padding-top: 30px;
  padding-bottom: 10px;
`;

const ActionContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.text};
  width: 30%;
  margin-top: 20px;
  border-radius: 4px;
  padding-top: 30px;
  padding-bottom: 10px;
`;

const TitleText = styled.span`

  font-weight: 200;
  font-size: .9rem;
  color: ${({ theme }) => theme.text};
  margin-right: 15px;
`;

export const Image = styled.img`
  width: 45px;
  height: auto;
  background-color: #999;
  border-radius: 8px;
`;

export const ImageTextWraper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
  padding: 0px 10px 0px 10px;
`;

export const TopTitle = styled.div`
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: ${({ theme }) => theme.soft};
  margin-bottom: 5px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  padding: 0em 0.5em 0em;
  width: 80px;
`;
const DetailText = styled.span`
    padding: 0.5em 0.5em;
  font-weight: 200;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-right: 15px;
`;

export default {
  Container,
  DetailContainer,
  ActionContainer,
  TitleText,
  Image,
  ImageTextWraper,
  TopTitle,
  DetailText
};
