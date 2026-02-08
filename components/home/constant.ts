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

export const heroContent = {
  tag: "专注高定制电子商务解决方案",
  title: "为旅馆与快消餐饮打造可持续增长的线上业务",
  description: "从官网订房、点单收银到营销促销，我们提供从底层开发到运营支持的一体化服务。",
};

export const introContent = {
  eyebrow: "关于我们",
  title: "iViolet 公司致力于为客户提供高性价比的定制化电子商务解决方案",
  imageSrc: "/home/service-web.jpg",
};

export const serviceContent = {
  eyebrow: "我们的服务",
  title: "我们能够提供的服务",
};

export const contactContent = {
  eyebrow: "联系我们",
  title: "iViolet Technology Inc.",
  description: "如果你希望用更低成本建立稳定的线上业务系统，我们可以根据你的行业场景给出落地方案。",
  consultTitle: "预约 30 分钟方案沟通",
  consultDescription: "告诉我们你的业务和目标，我们会在沟通后给出可执行的功能与排期建议。",
  consultButtonText: "立即咨询",
  consultImageSrc: "/home/banner-cafe.jpg",
};

export const homeThumbnails: HomeThumbnail[] = [
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

export const introPills: IntroPill[] = [
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
];

export const homeProducts: HomeProduct[] = [
  {
    keyValue: "proWeb",
    title: "旅馆业解决方案",
    description: "专业化的网站设计，特别针对旅馆业(inn)以及奶茶咖啡等快消餐饮业具备完善的解决方案。",
    href: "/proWeb",
    icon: "hotel",
    imgSrc: "/home/service-inn.jpg",
  },
  {
    keyValue: "softwareDev",
    title: "餐饮软件开发",
    description: "定制化的软件开发，特别是针对各种类型的电子商务软件（餐饮、小型超市）的定制化开发。",
    href: "/softwareDev",
    icon: "coffee",
    imgSrc: "/home/service-rest.jpg",
  },
  {
    keyValue: "comWeb",
    title: "网站与 App 开发",
    description: "普通网站和手机 App 开发，包括展示型网站以及普通网站增加付款等电子商务功能。",
    href: "/comWeb",
    icon: "shopping",
    imgSrc: "/home/service-web.jpg",
  },
];

