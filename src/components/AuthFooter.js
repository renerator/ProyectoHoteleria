import React from "react";
import LinkMui from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "./../util/router";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "0.9rem",
    textAlign: "center",
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  spacerSmall: {
    display: "inline-block",
    width: theme.spacing(1),
  },
  spacerMedium: {
    display: "inline-block",
    width: theme.spacing(2),
  },
}));

function AuthFooter(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.type === "forgotpass" && (
        <>
          {props.signinText}
          <span className={classes.spacerSmall} />
          <LinkMui component={Link} to={props.signinPath}>
            {props.signinAction}
          </LinkMui>
        </>
      )}
    </div>
  );
}

export default AuthFooter;
