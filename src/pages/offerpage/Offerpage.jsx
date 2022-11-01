import React from "react";
import styled from "styled-components";
import Pageheader from "../../components/pageheader/Pageheader"
import OfferCard from "../../components/offerCard/OfferCard";
import data from "./data.json"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Offerpage = () => {
  return (
    <Container>
      <Pageheader title = {"العروض"}/>

      {
        data.map((el)=> 
        {
          return  (
          <>
          {el.isShow &&
            <OfferCard 
            key={el.id}
            offerImage={el.offerImage}
            offerId={el.offerId}
            offerDetail={el.offerDetail}
            offferUntil={parseInt(Date.parse(el.offferUntil))}
            OfferPrice={el.OfferPrice}
            isActive={el.isActive}
            isShow={el.isShow}
            isStarted={el.isStarted}
            viewcounter={el.viewcounter}
            cardChatcounter={el.cardChatcounter}
                    
            />
          }
          </>
          )
        }
        )
      }




      
      {/* <OfferCard /> */}
     
      
    </Container>
  );
};

export default Offerpage;
