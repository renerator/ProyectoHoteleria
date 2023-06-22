import React from "react";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Link } from "./../util/router";

function Info1(props) {
  return (
    <>
      <Divider />
      <Grid container={true} spacing={5}>
        <Grid item={true} xs={12} md={6}>
          <TextField
            variant="outlined"
            type="text"
            label="Nombre huesped"
            name="coachcoreo"
            value="Alicia Garcia"
            fullWidth={true}
          />
        </Grid>
        <Grid item={true} xs={12} md={6}>
          <TextField
            variant="outlined"
            type="text"
            label="RUT"
            name="coachcoreo"
            value="11.111.111-1"
            fullWidth={true}
          />
        </Grid>
        <Grid item={true} xs={12} md={6}>
          <TextField
            variant="outlined"
            type="text"
            label="Telefono"
            name="coachcoreo"
            value="+56912345678"
            fullWidth={true}
          />
        </Grid>
        <Grid item={true} xs={12} md={6}>
          <TextField
            variant="outlined"
            type="text"
            label="Correo"
            name="coachcoreo"
            value="correo@gmail.com"
            fullWidth={true}
          />
        </Grid>
        <Grid item={true} xs={12} md={6}>
          <TextField
            variant="outlined"
            type="date"
            label="Fecha entrada"
            name="coachcoreo"
            value="2023-06-12"
            fullWidth={true}
          />
        </Grid>
        <Grid item={true} xs={12} md={6}>
          <TextField
            variant="outlined"
            type="date"
            label="Fecha salida"
            name="coachcoreo"
            value="2023-06-19"
            fullWidth={true}
          />
        </Grid>
        <Grid item={true} xs={12} md={6}>
          <TextField
            variant="outlined"
            disabled="true"
            type="text"
            label="N° Habitación"
            name="coachcoreo"
            value="1020"
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

export default Info1;
