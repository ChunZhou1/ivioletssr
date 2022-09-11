import React from "react";
import { Stack, Typography, Box } from "@mui/material";
export const Contact = () => {
  return (
    <Box
      sx={{ height: "500px", backgroundColor: "#232a85", paddingLeft: "5%" }}
    >
      <Stack direction="column" alignItems="flex-start" spacing={6} mt={6}>
        <Typography variant="h4" color={"white"}>
          联系我们
        </Typography>
        <Typography variant="h4" color={"white"}>
          iViolet Technology Inc.
        </Typography>
        <Typography variant="h4" color={"white"}>
          Address: 29 Singer Court, Toronto
        </Typography>
        <Typography variant="h4" color={"white"}>
          Email: ivioletca@gmail.com
        </Typography>
        <Typography variant="h4" color={"white"}>
          Tel: +1 4372314578
        </Typography>
      </Stack>
    </Box>
  );
};
