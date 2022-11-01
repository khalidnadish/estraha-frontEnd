import React from "react";
import Comments from "../comment/Comments";
import {
  Container,
  Image,
  Details,
  Texts,
  Title,
  Info,
  InfoWraper,
  VewInfo,
  ClickImage,Hr
} from "./cpm";
import  {useTheme } from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

import DiloagShow from "../../components/dailog/DiloagShow";
import useToggle from "../../utils/hooks/toggleHooke";
const Card = ({
  type,
  cardimage,
  cardText,
  viewcounter,
  cardDesSubtitle,
  cardChatcounter=0
  
}) => {
  const [open, toggle] = useToggle(false);
  const theme = useTheme();

  return (
    // <Link to="/video/test" style={{ textDecoration: "none" }}>
    <>
      <Container type={type} onClick={() => {toggle(true)}}>
        <Image type={type} src={cardimage} />
        <Details type={type}>
          <Texts>
            <InfoWraper>
              <Title>{cardText}</Title>
              <VewInfo>
                <AiOutlineEye /> {viewcounter} 
                <FaRegCommentDots /> {cardChatcounter} 
              </VewInfo>
            </InfoWraper>
            <Hr/>
            <Info>{cardDesSubtitle}</Info>
          </Texts>
        </Details>
      </Container>
      {open && (
        <DiloagShow open={open} toggle={toggle} title={cardText} titleColor={theme.soft} bodyColor={theme.bg}>
          <ClickImage type={type} src={cardimage} />
          <Comments/>
        </DiloagShow>
      )}
    </>
  );
};

export default Card;
