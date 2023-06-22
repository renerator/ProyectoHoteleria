import React from "react";
import Meta from "./../components/Meta";
import Navbar from "./../components/Navbar";
import BackgroundSlider3 from "./../components/BackgroundSlider3";
import HeroSection5 from "./../components/HeroSection5";
import SideNavigation from "./../components/SideNavigation";
import ContentDash5 from "./../components/ContentDash5";
import { useRouter } from "./../util/router";

function ListSellPage(props) {
  const router = useRouter();
  return (
    <>
      <Meta title="ListSell" />
      <Navbar />
      <BackgroundSlider3
        image="https://images.alphacoders.com/681/thumb-1920-681458.jpg"
        opacity={props.bgImageOpacity}
        width="100%"
      />
      <HeroSection5
        bgColor="primary"
        size="large"
        position="absolute"
        zIndex={-50}
        bgImage="https://source.unsplash.com/ugnrXk1129g/1600x800"
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Get Started"
        buttonColor="default"
        buttonPath="/pricing"
      />
      <SideNavigation
        bgColor="light"
        size="normal"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
      <ContentDash5
        overflow="auto"
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Estadísticas de Noviembre"
        subtitle=""
      />
    </>
  );
}

export default ListSellPage;
