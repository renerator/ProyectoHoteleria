import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Info11 from "./Info11";
import Info12 from "./Info12";
import Info15 from "./Info15";

function ModaCont5(props) {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = () => {
    console.log("newValue");
  };

  return (
    <>
      <Box align="center">
        <Grid container={true} spacing={2}>
          <Grid>
            <img
              src="https://drive.google.com/uc?export=view&id=1Z8O8yoETBmIMol1N5KNo_mCBC2JNlT5Q"
              width="100%"
            />
          </Grid>
          <Grid
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              verticalAlign: "middle",
              color: "rgba(50,50,50,1)",
            }}
          >
            <div
              style={{
                paddingRight: "1em",
                fontSize: "0.95em",
                verticalAlign: "middle",
                color: "rgba(50,50,50,1)",
              }}
            >
              SKU 01060279251
            </div>
            <div
              style={{
                paddingTop: "1em",
                fontSize: "0.95em",
                verticalAlign: "middle",
                color: "rgba(50,50,50,1)",
              }}
            >
              <Grid container={true} spacing={2}>
                <Grid md={4} xs={4}>
                  SKU
                </Grid>
                <Grid md={5} ml={1}>
                  <input value="01060279255" />
                </Grid>
              </Grid>
            </div>
            <div
              style={{
                paddingTop: "1em",
                fontSize: "0.95em",
                verticalAlign: "middle",
                color: "rgba(50,50,50,1)",
              }}
            >
              <Grid container={true} spacing={2}>
                <Grid md={4} xs={4}>
                  Producto
                </Grid>
                <Grid md={6} ml={1}>
                  <input value="Agua mineral 24x 500ml" />
                </Grid>
              </Grid>
            </div>
            <div
              style={{
                paddingTop: "1em",
                fontSize: "0.95em",
                verticalAlign: "middle",
                color: "rgba(50,50,50,1)",
              }}
            >
              <Grid container={true} spacing={2}>
                <Grid md={4} xs={4}>
                  AREA
                </Grid>
                <Grid md={6} ml={1}>
                  <input value="Otros" />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Box>
      <div style={{ paddingTop: "0em" }}>
        <Tabs
          value={tabIndex}
          indicatorColor="primary"
          textColor="primary"
          centered={true}
        >
          <Tab
            label="Materialidad en 1° categoría"
            value={0}
            onClick={() => {
              setTabIndex(0);
            }}
          />
          <Tab
            label="Materialidad en 2° categoría"
            value={1}
            onClick={() => {
              setTabIndex(1);
            }}
          />
          <Tab
            label="Materialidad en 3° categoría"
            value={2}
            onClick={() => {
              setTabIndex(2);
            }}
          />
        </Tabs>
      </div>
      <div style={{ paddingTop: "0.25em" }}>
        <Button variant="contained" color="primary" size="small">
          Agregar material
        </Button>
      </div>
      <Box mt={1}>
        {tabIndex === 0 && <Info11 />}

        {tabIndex === 1 && <Info12 />}

        {tabIndex === 2 && <Info15 />}
      </Box>
      <div style={{ paddingTop: "2em", textAlign: "center" }}>
        <Button variant="contained" color="primary" size="small">
          Guardar
        </Button>
      </div>
    </>
  );
}

export default ModaCont5;
