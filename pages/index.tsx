import type { NextPage } from "next";
import { Stack } from "@mui/material";
import { ProductSingle } from "components/home/Product";

import { Header } from "components/home/Header";
import { Product } from "components/home/Product";
import { Contact } from "components/home/Contact";
import { Intro } from "components/home/Intro";
import { intro } from "content";

const content1 =
  "专业化的网站设计，特别针对旅馆业(inn)以及奶茶咖啡等快消餐饮业具备完善的解决方案";
const content2 =
  "定制化的软件开发，特别是针对各种类型的电子商务软件（餐饮，小型超市）的定制化开发";

const content3 =
  "普通网站和手机App开发，包括展示型网站以及普通网站增加付款等电子商务功能";

type HomeProps = {
  slideSrc: string[];
  logoSrc: string;
  intro: string;
  pic: string;
  productList: ProductSingle[];
};

const Home = ({ slideSrc, logoSrc, intro, pic, productList }: HomeProps) => {
  return (
    <Stack direction="column" spacing={6}>
      <Header slideSrc={slideSrc} logoSrc={logoSrc} />
      <Intro intro={intro} pic={pic} />
      <Product product={productList} />
      <Contact />
    </Stack>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      slideSrc: ["/bannar11.jpg", "/bannar22.jpg", "/bannar33.jpg"],
      logoSrc: "/logo.jpg",
      intro: intro,
      pic: "/logo.jpg",
      productList: [
        {
          keyValue: "proWeb",
          content: content1,
          imgSrc: "/p1.jpg",
        },
        {
          keyValue: "softwareDev",
          content: content2,
          imgSrc: "/p3.jpg",
        },
        {
          keyValue: "comWeb",
          content: content3,
          imgSrc: "/p2.jpg",
        },
      ],
    },
  };
}
