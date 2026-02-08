import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "components/home/HomePage.module.css";

export type ProductSingle = {
  keyValue: string;
  title: string;
  description: string;
  href: string;
  icon: "hotel" | "coffee" | "shopping";
  imgSrc: string;
};

type ProductProps = {
  products: ProductSingle[];
};

const renderServiceIcon = (icon: ProductSingle["icon"]) => {
  switch (icon) {
    case "hotel":
      return <HotelRoundedIcon className={styles.serviceTitleIcon} />;
    case "coffee":
      return <LocalCafeRoundedIcon className={styles.serviceTitleIcon} />;
    case "shopping":
      return <ShoppingBagRoundedIcon className={styles.serviceTitleIcon} />;
    default:
      return <ShoppingBagRoundedIcon className={styles.serviceTitleIcon} />;
  }
};

export const Product = ({ products }: ProductProps) => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.sectionInner}>
        <p className={styles.sectionEyebrow}>我们的服务</p>
        <h2 className={styles.sectionTitle}>我们能够提供的服务</h2>

        <div className={styles.serviceGrid}>
          {products.map((item) => (
            <article key={item.keyValue} className={styles.serviceCard}>
              <div className={styles.serviceImageCard}>
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  className={styles.serviceImage}
                  sizes="(max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className={styles.serviceTitleRow}>
                {renderServiceIcon(item.icon)}
                <h3 className={styles.serviceTitle}>{item.title}</h3>
              </div>

              <p className={styles.serviceDesc}>{item.description}</p>

              <Link href={item.href} className={styles.cardButton}>
                <span>详细了解</span>
                <ArrowForwardRoundedIcon className={styles.cardButtonIcon} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
