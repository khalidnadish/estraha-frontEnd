import React from "react";
import styled from "styled-components";
import Pageheader from "../../components/Pageheader"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Reservepage = () => {
  return (
    <Container>
     <Pageheader title={"اجحز يومك"}/>
     
      
    </Container>
  );
};

export default Reservepage;
