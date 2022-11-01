import React from "react";
import {HeaderWraper,
  PageheaderDiv,
  CatArea} from "./cpm"


function Pageheader({ title, category = [] }) {
  return (
    <>
      <HeaderWraper>
        <PageheaderDiv>{title}</PageheaderDiv>
        {category.map((el,idx)=><CatArea key={el.id}>{el.catname}</CatArea>)}
      </HeaderWraper>
    </>
  );
}

export default Pageheader;
