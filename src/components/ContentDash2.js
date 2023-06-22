import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader3 from "./SectionHeader3";
import SectionHeader21 from "./SectionHeader21";
import SectionHeader20 from "./SectionHeader20";
import SectionHeader22 from "./SectionHeader22";
import BaseLine2 from "./BaseLine2";
import { useRouter } from "./../util/router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "75%",
    overflow: "auto",
    marginLeft: "0",
    media: {
      height: 160,
    },
  },
  home: {
    position: "fixed",
    zIndex: 100,
    width: "15%",
    left: 0,
    top: 0,
    padding: "0 8px 8px",
    marginTop: "70px",
    marginLeft: 12,
  },
  listTitle: {
    width: "4em",
    marginLeft: "2em",
  },
}));

function ContentDash2(props) {
  const classes = useStyles();

  const router = useRouter();

  const items = [
    {
      image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
      title: "Faucibus turpis in",
      body: "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/golden-gate",
    },
    {
      image: "https://source.unsplash.com/BkmdKnuAZtw/800x600",
      title: "Faucibus turpis in",
      body: "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/beach",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1vR8OUrrOXzyUI5coOQaC-FMPgdm9J_Bq",
      title: "Faucibus turpis in",
      body: "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/road",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      width="75%"
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container overflow="auto">
        <SectionHeader3
          title="CATEGORIA DOMICILIARIA"
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        <SectionHeader21
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          textAlign="center"
          section={router.query.section}
        />
        <SectionHeader20
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          textAlign="center"
          section={router.query.section}
        />
        <SectionHeader22
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          textAlign="center"
          section={router.query.section}
        />
        <BaseLine2 section={router.query.section} key={router.query.section} />

        <Box mt={2}>
          <Divider />
        </Box>
        <Box textAlign="center" mt={2} />
      </Container>
    </Section>
  );
}

export default ContentDash2;
