import React from "react";
import { Box, Typography } from "@mui/material";
import { productFunctionSx } from "./styles";

export type FunctionDataType = {
  title: string;
  content: string;
};

type FunctionProps = {
  sectionTitle: string;
  functionDataArray: FunctionDataType[];
};

export const Function = ({ sectionTitle, functionDataArray }: FunctionProps) => {
  return (
    <Box sx={productFunctionSx.section}>
      <Typography sx={productFunctionSx.eyebrow}>功能模块</Typography>
      <Typography component="h2" sx={productFunctionSx.title}>
        {sectionTitle}
      </Typography>
      <Box sx={productFunctionSx.list}>
        {functionDataArray.map((item) => (
          <FunctionItem key={item.title} content={item.content} title={item.title} />
        ))}
      </Box>
    </Box>
  );
};

type FunctionItemProps = {
  title: string;
  content: string;
};

const FunctionItem = ({ title, content }: FunctionItemProps) => {
  return (
    <Box sx={productFunctionSx.item}>
      <Typography sx={productFunctionSx.itemTitle}>{title}</Typography>
      <Typography sx={productFunctionSx.itemBody}>{content}</Typography>
    </Box>
  );
};
