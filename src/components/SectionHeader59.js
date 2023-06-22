import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
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

function SectionHeader59(props) {
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
    <Box lg={12} md={12} mb={4}>
      <Grid container={true} spacing={2}>
        <Grid
          item={true}
          xs={true}
          lg={2}
          md={2}
          xs={6}
          style={{
            paddingRight: "2em",
            fontSize: "1em",
            textAlign: "center",
            color: "rgba(50,50,50,1)",
            display: "flex",
            alignItems: "center",
          }}
        >
          Buscar SKU
        </Grid>
        <Grid item={true} xs={true} lg={4} md={4} xs={6}>
          <TextField
            variant="outlined"
            type="email"
            label="Escribe aqui para buscar "
            name="email"
            fullWidth={true}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionHeader59;
