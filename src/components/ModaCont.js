import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import Info from "./Info";
import Info22 from "./Info22";
import Info5 from "./Info5";

function ModaCont(props) {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = () => {
    console.log("newValue");
  };

  return (
    <>
      <Box align="center">
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
      </Box>
      <Box>
        <InputLabel />

        {tabIndex === 0 && <Info />}

        {tabIndex === 1 && <Info22 />}

        {tabIndex === 2 && <Info5 />}
      </Box>
    </>
  );
}

export default ModaCont;
