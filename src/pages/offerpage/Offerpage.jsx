import React from "react";
import styled from "styled-components";
import Pageheader from "../../components/pageheader/Pageheader"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Offerpage = () => {
  return (
    <Container>
      <Pageheader title = {"العروض"}/>
      
     
      
    </Container>
  );
};

export default Offerpage;
