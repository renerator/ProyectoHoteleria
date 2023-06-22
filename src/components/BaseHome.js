import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListHome from "./ListHome";

const useStyles = makeStyles((theme) => ({
  listTitle: {
    width: "4em",
    marginLeft: "2em",
  },
}));

function BaseHome(props) {
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

  return <ListHome section={{ section }} />;
}

export default BaseHome;
