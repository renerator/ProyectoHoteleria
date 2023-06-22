import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListProd5 from "./ListProd5";

const useStyles = makeStyles((theme) => ({
  listTitle: {
    width: "4em",
    marginLeft: "2em",
  },
}));

function BaseLine2(props) {
  const classes = useStyles();

  const validSections = {
    info: true,
    mats: true,
  };

  const data = {
    domain: "company.com",
    companyName: "Company",
  };
  const section = props.section;

  return <ListProd5 section={{ section }} />;
}

export default BaseLine2;
