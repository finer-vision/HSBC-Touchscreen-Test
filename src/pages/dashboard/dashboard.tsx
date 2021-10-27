import React from "react";
import { Wrapper, Image, Video } from "./styles";
import { asset } from "../../utils";

export default function Dashboard() {
  return (
    <Wrapper>
      <Image src={asset("/assets/images/test.jpg")} alt="" />
      <Video src={asset("/assets/videos/test.mp4")} autoPlay muted />
    </Wrapper>
  );
}
