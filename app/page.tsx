import Box from "@mui/material/Box";
import { Contact } from "components/home/Contact";
import {
  homeProducts,
  homeThumbnails,
  introPills,
} from "components/home/constant";
import { Header } from "components/home/Header";
import { Intro } from "components/home/Intro";
import { Product } from "components/home/Product";
import { sharedSx } from "components/home/styles";
import { intro } from "content";

export default function HomePage() {
  return (
    <Box component="main" sx={sharedSx.pageRoot}>
      <Header mainBannerSrc="/home/banner-main.jpg" thumbnails={homeThumbnails} />
      <Intro intro={intro} pills={introPills} />
      <Product products={homeProducts} />
      <Contact />
    </Box>
  );
}
