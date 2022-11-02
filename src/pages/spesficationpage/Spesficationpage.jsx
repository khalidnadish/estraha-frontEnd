import React from "react";
import data from "./data.json";
import maindata from "./maindata.json";

import { FaSwimmer } from "react-icons/fa";
import Pageheader from "../../components/pageheader/Pageheader";
import cpm from "./cpm";

const Spesficationpage = () => {
  return (
    <cpm.Container>
      <Pageheader title={"مواصفات الاستراحة"} />

      <cpm.ActionContainer>
        <cpm.TopTitle>
          <cpm.TitleText>المميزات</cpm.TitleText>
        </cpm.TopTitle>

        <ShowBreif />
      </cpm.ActionContainer>
      <cpm.DetailContainer>
        <cpm.TopTitle>
          <cpm.TitleText>التفاصيل</cpm.TitleText>

        </cpm.TopTitle>
        <cpm.DetailText>{maindata[0].spDescription}</cpm.DetailText>
        
      </cpm.DetailContainer>
    </cpm.Container>
  );
};

const ShowBreif = () => {
  return (
    <>
      {data.map((el) => {
        return (
          <React.Fragment key={el.id}>
            <cpm.ImageTextWraper>
              <cpm.Image src={el.spe_icon} />
              {/* <FaSwimmer size={"2em"} color={"white"}/> */}
              <cpm.TitleText>{el.spDescription}</cpm.TitleText>
            </cpm.ImageTextWraper>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Spesficationpage;
