import type { NextPage } from "next";
import { Stack } from "@mui/material";

import { Header } from "components/home/Header";
import { Product } from "components/home/Product";
import { Contact } from "components/home/Contact";
import { Intro } from "components/home/Intro";

type HomeProps = {
  slideSrc: string[];
  logoSrc: string;
};

const Home = ({ slideSrc, logoSrc }: HomeProps) => {
  return (
    <Stack direction="column" spacing={6}>
      <Header slideSrc={slideSrc} logoSrc={logoSrc} />
      <Intro />
      <Product />
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
    },
  };
}
