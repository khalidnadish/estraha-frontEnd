import React from "react";
import styled from "styled-components";
import Pageheader from "../../components/pageheader/Pageheader"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Freedaypage = () => {
  return (
    <Container>
      <Pageheader title={"احجز يومك"}/>
       
     
      
    </Container>
  );
};

export default Freedaypage;
