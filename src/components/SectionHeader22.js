import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LinkMui from "@material-ui/core/Link";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "./../util/router";

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

function SectionHeader22(props) {
  const classes = useStyles();

  const { subtitle, title, size, className, ...otherProps } = props;

  const validSections = {
    materialidad_1: true,
    materialidad_2: true,
    materialidad_3: true,
  };
  const [open, setOpen] = useState(false);
  const section = validSections[props.section]
    ? props.section
    : "materialidad_1";
  // Render nothing if no title or subtitle
  if (!title && !subtitle) {
    return null;
  }

  return (
    <Box lg={12} md={12} mb={4} align="left">
      <Grid container={true} spacing={2}>
        <Grid md={2} lg={2}>
          <Button variant="contained" size="small">
            Nuevo SKU
          </Button>
        </Grid>
        <Grid>
          <LinkMui
            component={Link}
            to=""
            ml="2em"
            onClick={(event) => {
              event.preventDefault();
              setOpen(true);
            }}
          >
            ¿Necesita ayuda para registrar sus SKU?
          </LinkMui>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onBackdropClick={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>¿Necesita ayuda para registrar sus SKU?</DialogTitle>
        <DialogContent>
          <Typography align="center" variant="subtitle1">
            Para ayudarte a identificar la materialidad de tus SKU, podemos
            asistirte mediante las siguientes opciones:
          </Typography>
          <Box align="center" mb={4} mt={4}>
            <Button variant="contained" color="primary" size="large">
              Generar una asistencia remota de un experto REP
            </Button>
            <Typography variant="subtitle2">
              Esta videollamada, con de uno de los expertos REP de Acción
              Circular, permitirá que te ayudemos a identificar la materialidad
              de tus SKU's.
            </Typography>
          </Box>
          <Box align="center" mb={4}>
            <Button variant="contained" color="primary" size="large">
              Generar una visita en terreno de un experto REP
            </Button>
            <Typography variant="subtitle2">
              Esta visita, por parte de uno de los expertos REP de Acción
              Circular, permitirá que identifiquemos la materialidad de tus
              SKU's.
            </Typography>
          </Box>
          <Box align="center" mb={4} mt={4}>
            <Button variant="contained" color="info" size="large">
              Ayuda mediante reconocimiento de IA (próximamente)
            </Button>
            <Typography variant="subtitle2">
              Esta herramienta de reconocimiento de imagen, mediante
              inteligencia artificial, te ayudará a identificar la materialidad
              de la mayoría de tus SKU's.
            </Typography>
          </Box>
          <Box mb={2} mt={2}>
            <Divider />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default SectionHeader22;
