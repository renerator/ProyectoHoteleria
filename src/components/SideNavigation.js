import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LinkMui from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Menu2 from "./Menu2";
import SectionHeader from "./SectionHeader";
import { Link } from "./../util/router";
import Section2 from "./Section2";

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  menu: {
    position: "fixed",
    zIndex: 100,
    width: "15%",
    left: 0,
    top: 0,
    padding: "0 8px 8px",
    marginTop: "70px",
    marginLeft: 12,
  },
  MuiListItemIconRoot: {
    color: "rgba(0, 0, 0, 0.54)",
    display: "inline-flex",
    minWidth: "56px",
    flexShrink: 0,
  },
  MuiListItemTextRoot: {
    flex: "1 1 auto",
    minWidth: "0",
    marginTop: "4px",
    marginBottom: "4px",
  },
}));

function SideNavigation(props) {
  const classes = useStyles();

  const items = [
    {
      name: "Dashboard",
      link: "/",
      width: "150px",
    },
    {
      name: "Reservas activas",
      link: "/activas",
      width: "135px",
    },
    {
      name: "Reservas realizadas",
      link: "/realizadas",
      width: "90px",
    },
    {
      name: "Reservas liberadas",
      link: "/activas",
      width: "90px",
    },
    {
      name: "Reservas terminadas",
      link: "/activas",
      width: "90px",
    },
    {
      name: "Usuarios",
      link: "/listUser",
      width: "90px",
    },
  ];

  return (
    <Paper className={classes.menu}>
      <Menu2
        bgColor="#fff"
        bgImage={props.bgImage}
        bgImageOpacity={props.bgImageOpacity}
      >
        <Container>
          <Box textAlign="center">
            <SectionHeader />
            <Grid container={true} width="100%" justifyContent="center">
              {items.map((item, index) => (
                <>
                  <Grid lg={1} md={1} xs={1} />
                  <Grid lg={11} md={11} xs={11}>
                    <LinkMui component={Link} to={item.link}>
                      {item.name}
                    </LinkMui>
                  </Grid>
                  <div />
                </>
              ))}
            </Grid>
          </Box>
        </Container>
      </Menu2>
      <Section2
        bgColor={props.bgColor}
        size={props.size}
        bgImage={props.bgImage}
        bgImageOpacity={props.bgImageOpacity}
      >
        <Container>
          <Box textAlign="center">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={4}
              textAlign="center"
            />
            <Grid container={true} justifyContent="center">
              {items.map((item, index) => (
                <Grid item={true} xs={12} md="auto" key={index}>
                  <Box py={2} px={3}>
                    <img src={item.image} width={item.width} alt={item.name} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Section2>
    </Paper>
  );
}

export default SideNavigation;
