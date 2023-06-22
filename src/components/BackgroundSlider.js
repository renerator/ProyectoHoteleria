import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Main from "./Main";
import Routes from "./Routes";
import Section from "./Section";

const useStyles = makeStyles((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  height: "100%",

  container: {
    position: "fixed",
    top: 0,
    backgroundSize: "300px 500px",
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -10,
  },

  mai2: {
    float: "left",
    top: 75,
    position: "fixed",
    marginLeft: 250,
    zIndex: 1000,
  },
}));

function BackgroundSlider(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mai2}>
        <Main
          bgColor="light"
          size="normal"
          bgImage=""
          bgImageOpacity={1}
          title=""
          subtitle=""
          marginLeft={250}
          zIndex={10}
        >
          <Routes />
        </Main>
      </div>
      <Section
        bgColor={props.bgColor}
        size={props.size}
        bgImage={props.bgImage}
        bgImageOpacity={props.bgImageOpacity}
      />
    </>
  );
}

export default BackgroundSlider;
