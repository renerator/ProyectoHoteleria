import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListUser from "./ListUser";

const useStyles = makeStyles((theme) => ({
  listTitle: {
    width: "4em",
    marginLeft: "2em",
  },
}));

function BaseUser(props) {
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

  return <ListUser section={{ section }} />;
}

export default BaseUser;
