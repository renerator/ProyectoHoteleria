import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
    // Add bottom margin if element below
    "&:not(:last-child)": {
      marginBottom: "1.5rem",
    },
  },
  subtitle: {
    // Subtitle text generally isn't very long
    // so usually looks better to limit width.
    maxWidth: 700,
    // So we can have max-width but still
    // have alignment controlled by text-align.
    display: "inline-block",
  },

  h4_subt: {
    fontFamily: "Helvetica",
    fontWeight: "200",
    float: "left",
  },
  h4_subt_azul: {
    fontFamily: "Helvetica",
    fontWeight: "200",
    marginLeft: "0.2em",
    float: "left",
  },
  clea: {
    clear: "both",
  },
  tabs: {
    float: "right",
  },
}));

function SectionHeader12(props) {
  const classes = useStyles();

  const { subtitle, title, size, className, ...otherProps } = props;

  const validSections = {
    materialidad_1: true,
    materialidad_2: true,
    materialidad_3: true,
  };

  const section = validSections[props.section]
    ? props.section
    : "materialidad_1";
  // Render nothing if no title or subtitle
  if (!title && !subtitle) {
    return null;
  }

  return (
    <Box lg={12} md={12} mb={4} mt={1} align="right">
      <Button
        variant="contained"
        color="info"
        href="https://docs.google.com/spreadsheets/d/1uqtoKn3w8CFEAOQip99kAv5rvC8Y3s38/export?format=xlsx"
        size="medium"
        style={{
          backgroundColor: "rgba(51,196,129,1)",
          color: "rgba(255,255,255,1)",
        }}
      >
        Exportar a Excel
      </Button>
    </Box>
  );
}

export default SectionHeader12;
