import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
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

  clea: {
    clear: "left",
  },
}));

function SectionHeader53(props) {
  const classes = useStyles();

  const { subtitle, title, size, className, ...otherProps } = props;

  // Render nothing if no title or subtitle
  if (!title && !subtitle) {
    return null;
  }

  return (
    <>
      <Box
        component="header"
        className={
          classes.root + (props.className ? ` ${props.className}` : "")
        }
        {...otherProps}
      >
        {title && (
          <>
            <Typography
              variant={`h4`}
              float="left"
              align="left"
              fontFamily="Arial"
              className={classes.h4_subt}
            >
              Historial POM
            </Typography>
            <div className={classes.clea} />
          </>
        )}

        {subtitle && (
          <Typography variant="subtitle1" className={classes.subtitle}>
            {subtitle}
          </Typography>
        )}
      </Box>
      <Divider />
    </>
  );
}

export default SectionHeader53;
