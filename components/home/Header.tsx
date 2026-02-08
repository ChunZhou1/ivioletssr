import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Image from "next/image";
import React from "react";
import styles from "components/home/HomePage.module.css";

type HeaderProps = {
  mainBannerSrc: string;
  thumbnails: {
    src: string;
    alt: string;
  }[];
};

export const Header = ({ thumbnails, mainBannerSrc }: HeaderProps) => {
  return (
    <header className={styles.heroSection}>
      <div className={styles.sectionInner}>
        <div className={styles.topBar}>
          <div className={styles.brandGroup}>
            <span className={styles.logoBadge}>
              <span className={styles.logoDot} />
              <span className={styles.logoWord}>IV</span>
              <AutoAwesomeRoundedIcon className={styles.logoSpark} />
            </span>
            <span className={styles.brandText}>iViolet Technology</span>
          </div>

          <div className={styles.topContacts}>
            <a className={styles.topContactLink} href="mailto:ivioletca@gmail.com">
              <MailOutlineRoundedIcon className={styles.topIcon} />
              <span>ivioletca@gmail.com</span>
            </a>
            <a className={styles.topContactLink} href="tel:+14372314578">
              <LocalPhoneOutlinedIcon className={styles.topIcon} />
              <span>+1 437 231 4578</span>
            </a>
          </div>
        </div>

        <div className={styles.bannerCard}>
          <Image
            src={mainBannerSrc}
            alt="iViolet hero banner"
            fill
            priority
            className={styles.bannerImage}
            sizes="(max-width: 900px) 100vw, 1296px"
          />
          <div className={styles.bannerOverlay} />
          <div className={styles.bannerCopy}>
            <p className={styles.heroTag}>专注高定制电子商务解决方案</p>
            <h1 className={styles.heroTitle}>为旅馆与快消餐饮打造可持续增长的线上业务</h1>
            <p className={styles.heroDesc}>
              从官网订房、点单收银到营销促销，我们提供从底层开发到运营支持的一体化服务。
            </p>
          </div>
        </div>

        <div className={styles.thumbnailRow}>
          {thumbnails.map((item) => (
            <div className={styles.thumbnailItem} key={item.src}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={styles.thumbnailImage}
                sizes="(max-width: 900px) 100vw, 420px"
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
