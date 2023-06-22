import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
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

function SectionHeader10(props) {
  const classes = useStyles();

  const { subtitle, title, size, className, ...otherProps } = props;

  // Render nothing if no title or subtitle
  if (!title && !subtitle) {
    return null;
  }

  return (
    <Box mb={5}>
      <Grid container={true} lg={10}>
        <Grid container={true} lg={3} md={3}>
          <Grid lg={3} md={3} sm={3} xs={3}>
            <Typography style={{ lineHeight: "2em" }}>AREA</Typography>
          </Grid>
          <Grid>
            <Select defaultValue="JUGUETERIA">
              <option value="JUGUETERIA">JUGUETERIA</option>
            </Select>
          </Grid>
        </Grid>
        <Grid container={true} lg={5} md={5}>
          <Grid lg={5} md={5} sm={3} xs={3}>
            <Typography style={{ lineHeight: "2em" }}>TIPO PRODUCTO</Typography>
          </Grid>
          <Grid>
            <Select defaultValue="SOFT">
              <option value="SOFT">MI PRIMER JUGUETE</option>
            </Select>
          </Grid>
        </Grid>
        <Grid container={true} lg={4} md={4}>
          <Grid lg={3} md={3} sm={3} xs={3}>
            <Typography style={{ lineHeight: "2em" }}>LINEA</Typography>
          </Grid>
          <Grid>
            <Select defaultValue="MI PRIMER JUGUETE">
              <option value="MI PRIMER JUGUETE">MI PRIMER JUGUETE</option>
            </Select>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionHeader10;
