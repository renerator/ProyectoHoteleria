import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import capitalize from "@material-ui/core/utils/capitalize";
import BackgroundImage from "./BackgroundImage";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflow: "auto",
    marginLeft: "16%",
    // Ensure child <Container> is above background
    // image (if one is set with the bgImage prop).
    "& > .MuiContainer-root": {
      position: "relative",
    },
  },
  listText: {
    color: "#2e8b57",
  },
  // Create color classes that set background color and determine
  // text color and dividing border automatically based on background color.
  // Adds the keys colorDefault, colorLight, etc
  ...[
    ["default", theme.palette.background.default],
    ["light", emphasize(theme.palette.background.default, 0.03)],
    ["primary", theme.palette.primary.main],
    ["secondary", theme.palette.secondary.main],
  ].reduce((acc, [name, value]) => {
    acc[`color${capitalize(name)}`] = {
      backgroundColor: value,
      // Ensure text is legible on background
      color: theme.palette.getContrastText(value),
      // Sibling selector that adds a top border if section above
      // has the same color class.
      // We use emphasize to compute border based on background color
      // and make sure it's always lightly visible.
      [`& + &`]: {
        borderTop: `1px solid ${emphasize(value, 0.09)}`,
      },
    };
    return acc;
  }, {}),

  colorInherit: {
    color: "inherit",
  },

  colorTransparent: {
    backgroundColor: "transparent",
    color: "inherit",
  },
}));

function Section1(props) {
  const classes = useStyles();

  const {
    bgColor = "#1A73E8",
    bgImage,
    bgImageOpacity,
    size = "normal",
    className,
    children,
    ...otherProps
  } = props;

  // Get MUI responsize size object based
  // on size prop (normal, medium, large, auto)
  const verticalPadding = {
    normal: { xs: 6 },
    medium: { xs: 6, sm: 4 },
    large: { xs: 6, sm: 4 },
    auto: 0,
  }[size];

  return (
    <>
      <Paper className={classes.home} />
      <Box
        component="section"
        py={verticalPadding}
        className={
          classes.root +
          ` ${classes[`color${capitalize(bgColor)}`]}` +
          (className ? ` ${className}` : "")
        }
        {...otherProps}
      >
        {bgImage && (
          <BackgroundImage image={bgImage} opacity={bgImageOpacity} />
        )}

        {props.children}
      </Box>
    </>
  );
}

export default Section1;
