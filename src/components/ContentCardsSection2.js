import React from "react";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeaderHome from "./SectionHeaderHome";
import BaseHome from "./BaseHome";
import { useRouter } from "./../util/router";

const useStyles = makeStyles((theme) => ({
  width: "70%",
  media: {
    height: 160,
  },
}));

function ContentCardsSection2(props) {
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
        <SectionHeaderHome
          title="CATEGORIA DOMICILIARIA"
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        <br />
        <Divider />
        <Box>
          <BaseHome section={router.query.section} key={router.query.section} />
        </Box>
        <Box textAlign="center" mt={2}>
          <Grid container={true} justifyContent="center" spacing={4} mt={2}>
            <Grid item={true} xs={6} md={4} lg={6}>
              <img
                src="https://drive.google.com/uc?export=view&id=1MZolzonFY3BBZRRZkd2MzsrpPoJqkwaZ"
                width="100%"
              />
            </Grid>
            <Grid item={true} xs={6} md={4} lg={6}>
              <img
                src="https://drive.google.com/uc?export=view&id=1xh2Xy_BrQclw_NI4wcyxGbulraLjrTWy"
                width="100%"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Section>
  );
}

export default ContentCardsSection2;
