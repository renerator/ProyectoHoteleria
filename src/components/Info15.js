import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function Info15(props) {
  return (
    <Paper>
      <Container mt={2} mb={2}>
        <Box mt={5} mb={5}>
          <Typography>
            Este sku no presenta Materialidad 3° categoría
          </Typography>
        </Box>
      </Container>
      <Box />
    </Paper>
  );
}

export default Info15;
