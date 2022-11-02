import React from "react";
import control from "./index";
import icons from "./icons";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

const OfferCard = ({
  offerImage,
  offerId,
  offerDetail,
  offferUntil,
  OfferPrice,
  isActive,
  viewcounter,
  cardChatcounter,
  type,
}) => {
  return (
    <>
      <control.Container type={type}>
        {/*----- OfferHeaderWrapper ---*/}

        <control.OfferHeaderWrapper>
          <control.OfferTexts>رقم العرض</control.OfferTexts>
          <control.OfferId>{offerId}</control.OfferId>
        </control.OfferHeaderWrapper>

        {/*----- OfferImage ---*/}
        {offerImage && <control.Image type={type} src={offerImage} />}
        <control.Details type={type}>
          <control.Texts>
            <control.InfoWraper>
              <control.Title>{offerDetail}</control.Title>
            </control.InfoWraper>
            <control.Hr />

            {isActive ? (
              <>
                <control.OfferPriceTextWraper>
                  <control.OfferPriceText>
                    {OfferPrice}
                    <control.OfferPricecurrncy>ريال</control.OfferPricecurrncy>
                  </control.OfferPriceText>
                  <control.ReserveButton>احجز الان</control.ReserveButton>
                </control.OfferPriceTextWraper>
              </>
            ) : (
              <control.Offerfinish>انتهى العرض</control.Offerfinish>
            )}

            {isActive ? (
              <CountdownTimer countdownTimestampMs={offferUntil} />
            ) : null}
            <control.Hr />
            {/*----- counters ---*/}
            <control.VewInfo>
              <icons.AiOutlineEye /> {viewcounter}
              <icons.FaRegCommentDots /> {cardChatcounter}
            </control.VewInfo>
          </control.Texts>
        </control.Details>
      </control.Container>
    </>
  );
};

OfferCard.defaultProps = {
  cardText: "offer1",
  viewcounter: 50,
  cardDesSubtitle: "Offer Detail",
  cardChatcounter: 15,
};
export default OfferCard;
