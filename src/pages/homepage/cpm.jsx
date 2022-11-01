import styled from "styled-components";
export const Container = styled.div`

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
/* ----------------------------------------- */
export const HeroBanner = styled.div`
position: relative;
display: flex;
  justify-content: center;
  width: 100%;
  height: 70vh;
`;
/* ----------------------------------------- */
export const HeroImg = styled.img`

  max-width: 100%;
  height: auto;
  margin: 0 0 10px 0;
  border-radius: 10px;
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.25);
`;
/* ----------------------------------------- */
export const TextHeroBanner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.text};
  margin-bottom: 15px;
  margin-top: 15px;
`;
/* ----------------------------------------- */
export const ImageSection = styled.div`



  display: flex;
  justify-content: space-evenly;
  gap: 15px;
  width: 100%;
`;
/* ----------------------------------------- */
export const ImageWraper = styled.div`
  display: flex;
  width: 25%;
  height: 250px;
`;
/* ----------------------------------------- */
export const ImgSection = styled.img`
  max-width: 150px;
  height: auto;
  margin: 10px 0 30px 0;
  border-radius: 10px;
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.25);
`;
/* ----------------------------------------- */
export const ContactSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  position: relative;
  width: 48%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.soft};
`;
/* ----------------------------------------- */
export const ContactWarper = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
/* ----------------------------------------- */
export const AraeTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-right: 15px;
  width: ${(props) => (props.variant === "price" ? "20%" : "fit-content")};
`;
/* ----------------------------------------- */
export const AreaText = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-right: 15px;
  width: 50%;
`;
/* ----------------------------------------- */
export const ContactSectionHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  padding-right: 15px;
  top: -15px;
  left: 10px;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.soft};
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
`;


export const OverlayImg = styled.div`
  position: absolute;
  width: 100%;
  height: 186px;
  left: 0px;
  bottom:0px;
  background: linear-gradient(180deg,rbga(0.0.0.0.001) 0%,#000000 100%);
  /* background-color:antiquewhite; */
  mix-blend-mode: normal;
  color: rebeccapurple;
  opacity: 0.6;
  
`;