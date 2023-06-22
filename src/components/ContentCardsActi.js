import React from "react";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeaderActi from "./SectionHeaderActi";
import BaseActi from "./BaseActi";
import { useRouter } from "./../util/router";

const useStyles = makeStyles((theme) => ({
  width: "70%",
  media: {
    height: 160,
  },
}));

function ContentCardsActi(props) {
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
      <Container>
        <SectionHeaderActi
          title="CATEGORIA DOMICILIARIA"
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        <br />
        <Divider />
        <Box>
          <BaseActi section={router.query.section} key={router.query.section} />
        </Box>
      </Container>
    </Section>
  );
}

export default ContentCardsActi;
