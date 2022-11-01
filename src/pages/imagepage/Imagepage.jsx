import React, { useState } from "react";
import Pageheader from "../../components/pageheader/Pageheader";
import { Container, ImageWraper } from "./cpm";
import Card from "../../components/card/Card";
import data from "./data.json";
import catData from "./catData.json";





const Imagepage = () => {
  
  return (
    <>
      <Container>
        

        <Pageheader title={"الصور"}  category={catData} />
        <ImageWraper>
          {data.map((el) => {
            return (
              <React.Fragment key={el.id}>
                <Card
                  cardimage={el.cardImage}
                  cardText={el.cardDes}
                  viewcounter={el.viewDes}
                  cardDesSubtitle={el.cardDesSubtitle}
                  cardChatcounter={el.cardChatcounter}
                  onClick={() =>{
                  console.log(el.cardDes)
                    toggle(true)
                  }}
                />
              </React.Fragment>
            );
          })}
        </ImageWraper>
      </Container>
     
    </>
  );
};

export default Imagepage;
