import React from "react";
import {Container} from "./cpm"
import Pageheader from "../../components/pageheader/Pageheader"
import data from "./data.json";
import Video from "../../utils/Video";



const Videopage = () => {
  return (
    <Container>
      <Pageheader title={"فيديوهات الاستراحة"} />
      {
        data.map((el)=>{
          return(
            <Video key={el.id} 
            videoTitle={el.videoTitle}
            videoId={el.videoId}
            viewCounter={el.viewCounter}
            likeCouner  ={el.likeCouner}
              dislikeCounter  ={el.dislikeCounter}
            />
          )
        })
      }
      
      
    </Container>
  );
};

export default Videopage;
