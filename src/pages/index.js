import React from "react";
import Grid from "@material-ui/core/Grid";
import Meta from "./../components/Meta";
import Navbar from "./../components/Navbar";
import BackgroundSlider2 from "./../components/BackgroundSlider2";
import SideNavigation from "./../components/SideNavigation";
import ContentCardsSection2 from "./../components/ContentCardsSection2";
import NewsletterSection2 from "./../components/NewsletterSection2";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <Navbar />
      <BackgroundSlider2 opacity={props.bgImageOpacity} width="100%" />
      <SideNavigation
        bgColor="light"
        size="normal"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
      <ContentCardsSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Estadísticas de Noviembre"
        subtitle=""
      />
      <Grid container={true} justifyContent="center" spacing={4}>
        <Grid>
          <Grid />
          <div>Text</div>
        </Grid>
        <NewsletterSection2
          bgColor={props.bgColor}
          size={props.size}
          bgImage={props.bgImage}
          bgImageOpacity={props.bgImageOpacity}
        />
      </Grid>
    </>
  );
}

export default IndexPage;
