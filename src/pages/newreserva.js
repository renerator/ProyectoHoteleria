import React from "react";
import Meta from "./../components/Meta";
import Navbar2 from "./../components/Navbar2";
import BackgroundSlider21 from "./../components/BackgroundSlider21";
import SideNavigation2 from "./../components/SideNavigation2";
import ContentCardsSection21 from "./../components/ContentCardsSection21";

function NewreservaPage(props) {
  return (
    <>
      <Meta title="Newreserva" />
      <Navbar2 />
      <BackgroundSlider21 opacity={props.bgImageOpacity} width="100%" />
      <SideNavigation2
        bgColor="light"
        size="normal"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
      <ContentCardsSection21
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

export default NewreservaPage;
