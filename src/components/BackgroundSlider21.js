import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    content: "",
    backgroundColor: "#E7ECEF",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    heigh: "100%",
    position: "fixed",
    zIndex: 0,
  },
  container: {
    marginLeft: "24%",
    width: "75%",
    height: "100%",
    paddingTop: "70px",
  },
}));

function BackgroundSlider21(props) {
  const classes = useStyles();

  const { image, opacity, ...otherProps } = props;

  return (
    <>
      <div
        className={classes.root}
        style={{
          backgroundImage: `url(${image})`,
          opacity: opacity,
        }}
        {...otherProps}
      />
      <Container heiht="100%" width="100%" className={classes.container} />
    </>
  );
}

export default BackgroundSlider21;
