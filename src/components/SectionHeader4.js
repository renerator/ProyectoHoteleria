import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
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

function SectionHeader4(props) {
  const classes = useStyles();

  const { subtitle, title, size, className, ...otherProps } = props;

  // Render nothing if no title or subtitle
  if (!title && !subtitle) {
    return null;
  }

  return (
    <Box
      component="header"
      className={classes.root + (props.className ? ` ${props.className}` : "")}
      {...otherProps}
    >
      {title && (
        <>
          <Typography
            variant={`h5`}
            float="left"
            align="left"
            fontFamily="Arial"
            className={classes.h4_subt}
          >
            Estadísticas de
          </Typography>
          <Typography
            variant={`h5`}
            float="left"
            align="left"
            fontFamily="Arial"
            gutterBottom={props.subtitle ? true : false}
            className={classes.h4_subt_azul}
          >
            Noviembre
          </Typography>
          <div className={classes.tabs}>
            <Button
              variant="contained"
              color="info"
              size="large"
              style={{
                paddingRight: "1em",
                fontSize: "0.95em",
                textAlign: "center",
                backgroundColor: "rgba(245,245,245,1)",
                borderRadius: "4px 0px 0px 4px",
              }}
            >
              Elegir intervalo
            </Button>
            <Button variant="contained" color="primary" size="large">
              Este mes
            </Button>
          </div>
          <div className={classes.clea} />
        </>
      )}

      {subtitle && (
        <Typography variant="subtitle1" className={classes.subtitle}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default SectionHeader4;
