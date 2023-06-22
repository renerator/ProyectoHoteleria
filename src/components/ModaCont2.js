import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Info1 from "./Info1";
import Info2 from "./Info2";
import Info3 from "./Info3";
import Info5 from "./Info5";

function ModaCont2(props) {
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
          SKU 01060279255
        </div>
      </Box>
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
        <Tab
          label="Ventas"
          value={3}
          onClick={() => {
            setTabIndex(3);
          }}
        />
      </Tabs>
      <Box>
        {tabIndex === 0 && <Info1 />}

        {tabIndex === 1 && <Info2 />}

        {tabIndex === 2 && <Info3 />}

        {tabIndex === 3 && <Info5 />}
      </Box>
    </>
  );
}

export default ModaCont2;
