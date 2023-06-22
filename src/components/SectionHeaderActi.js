import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import ModaCont from "./ModaCont";

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

function SectionHeaderActi(props) {
  const classes = useStyles();

  const { subtitle, title, size, className, ...otherProps } = props;
  const [open, setOpen] = useState(false);
  // Render nothing if no title or subtitle
  if (!title && !subtitle) {
    return null;
  }

  return (
    <>
      <Dialog
        open={open}
        maxWidth={false}
        onBackdropClick={() => {
          setOpen(false);
        }}
      >
        <DialogContent>
          <ModaCont />
        </DialogContent>
      </Dialog>
      <Box
        component="header"
        className={
          classes.root + (props.className ? ` ${props.className}` : "")
        }
        {...otherProps}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={function () {
            setOpen(true);
            console.log(open);
          }}
        >
          Crear reserva
        </Button>

        {title && (
          <>
            <Typography
              variant={`h4`}
              float="left"
              align="left"
              fontFamily="Arial"
              className={classes.h4_subt}
            >
              Reservas activas
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

export default SectionHeaderActi;
