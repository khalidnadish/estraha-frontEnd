import React from "react";
import Comments from "../comment/Comments";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import {
  Container,
  Image,
  Details,
  Texts,
  Title,
  Info,
  InfoWraper,
  VewInfo,
  ClickImage,
  Hr,
  ReserveButton,
  OfferHeaderWrapper,
  OfferTexts,
  OfferId,
  Offerfinish,
  OfferPriceText,
  OfferPricecurrncy,
  OfferPriceTextWraper
} from "./cpm";
import { useTheme } from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
const OfferCard = ({
  offerImage,
  offerId,
  offerDetail,
  offferUntil,
  OfferPrice,
  isActive,
  isShow,
  isStarted,
  cardText,
  viewcounter,
  cardDesSubtitle,
  cardChatcounter,

  type,
}) => {
 
  const theme = useTheme();

  return (
    <>
      <Container  type={type}    >
        {/*----- OfferHeaderWrapper ---*/}
        <OfferHeaderWrapper>
          <OfferTexts>رقم العرض</OfferTexts>
          <OfferId>{offerId}</OfferId>
          
        </OfferHeaderWrapper>
        
        {/*----- OfferImage ---*/}
        {offerImage && <Image type={type} src={offerImage} />}
        <Details type={type}>
          <Texts>
            <InfoWraper>
              <Title>{offerDetail}</Title>
            </InfoWraper>
            <Hr />
            {/* <Info>{cardDesSubtitle}</Info> */}

            {isActive ? (
              <>
                <OfferPriceTextWraper>
                  <OfferPriceText>
                    {OfferPrice}
                    <OfferPricecurrncy>ريال</OfferPricecurrncy>
                  </OfferPriceText>
                  <ReserveButton>احجز الان</ReserveButton>
                </OfferPriceTextWraper>
              </>
            ) : (
              <Offerfinish>انتهى العرض</Offerfinish>
            )}

            {isActive ? (
              <CountdownTimer countdownTimestampMs={offferUntil} />
            ) : null}
            <Hr />
            {/*----- counters ---*/}
            <VewInfo>
              <AiOutlineEye /> {viewcounter}
              <FaRegCommentDots /> {cardChatcounter}
            </VewInfo>
          </Texts>
        </Details>
      </Container>
     
    </>
  );
};

OfferCard.defaultProps =
{

  cardText:"offer1",
  viewcounter:50,
  cardDesSubtitle:"Offer Detail",
  cardChatcounter:15

}
export default OfferCard;
