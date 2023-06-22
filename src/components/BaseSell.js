import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListProd29 from "./ListProd29";

const useStyles = makeStyles((theme) => ({
  listTitle: {
    width: "4em",
    marginLeft: "2em",
  },
}));

function BaseSell(props) {
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

  return <ListProd29 section={{ section }} />;
}

export default BaseSell;
