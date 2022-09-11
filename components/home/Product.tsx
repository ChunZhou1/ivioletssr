import React from "react";
import { Stack, Grid, Typography, Link } from "@mui/material";
import Image from "next/image";

import { useProduct } from "hooks/home/useProduct";

const content1 =
  "专业化的网站设计，特别针对旅馆业(inn)以及奶茶咖啡等快消餐饮业具备完善的解决方案";
const content2 =
  "定制化的软件开发，特别是针对各种类型的电子商务软件（餐饮，小型超市）的定制化开发";

const content3 =
  "普通网站和手机App开发，包括展示型网站以及普通网站增加付款等电子商务功能";

export const Product = () => {
  const handleCallBackForProduct = useProduct();
  return (
    <Stack direction="column" spacing={6}>
      <Stack direction="column" alignItems="center">
        <Typography variant="h4">我们能够提供的服务</Typography>
      </Stack>
      <ProductItem
        keyValue={"web"}
        content={content1}
        imgSrc={"/p1.jpg"}
        callbackForproduct={handleCallBackForProduct}
      />

      <ProductItem
        keyValue={"rest"}
        content={content2}
        imgSrc={"/p3.jpg"}
        reverse={true}
        callbackForproduct={handleCallBackForProduct}
      />

      <ProductItem
        keyValue={"gerWeb"}
        content={content3}
        imgSrc={"/p2.jpg"}
        reverse={false}
        callbackForproduct={handleCallBackForProduct}
      />
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
