import React from "react";
import { Wrapper } from "./styles";
import Map from "../../components/map/map";
import Footer from "../../components/footer/footer";

export default function Dashboard() {
  return (
    <Wrapper>
      <Map />
      <Footer />
    </Wrapper>
  );
}
