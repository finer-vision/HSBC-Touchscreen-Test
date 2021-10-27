import React from "react";
import { Wrapper, Image, Video } from "./styles";

export default function Dashboard() {
  return (
    <Wrapper>
      <Image src="/assets/images/test.jpg" alt="" />
      <Video src="/assets/videos/test.mp4" autoPlay muted />
    </Wrapper>
  );
}
