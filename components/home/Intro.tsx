import React from "react";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import Image from "next/image";
import Link from "next/link";
import styles from "components/home/HomePage.module.css";

export type IntroPill = {
  icon: "hotel" | "coffee" | "shopping";
  label: string;
  href: string;
};

type IntroProps = {
  intro: string;
  imageSrc: string;
  pills: IntroPill[];
};

const renderPillIcon = (icon: IntroPill["icon"]) => {
  switch (icon) {
    case "hotel":
      return <HotelRoundedIcon className={styles.pillIcon} />;
    case "coffee":
      return <LocalCafeRoundedIcon className={styles.pillIcon} />;
    case "shopping":
      return <ShoppingBagRoundedIcon className={styles.pillIcon} />;
    default:
      return <ShoppingBagRoundedIcon className={styles.pillIcon} />;
  }
};

export const Intro = ({ intro, imageSrc, pills }: IntroProps) => {
  return (
    <section className={styles.introSection}>
      <div className={styles.sectionInner}>
        <p className={styles.sectionEyebrow}>关于我们</p>
        <h2 className={styles.sectionTitle}>
          iViolet 公司致力于为客户提供高性价比的定制化电子商务解决方案
        </h2>

        <div className={styles.introBody}>
          <div className={styles.introImageCard}>
            <Image
              src={imageSrc}
              alt="iViolet team introduction"
              fill
              className={styles.introImage}
              sizes="(max-width: 900px) 100vw, 440px"
            />
          </div>

          <div>
            <p className={styles.introCopy}>{intro}</p>
            <div className={styles.introPills}>
              {pills.map((item) => (
                <Link key={item.label} href={item.href} className={styles.introPillLink}>
                  {renderPillIcon(item.icon)}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
