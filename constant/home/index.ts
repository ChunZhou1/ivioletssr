import {
  defaultLocale,
  type LocaleRecord,
  type SupportedLocale,
} from "constant/locale";

export type HomeIconType = "hotel" | "coffee" | "shopping";

export type HomeThumbnail = {
  src: string;
  alt: string;
};

export type IntroPill = {
  icon: HomeIconType;
  label: string;
  href: string;
};

export type HomeProduct = {
  keyValue: string;
  title: string;
  description: string;
  href: string;
  icon: HomeIconType;
  imgSrc: string;
};

type HeroContent = {
  tag: string;
  title: string;
  description: string;
};

type HeaderContent = {
  brandText: string;
  bannerAlt: string;
};

type IntroContent = {
  eyebrow: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
};

type ServiceContent = {
  eyebrow: string;
  title: string;
  detailButtonText: string;
};

type ContactContent = {
  eyebrow: string;
  title: string;
  description: string;
  addressLabel: string;
  emailLabel: string;
  telLabel: string;
  consultTitle: string;
  consultDescription: string;
  consultButtonText: string;
  consultImageSrc: string;
  consultImageAlt: string;
};

export type HomePageConstants = {
  mainBannerSrc: string;
  headerContent: HeaderContent;
  heroContent: HeroContent;
  introContent: IntroContent;
  intro: string;
  serviceContent: ServiceContent;
  contactContent: ContactContent;
  homeThumbnails: HomeThumbnail[];
  introPills: IntroPill[];
  homeProducts: HomeProduct[];
};

const baseThumbnails: HomeThumbnail[] = [
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

const homePageConstantsByLocaleData: LocaleRecord<HomePageConstants> = {
  "zh-CN": {
    mainBannerSrc: "/home/banner-main.jpg",
    headerContent: {
      brandText: "iViolet Technology",
      bannerAlt: "iViolet 主视觉横幅",
    },
    heroContent: {
      tag: "专注高定制电子商务解决方案",
      title: "为旅馆与快消餐饮打造可持续增长的线上业务",
      description: "从官网订房、点单收银到营销促销，我们提供从底层开发到运营支持的一体化服务。",
    },
    introContent: {
      eyebrow: "关于我们",
      title: "iViolet 公司致力于为客户提供高性价比的定制化电子商务解决方案",
      imageSrc: "/home/service-web.jpg",
      imageAlt: "iViolet 团队介绍",
    },
    intro:
      "iViolet公司成立于2017年，从成立开始，公司致力于为客户提供成熟的电子商务解决方案。公司主要业务为各种类型的电子商务型网站，手机App的开发，尤其擅长旅馆业，小型快消（如奶茶，咖啡）等定制型电子商务软件。公司产品包括网站开发，针对奶茶咖啡等餐厅的专用软件的开发。公司开发的软件已经被多个客户采用。在同类型公司中，我们提供的产品具备很高的性价比，我们愿意为您提供专业的定制化的服务。",
    serviceContent: {
      eyebrow: "我们的服务",
      title: "我们能够提供的服务",
      detailButtonText: "详细了解",
    },
    contactContent: {
      eyebrow: "联系我们",
      title: "iViolet Technology Inc.",
      description: "如果你希望用更低成本建立稳定的线上业务系统，我们可以根据你的行业场景给出落地方案。",
      addressLabel: "地址",
      emailLabel: "邮箱",
      telLabel: "电话",
      consultTitle: "预约 30 分钟方案沟通",
      consultDescription: "告诉我们你的业务和目标，我们会在沟通后给出可执行的功能与排期建议。",
      consultButtonText: "立即咨询",
      consultImageSrc: "/home/banner-cafe.jpg",
      consultImageAlt: "咨询服务",
    },
    homeThumbnails: baseThumbnails,
    introPills: [
      {
        icon: "hotel",
        label: "旅馆业订房系统",
        href: "/proWeb",
      },
      {
        icon: "coffee",
        label: "餐饮点单与POS",
        href: "/softwareDev",
      },
      {
        icon: "shopping",
        label: "电商网站与App",
        href: "/comWeb",
      },
    ],
    homeProducts: [
      {
        keyValue: "proWeb",
        title: "旅馆业解决方案",
        description:
          "专业化的网站设计，特别针对旅馆业(inn)以及奶茶咖啡等快消餐饮业具备完善的解决方案。",
        href: "/proWeb",
        icon: "hotel",
        imgSrc: "/home/service-inn.jpg",
      },
      {
        keyValue: "softwareDev",
        title: "餐饮软件开发",
        description:
          "定制化的软件开发，特别是针对各种类型的电子商务软件（餐饮、小型超市）的定制化开发。",
        href: "/softwareDev",
        icon: "coffee",
        imgSrc: "/home/service-rest.jpg",
      },
      {
        keyValue: "comWeb",
        title: "网站与 App 开发",
        description:
          "普通网站和手机 App 开发，包括展示型网站以及普通网站增加付款等电子商务功能。",
        href: "/comWeb",
        icon: "shopping",
        imgSrc: "/home/service-web.jpg",
      },
    ],
  },
  "zh-TW": {
    mainBannerSrc: "/home/banner-main.jpg",
    headerContent: {
      brandText: "iViolet Technology",
      bannerAlt: "iViolet 主視覺橫幅",
    },
    heroContent: {
      tag: "專注高客製電子商務解決方案",
      title: "為旅館與快消餐飲打造可持續成長的線上業務",
      description: "從官網訂房、點單收銀到行銷促銷，我們提供從底層開發到營運支持的一體化服務。",
    },
    introContent: {
      eyebrow: "關於我們",
      title: "iViolet 公司致力於為客戶提供高性價比的客製化電子商務解決方案",
      imageSrc: "/home/service-web.jpg",
      imageAlt: "iViolet 團隊介紹",
    },
    intro:
      "iViolet公司成立於2017年，自成立以來，公司致力於為客戶提供成熟的電子商務解決方案。公司主要業務為各種類型電子商務網站與手機 App 開發，尤其擅長旅館業、小型快消（如奶茶、咖啡）等客製型電子商務軟體。公司產品包括網站開發，以及針對奶茶咖啡等餐廳的專用軟體開發。公司開發的軟體已被多個客戶採用。在同類型公司中，我們提供的產品具有很高的性價比，願意為您提供專業的客製化服務。",
    serviceContent: {
      eyebrow: "我們的服務",
      title: "我們能夠提供的服務",
      detailButtonText: "了解更多",
    },
    contactContent: {
      eyebrow: "聯絡我們",
      title: "iViolet Technology Inc.",
      description: "如果你希望用更低成本建立穩定的線上業務系統，我們可以根據你的行業場景給出落地方案。",
      addressLabel: "地址",
      emailLabel: "信箱",
      telLabel: "電話",
      consultTitle: "預約 30 分鐘方案溝通",
      consultDescription: "告訴我們你的業務和目標，我們會在溝通後給出可執行的功能與排期建議。",
      consultButtonText: "立即諮詢",
      consultImageSrc: "/home/banner-cafe.jpg",
      consultImageAlt: "諮詢服務",
    },
    homeThumbnails: baseThumbnails,
    introPills: [
      {
        icon: "hotel",
        label: "旅館業訂房系統",
        href: "/proWeb",
      },
      {
        icon: "coffee",
        label: "餐飲點單與 POS",
        href: "/softwareDev",
      },
      {
        icon: "shopping",
        label: "電商網站與 App",
        href: "/comWeb",
      },
    ],
    homeProducts: [
      {
        keyValue: "proWeb",
        title: "旅館業解決方案",
        description:
          "專業化的網站設計，特別針對旅館業（inn）以及奶茶咖啡等快消餐飲業，提供完善解決方案。",
        href: "/proWeb",
        icon: "hotel",
        imgSrc: "/home/service-inn.jpg",
      },
      {
        keyValue: "softwareDev",
        title: "餐飲軟體開發",
        description:
          "客製化軟體開發，特別是針對各種電子商務軟體（餐飲、小型超市）的客製化開發。",
        href: "/softwareDev",
        icon: "coffee",
        imgSrc: "/home/service-rest.jpg",
      },
      {
        keyValue: "comWeb",
        title: "網站與 App 開發",
        description:
          "一般網站與手機 App 開發，包括展示型網站以及一般網站新增付款等電子商務功能。",
        href: "/comWeb",
        icon: "shopping",
        imgSrc: "/home/service-web.jpg",
      },
    ],
  },
  en: {
    mainBannerSrc: "/home/banner-main.jpg",
    headerContent: {
      brandText: "iViolet Technology",
      bannerAlt: "iViolet hero banner",
    },
    heroContent: {
      tag: "Tailored e-commerce solutions",
      title: "Grow your online business for hospitality and fast-casual food",
      description:
        "From direct booking and POS ordering to campaigns and operations, we deliver end-to-end product and engineering support.",
    },
    introContent: {
      eyebrow: "About Us",
      title: "iViolet delivers practical, cost-effective custom e-commerce solutions",
      imageSrc: "/home/service-web.jpg",
      imageAlt: "iViolet team introduction",
    },
    intro:
      "Founded in 2017, iViolet focuses on custom digital commerce products. We build websites and mobile apps for multiple industries, with strong experience in hospitality and fast-casual beverage and cafe operations. Our solutions are already used by many clients and are designed to balance flexibility, reliability, and cost efficiency.",
    serviceContent: {
      eyebrow: "Our Services",
      title: "What We Can Build For You",
      detailButtonText: "Learn more",
    },
    contactContent: {
      eyebrow: "Contact",
      title: "iViolet Technology Inc.",
      description:
        "If you want to build a stable online business system at a lower cost, we can propose a practical plan for your scenario.",
      addressLabel: "Address",
      emailLabel: "Email",
      telLabel: "Tel",
      consultTitle: "Book a 30-minute solution call",
      consultDescription:
        "Tell us your business goals, and we will follow up with an executable feature scope and timeline.",
      consultButtonText: "Book consultation",
      consultImageSrc: "/home/banner-cafe.jpg",
      consultImageAlt: "Consultation service",
    },
    homeThumbnails: baseThumbnails,
    introPills: [
      {
        icon: "hotel",
        label: "Hospitality booking system",
        href: "/proWeb",
      },
      {
        icon: "coffee",
        label: "Restaurant ordering and POS",
        href: "/softwareDev",
      },
      {
        icon: "shopping",
        label: "E-commerce websites and apps",
        href: "/comWeb",
      },
    ],
    homeProducts: [
      {
        keyValue: "proWeb",
        title: "Hospitality Solution",
        description:
          "Professional website systems for inns and hospitality properties, with booking and operations workflows tailored to your business.",
        href: "/proWeb",
        icon: "hotel",
        imgSrc: "/home/service-inn.jpg",
      },
      {
        keyValue: "softwareDev",
        title: "Restaurant Software",
        description:
          "Custom software development for restaurant and small retail commerce workflows with operational efficiency in mind.",
        href: "/softwareDev",
        icon: "coffee",
        imgSrc: "/home/service-rest.jpg",
      },
      {
        keyValue: "comWeb",
        title: "Website & App Development",
        description:
          "Corporate and marketing websites plus mobile apps, including commerce features such as checkout and payments.",
        href: "/comWeb",
        icon: "shopping",
        imgSrc: "/home/service-web.jpg",
      },
    ],
  },
};

export const homePageConstantsByLocale = homePageConstantsByLocaleData;

export const getHomePageConstants = (locale: SupportedLocale): HomePageConstants =>
  homePageConstantsByLocaleData[locale];

export const homePageConstants = getHomePageConstants(defaultLocale);
