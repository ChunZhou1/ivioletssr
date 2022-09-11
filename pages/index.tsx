import type { NextPage } from "next";
import { Stack } from "@mui/material";

import { Header } from "components/home/Header";
import { Product } from "components/home/Product";
import { Contact } from "components/home/Contact";
import { Intro } from "components/home/Intro";

const Home: NextPage = () => {
  return (
    <Stack direction="column" spacing={6}>
      <Header />
      <Intro />
      <Product />
      <Contact />
    </Stack>
  );
};

export default Home;
