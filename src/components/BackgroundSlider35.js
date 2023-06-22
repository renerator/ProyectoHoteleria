import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    content: "",
    backgroundPosition: "center center",
    backgroundColor: "#556f91",
    backgroundSize: "100% 100%",
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
    padding: "0 8px 28px",
    paddingTop: "7%",
  },
}));

function BackgroundSlider35(props) {
  const classes = useStyles();

  const { image, opacity, ...otherProps } = props;

  return <Container heiht="100%" width="100%" className={classes.container} />;
}

export default BackgroundSlider35;
