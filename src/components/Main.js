import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import ContactSection from "./ContactSection";

const useStyles = makeStyles((theme) => ({
  zIndex: 10,
  position: "relative",
}));

function Main(props) {
  const classes = useStyles();

  const items = [
    {
      name: "Instagram",
      image: "https://uploads.divjoy.com/logo-instagram.svg",
      width: "150px",
    },
    {
      name: "Slack",
      image: "https://uploads.divjoy.com/logo-slack.svg",
      width: "135px",
    },
    {
      name: "Tinder",
      image: "https://uploads.divjoy.com/logo-tinder.svg",
      width: "90px",
    },
    {
      name: "Spotify",
      image: "https://uploads.divjoy.com/logo-spotify.svg",
      width: "135px",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <ContactSection
          bgColor="default"
          size="medium"
          bgImage=""
          bgImageOpacity={1}
          title="Contact Us"
          subtitle=""
          buttonText="Send message"
          buttonColor="primary"
          showNameField={true}
        />
      </Container>
    </Section>
  );
}

export default Main;
