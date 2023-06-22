import React from "react";
import Grid from "@material-ui/core/Grid";
import Meta from "./../components/Meta";
import BackgroundSlider2 from "./../components/BackgroundSlider2";
import HeroSection5 from "./../components/HeroSection5";
import SideNavigation from "./../components/SideNavigation";

function PagePage(props) {
  return (
    <>
      <Meta title="Page" />
      <BackgroundSlider2
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
      <Grid container={true} justifyContent="center" spacing={4}>
        <Grid>
          <Grid />
        </Grid>
      </Grid>
      <div />
    </>
  );
}

export default PagePage;
