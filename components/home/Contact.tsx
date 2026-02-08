import React from "react";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Image from "next/image";
import styles from "components/home/HomePage.module.css";

export const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.sectionInner}>
        <p className={styles.sectionEyebrow}>联系我们</p>
        <h2 className={styles.sectionTitle}>iViolet Technology Inc.</h2>
        <p className={styles.contactDesc}>
          如果你希望用更低成本建立稳定的线上业务系统，我们可以根据你的行业场景给出落地方案。
        </p>

        <div className={styles.contactBody}>
          <div className={styles.contactInfoList}>
            <a
              href="https://maps.google.com/?q=29+Singer+Court,+Toronto"
              target="_blank"
              rel="noreferrer"
              className={styles.contactInfoRow}
            >
              <PlaceRoundedIcon className={styles.contactInfoIcon} />
              <span>Address: 29 Singer Court, Toronto</span>
            </a>

            <a href="mailto:ivioletca@gmail.com" className={styles.contactInfoRow}>
              <MailOutlineRoundedIcon className={styles.contactInfoIcon} />
              <span>Email: ivioletca@gmail.com</span>
            </a>

            <a href="tel:+14372314578" className={styles.contactInfoRow}>
              <LocalPhoneOutlinedIcon className={styles.contactInfoIcon} />
              <span>Tel: +1 437 231 4578</span>
            </a>
          </div>

          <aside className={styles.consultCard}>
            <div className={styles.consultImage}>
              <Image
                src="/home/banner-cafe.jpg"
                alt="咨询服务"
                fill
                className={styles.consultImageItem}
                sizes="(max-width: 1200px) 100vw, 430px"
              />
            </div>
            <h3 className={styles.consultTitle}>预约 30 分钟方案沟通</h3>
            <p className={styles.consultDesc}>
              告诉我们你的业务和目标，我们会在沟通后给出可执行的功能与排期建议。
            </p>
            <a href="mailto:ivioletca@gmail.com" className={styles.primaryButton}>
              立即咨询
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};
