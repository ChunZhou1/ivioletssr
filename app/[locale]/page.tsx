import Box from "@mui/material/Box";
import { Contact } from "components/home/Contact";
import { Header } from "components/home/Header";
import { Intro } from "components/home/Intro";
import { Product } from "components/home/Product";
import { sharedSx } from "components/home/styles";
import { getHomePageConstants } from "constant/home";
import { normalizeLocale } from "constant/locale";
import { notFound } from "next/navigation";

type HomePageProps = {
  params: {
    locale: string;
  };
};

export default function HomePage({ params }: HomePageProps) {
  const locale = normalizeLocale(params.locale);

  if (!locale) {
    notFound();
  }

  const homePageConstants = getHomePageConstants(locale);

  return (
    <Box component="main" sx={sharedSx.pageRoot}>
      <Header
        locale={locale}
        mainBannerSrc={homePageConstants.mainBannerSrc}
        thumbnails={homePageConstants.homeThumbnails}
        headerContent={homePageConstants.headerContent}
        heroContent={homePageConstants.heroContent}
      />
      <Intro
        locale={locale}
        intro={homePageConstants.intro}
        introContent={homePageConstants.introContent}
        pills={homePageConstants.introPills}
      />
      <Product
        locale={locale}
        products={homePageConstants.homeProducts}
        serviceContent={homePageConstants.serviceContent}
      />
      <Contact contactContent={homePageConstants.contactContent} />
    </Box>
  );
}
