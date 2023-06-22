import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    top: "50%",
    textAlign: "center",
    width: "100%",
    heigh: "100%",
    position: "absolute",
    zIndex: 1000,
  },
}));

function HeroSection5(props) {
  const classes = useStyles();

  const [pending, setPending] = useState(true);
  setTimeout(() => {
    setPending(false);
  }, "2000");
  return (
    <>
      {pending && (
        <>
          <Box
            style={{
              position: "absolute",
              top: "center",
              backgroundColor: "rgba(255,255,255,0.5)",
              width: "100%",
              height: "100%",
              zIndex: 1000,
            }}
          />
          <Container />
          <CircularProgress
            style={{
              position: "absolute",
              top: "50%",
              zIndex: 1000,
              left: "50%",
            }}
          />
        </>
      )}
    </>
  );
}

export default HeroSection5;
