import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import ContactSection from "./ContactSection";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },

    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(3)}px`,
    },
  },
  figure: {
    maxWidth: 300,
    margin: "30px auto",
  },
  image: {
    height: "auto",
    maxWidth: "100%",
  },
}));

function Routes(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Explore",
      description:
        "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
      image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg",
    },
    {
      title: "Explore",
      description:
        "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
      image: "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
    },
    {
      title: "Explore",
      description:
        "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
      image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg",
    },
    {
      title: "Explore",
      description:
        "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
      image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg",
    },
  ];

  return (
    <Paper marginLeft="250px">
      <Section
        bgColor={props.bgColor}
        size={props.size}
        bgImage={props.bgImage}
        bgImageOpacity={props.bgImageOpacity}
        marginLeft="250px"
      >
        <Container marginLeft="250px">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={3}
            textAlign="center"
          />
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
    </Paper>
  );
}

export default Routes;
