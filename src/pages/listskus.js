import React from "react";
import Meta from "./../components/Meta";
import Navbar from "./../components/Navbar";
import BackgroundSlider3 from "./../components/BackgroundSlider3";
import HeroSection52 from "./../components/HeroSection52";
import SideNavigation from "./../components/SideNavigation";
import ContentDash2 from "./../components/ContentDash2";
import { useRouter } from "./../util/router";

function ListSkusPage(props) {
  const router = useRouter();
  return (
    <>
      <Meta title="ListSkus" />
      <Navbar />
      <BackgroundSlider3 opacity={props.bgImageOpacity} width="100%" />
      <HeroSection52
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
      <ContentDash2
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

export default ListSkusPage;
