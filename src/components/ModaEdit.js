import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import InputLabel from "@material-ui/core/InputLabel";
import Info1 from "./Info1";
import Info22 from "./Info22";
import Info5 from "./Info5";

function ModaEdit(props) {
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
          Editar reserva
        </div>
      </Box>
      <Tabs
        value={tabIndex}
        indicatorColor="primary"
        textColor="primary"
        centered={false}
      >
        <Tab
          label="Habitacion 1020"
          value={0}
          onClick={() => {
            setTabIndex(0);
          }}
        />
      </Tabs>
      <Box>
        <InputLabel />

        {tabIndex === 0 && <Info1 />}

        {tabIndex === 1 && <Info22 />}

        {tabIndex === 2 && <Info5 />}
      </Box>
    </>
  );
}

export default ModaEdit;
