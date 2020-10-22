import React from "react";
import Story from "./Story";
import "./StoryReel.css";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://image.insider.com/5967a71056152c064e076f22?width=750&format=jpeg&auto=webp"
        profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
        title="Jeff Bezos"
      />
      <Story
        image="https://images.news18.com/ibnlive/uploads/2020/08/1598855293_untitled-design-45.png"
        profileSrc="https://yt3.ggpht.com/a/AATXAJzMvsKB7s_HIEoAvhxTnv5uwK5eyl74eXVTDTib=s900-c-k-c0xffffffff-no-rj-mo"
        title="Bill Gates"
      />{" "}
      <Story
        image="https://i.insider.com/5845f656e02ba734008b7981?width=750&format=jpeg&auto=webp"
        profileSrc="https://media.vanityfair.com/photos/5f15d28da61a845497890c9a/16:9/w_2000,h_1125,c_limit/mark-zuckerberg-surfer.png"
        title="Mark Zuckerberg"
      />{" "}
      <Story
        image="https://mays.tamu.edu/news/wp-content/uploads/sites/50/2009/03/0309buffett1.jpg"
        profileSrc="https://www.biography.com/.image/t_share/MTE5NTU2MzE2MTY4Njg1MDY3/warren-buffett-9230729-1-402.jpg"
        title="Warren Buffett"
      />{" "}
      <Story
        image="https://cnet2.cbsistatic.com/img/AIvvTymZRr3K5nCIDTnkDH39fsE=/470x836/2017/08/29/6ba18280-a17c-4da2-a267-83e151aa115d/gettyimages-462081694.jpg"
        profileSrc="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
        title="Elon Musk"
      />
    </div>
  );
}

export default StoryReel;
