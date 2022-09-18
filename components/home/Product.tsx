import React from "react";
import { Stack, Grid, Typography, Link } from "@mui/material";
import Image from "next/image";

import { useProduct } from "hooks/home/useProduct";

export type ProductSingle = {
  keyValue: string;
  content: string;
  imgSrc: string;
};

type ProductProps = {
  product: ProductSingle[];
};

export const Product = ({ product }: ProductProps) => {
  const handleCallBackForProduct = useProduct();
  return (
    <Stack direction="column" spacing={6}>
      <Stack direction="column" alignItems="center">
        <Typography variant="h4">我们能够提供的服务</Typography>
      </Stack>

      {product.map((item, idx) => (
        <ProductItem
          key={item.keyValue}
          keyValue={item.keyValue}
          content={item.content}
          imgSrc={item.imgSrc}
          callbackForproduct={handleCallBackForProduct}
          reverse={!(idx % 2 === 0)}
        />
      ))}
    </Stack>
  );
};

type ProductItemProps = {
  keyValue: string;
  content: string;
  imgSrc: string;
  reverse?: boolean;
  callbackForproduct?: (key: string) => void;
};
const ProductItem = ({
  keyValue,
  content,
  imgSrc,
  reverse,
  callbackForproduct,
}: ProductItemProps) => {
  return (
    <Grid
      container
      direction={reverse ? "row-reverse" : "row"}
      justifyContent="center"
    >
      <Grid item sm={12} md={1}></Grid>
      <Grid item sm={12} md={5}>
        <Stack direction="column" alignItems="center">
          <Image src={imgSrc} width="400px" height="250px" alt={imgSrc} />
        </Stack>
      </Grid>
      <Grid item sm={12} md={5}>
        <Stack direction="column" alignItems="center">
          <Stack direction="column" alignItems="flex-start" spacing={10}>
            <Typography variant="h5">{content}</Typography>
            <Link
              variant="h5"
              sx={{ fontWeight: 700 }}
              color={"red"}
              underline="none"
              href="##"
              onClick={() => callbackForproduct && callbackForproduct(keyValue)}
            >
              详细了解
            </Link>
          </Stack>
        </Stack>
      </Grid>
      <Grid item sm={12} md={1}></Grid>
    </Grid>
  );
};
