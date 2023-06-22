import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import capitalize from "@material-ui/core/utils/capitalize";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",

    // Ensure child <Container> is above background
    // image (if one is set with the bgImage prop).
    "& > .MuiContainer-root": {
      position: "relative",
    },
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

function NewsletterSection2(props) {
  const classes = useStyles();

  return <Box />;
}

export default NewsletterSection2;
