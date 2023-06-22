import React from "react";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Section1 from "./Section1";

const useStyles = makeStyles((theme) => ({
  width: "70%",
  media: {
    height: 160,
  },
}));

function ContentCardsSection21(props) {
  const classes = useStyles();

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
    <Section1
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      marginLeft="25%"
      width="70%"
      bgImageOpacity={props.bgImageOpacity}
    >
      <div
        style={{
          paddingRight: "1em",
          fontSize: "0.95em",
          verticalAlign: "middle",
          color: "rgba(50,50,50,1)",
        }}
      >
        Crear reserva
      </div>
      <Container>
        <br />
        <Divider />
        <Box />
        <Box textAlign="center" mt={2}>
          <Grid container={true} spacing={5}>
            <Grid item={true} xs={12} md={6}>
              <TextField
                variant="outlined"
                type="text"
                label="Nombre huesped"
                name="coachcoreo"
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12} md={6}>
              <TextField
                variant="outlined"
                type="text"
                label="RUT"
                name="coachcoreo"
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12} md={6}>
              <TextField
                variant="outlined"
                type="number"
                label="Telefono"
                name="coachcoreo"
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12} md={6}>
              <TextField
                variant="outlined"
                type="text"
                label="Correo"
                name="coachcoreo"
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12} md={6}>
              <TextField
                variant="outlined"
                type="date"
                label="Fecha entrada"
                name="coachcoreo"
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12} md={6}>
              <TextField
                variant="outlined"
                type="date"
                label="Fecha salida"
                name="coachcoreo"
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12} md={6}>
              <TextField
                variant="outlined"
                type="Number"
                disabled="true"
                label="N° habitación"
                title="2459"
                name="coachcoreo"
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12} md={6}>
              <TextField
                variant="outlined"
                type="number"
                disable="True"
                label="Capacidad"
                name="coachcoreo"
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12} md={6}>
              <Button variant="contained" color="primary" size="large">
                Crear reserva
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Section1>
  );
}

export default ContentCardsSection21;
