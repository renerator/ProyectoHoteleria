import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Info19 from "./Info19";

function ModaCont52(props) {
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
      <Box>{tabIndex === 0 && <Info19 />}</Box>
    </>
  );
}

export default ModaCont52;
