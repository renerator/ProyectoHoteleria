import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader53 from "./SectionHeader53";
import SectionHeader4 from "./SectionHeader4";
import SectionHeader52 from "./SectionHeader52";
import SectionHeader59 from "./SectionHeader59";
import BaseSell from "./BaseSell";
import { useRouter } from "./../util/router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "75%",
    overflow: "auto",
    media: {
      height: 160,
    },
  },
  listTitle: {
    width: "4em",
    marginLeft: "2em",
  },
}));

function ContentDash5(props) {
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
      marginLeft="25%"
      width="70%"
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container overflow="auto">
        <SectionHeader53
          title="CATEGORIA DOMICILIARIA"
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <SectionHeader4
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          textAlign="center"
        />
        <SectionHeader52
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          textAlign="center"
          section={router.query.section}
        />
        <SectionHeader59
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          textAlign="center"
          section={router.query.section}
        />

        <Box mt={2}>
          <Divider />
        </Box>
        <Box textAlign="center" mt={2}>
          <BaseSell section={router.query.section} key={router.query.section} />
        </Box>
      </Container>
    </Section>
  );
}

export default ContentDash5;
