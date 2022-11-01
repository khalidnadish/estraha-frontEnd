import React from "react";
import styled from "styled-components";
import Pageheader from "../../components/pageheader/Pageheader"
import OfferCard from "../../components/offerCard/OfferCard";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Offerpage = () => {
  return (
    <Container>
      <Pageheader title = {"العروض"}/>
      <OfferCard endingTime={parseInt(Date.parse("2022-11-04"))}/>
      <OfferCard endingTime={parseInt(Date.parse("2022-11-06"))}/>
      <OfferCard endingTime={parseInt(Date.parse("2022-11-15"))}/>
      <OfferCard endingTime={parseInt(Date.parse("2022-11-22"))}/>
      <OfferCard endingTime={parseInt(Date.parse("2022-11-28"))}/>
      <OfferCard endingTime={parseInt(Date.parse("2022-11-30"))}/>
      {/* <OfferCard /> */}
     
      
    </Container>
  );
};

export default Offerpage;
