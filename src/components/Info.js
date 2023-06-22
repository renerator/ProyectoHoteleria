import React from "react";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Link } from "./../util/router";

function Info(props) {
  return (
    <>
      <Divider />
      <Grid container={true} spacing={5}>
        <Grid item={true} xs={12} md={6}>
          <TextField />
        </Grid>
        <Grid item={true} xs={12} md={6}>
          <TextField />
        </Grid>
        <Grid item={true} xs={12} md={6}>
          <TextField />
        </Grid>
        <Grid item={true} xs={12} md={6}>
          <TextField />
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
            type="text"
            label="N° Habitación"
            name="coachcoreo"
            fullWidth={true}
          />
        </Grid>
        <Grid item={true} xs={12} md={6}>
          <TextField
            variant="outlined"
            disabled="true"
            type="text"
            label="Capacidad"
            name="coachcoreo"
            fullWidth={true}
          />
        </Grid>
      </Grid>
      <Grid container={true} spacing={5}>
        <Box mt="auto" pt={2}>
          <Button
            component={Link}
            to="./"
            variant="contained"
            color="primary"
            size="large"
          >
            Cancelar
          </Button>
          <Button variant="contained" color="primary" size="large">
            Actualizar
          </Button>
        </Box>
      </Grid>
    </>
  );
}

export default Info;
