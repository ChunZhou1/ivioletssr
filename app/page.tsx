import { Header } from "components/home/Header";
import { Product } from "components/home/Product";
import { Contact } from "components/home/Contact";
import { Intro } from "components/home/Intro";
import styles from "components/home/HomePage.module.css";
import { intro } from "content";

const thumbnails = [
  {
    src: "/home/banner-inn.jpg",
    alt: "inn solution preview",
  },
  {
    src: "/home/banner-cafe.jpg",
    alt: "cafe solution preview",
  },
  {
    src: "/home/banner-ecommerce.jpg",
    alt: "ecommerce solution preview",
  },
];

const introPills = [
  {
    icon: "hotel" as const,
    label: "旅馆业订房系统",
    href: "/proWeb",
  },
  {
    icon: "coffee" as const,
    label: "餐饮点单与POS",
    href: "/softwareDev",
  },
  {
    icon: "shopping" as const,
    label: "电商网站与App",
    href: "/comWeb",
  },
];

const products = [
  {
    keyValue: "proWeb",
    title: "旅馆业解决方案",
    description:
      "专业化的网站设计，特别针对旅馆业(inn)以及奶茶咖啡等快消餐饮业具备完善的解决方案。",
    href: "/proWeb",
    icon: "hotel" as const,
    imgSrc: "/home/service-inn.jpg",
  },
  {
    keyValue: "softwareDev",
    title: "餐饮软件开发",
    description:
      "定制化的软件开发，特别是针对各种类型的电子商务软件（餐饮、小型超市）的定制化开发。",
    href: "/softwareDev",
    icon: "coffee" as const,
    imgSrc: "/home/service-rest.jpg",
  },
  {
    keyValue: "comWeb",
    title: "网站与 App 开发",
    description:
      "普通网站和手机 App 开发，包括展示型网站以及普通网站增加付款等电子商务功能。",
    href: "/comWeb",
    icon: "shopping" as const,
    imgSrc: "/home/service-web.jpg",
  },
];

export default function HomePage() {
  return (
    <main className={styles.pageRoot}>
      <Header mainBannerSrc="/home/banner-main.jpg" thumbnails={thumbnails} />
      <Intro intro={intro} imageSrc="/home/service-web.jpg" pills={introPills} />
      <Product products={products} />
      <Contact />
    </main>
  );
}
