import React from "react";
import Container from "@material-ui/core/Container";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Contact from "./Contact";

function ContactSection(props) {
  return (
    <Section
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Contact
          showNameField={props.showNameField}
          buttonText={props.buttonText}
          buttonColor={props.buttonColor}
        />
      </Container>
    </Section>
  );
}

export default ContactSection;
