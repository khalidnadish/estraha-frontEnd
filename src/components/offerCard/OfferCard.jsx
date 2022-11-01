import React from "react";
import Comments from "../comment/Comments";
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import {
  Container,
  Image,
  Details,
  Texts,
  Title,
  Info,
  InfoWraper,
  VewInfo,
  ClickImage,Hr,ReserveButton
} from "./cpm";
import  {useTheme } from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

import DiloagShow from "../dailog/DiloagShow";
import useToggle from "../../utils/hooks/toggleHooke";
const OfferCard = ({
  type,
  cardimage,
  cardText,
  viewcounter,
  cardDesSubtitle,
  cardChatcounter,
  endingTime,
  
}) => {
  const [open, toggle] = useToggle(false);
  const theme = useTheme();
  // let ts = (new Date("2020/11/11")).getTime();
  // let ts = Date.parse(endAt);
 
  // alert(timex);
  return (
    // <Link to="/video/test" style={{ textDecoration: "none" }}>
    <>
      <Container
        type={type}
        onClick={() => {
          toggle(true);
        }}
      >
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
            <Hr />
            <Info>{cardDesSubtitle}</Info>
            <ReserveButton>احجز الان</ReserveButton>
            <CountdownTimer countdownTimestampMs={endingTime} />
          </Texts>
        </Details>
      </Container>
      {open && (
        <DiloagShow
          open={open}
          toggle={toggle}
          title={cardText}
          titleColor={theme.soft}
          bodyColor={theme.bg}
        >
          <ClickImage type={type} src={cardimage} />
          <Comments />
        </DiloagShow>
      )}
    </>
  );
};

// OfferCard.defaultProps = 
// {
  
//   cardText:"offer1",
//   viewcounter:50,
//   cardDesSubtitle:"Offer Detail",
//   cardChatcounter:15
  
// }
export default OfferCard;
