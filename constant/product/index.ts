import {
  defaultLocale,
  type LocaleRecord,
  type SupportedLocale,
} from "constant/locale";

export const productIds = ["proWeb", "softwareDev", "comWeb"] as const;

export type ProductId = (typeof productIds)[number];

type ProductCharactData = {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt?: string;
};

type ProductFunctionData = {
  title: string;
  content: string;
};

type ProductCharactSeed = Omit<ProductCharactData, "imageSrc" | "imageAlt">;

export type ProductConfig = {
  heroTag: string;
  title1: string;
  title2: string;
  heroImage: string;
  charactSectionTitle: string;
  charactDataArray: ProductCharactData[];
  functionSectionTitle: string;
  functionDataArray: ProductFunctionData[];
  ctaTitle: string;
  ctaDescription: string;
  ctaImage: string;
  consultHref: string;
};

type ProductSeed = Omit<ProductConfig, "charactDataArray" | "consultHref"> & {
  charactDataArray: ProductCharactSeed[];
  consultSubject: string;
};

export type ProductUiCopy = {
  headerBrandText: string;
  backHomeText: string;
  consultButtonText: string;
  featureEyebrow: string;
  functionEyebrow: string;
};

const featureImageMap: Record<ProductId, string[]> = {
  proWeb: [
    "/product/proWeb/feature-1.png",
    "/product/proWeb/feature-2.png",
    "/product/proWeb/feature-3.png",
    "/product/proWeb/feature-4.png",
  ],
  softwareDev: [
    "/product/softwareDev/feature-1.png",
    "/product/softwareDev/feature-2.png",
    "/product/softwareDev/feature-3.png",
    "/product/softwareDev/feature-4.png",
  ],
  comWeb: [
    "/product/comWeb/feature-1.png",
    "/product/comWeb/feature-2.png",
    "/product/comWeb/feature-3.png",
    "/product/comWeb/feature-4.png",
  ],
};

const withFeatureImages = (
  charactDataArray: ProductCharactSeed[],
  featureImages: string[],
): ProductCharactData[] =>
  charactDataArray.map((item, index) => ({
    ...item,
    imageSrc: featureImages[index] ?? featureImages[featureImages.length - 1],
    imageAlt: item.title,
  }));

const createMailtoHref = (subject: string) =>
  `mailto:ivioletca@gmail.com?subject=${encodeURIComponent(subject)}`;

const buildProductConfig = (
  productSeed: ProductSeed,
  productId: ProductId,
): ProductConfig => ({
  heroTag: productSeed.heroTag,
  title1: productSeed.title1,
  title2: productSeed.title2,
  heroImage: productSeed.heroImage,
  charactSectionTitle: productSeed.charactSectionTitle,
  charactDataArray: withFeatureImages(productSeed.charactDataArray, featureImageMap[productId]),
  functionSectionTitle: productSeed.functionSectionTitle,
  functionDataArray: productSeed.functionDataArray,
  ctaTitle: productSeed.ctaTitle,
  ctaDescription: productSeed.ctaDescription,
  ctaImage: productSeed.ctaImage,
  consultHref: createMailtoHref(productSeed.consultSubject),
});

const buildProductMap = (seeds: Record<ProductId, ProductSeed>): Record<ProductId, ProductConfig> => ({
  proWeb: buildProductConfig(seeds.proWeb, "proWeb"),
  softwareDev: buildProductConfig(seeds.softwareDev, "softwareDev"),
  comWeb: buildProductConfig(seeds.comWeb, "comWeb"),
});

const zhCnProductSeeds: Record<ProductId, ProductSeed> = {
  proWeb: {
    heroTag: "旅馆业数字化解决方案",
    title1: "专业化的旅店(inn)解决方案。满足您各种定制化的需求",
    title2:
      "采用彻底的底层开发技术，相比于业界使用的现成模板开发，真正满足您各种高定制化的需求，如定制化的促销方案，各种付款方式",
    heroImage: "/product/proWeb/hero.jpg",
    charactSectionTitle: "围绕入住转化与运营效率重构产品体验",
    charactDataArray: [
      {
        title: "在您自己的网站上用户可进行订房操作，不需要向第三方平台付手续费",
        content:
          "个性化的页面提升自己物业的价值，向客户全面推介自己的物业，将用户掌握在你的手里",
      },
      {
        title: "底层软件自主开发，彻底避免重订房(overBooking)",
        content:
          "可以和第三方channel manage无缝集成，和第三方订房平台同步时间小于三分钟，彻底避免重订房问题",
      },
      {
        title: "灵活多变的促销方式，让您的物业发挥出最大的价值",
        content: "支持尾房促销，根据居住时间促销，根据空房率自动促销等多种促销方式",
      },
      {
        title: "支持多种付款方式，保护您的利益，减少您的工作量",
        content:
          "可以不需用户进行预授权，自动对用户信用卡进行校验但不扣款；在用户入住三天前进行自动扣款，同时实现免押金入住，极大提升用户体验，",
      },
    ],
    functionSectionTitle: "覆盖从展示、下单到运营管理的完整链路",
    functionDataArray: [
      {
        title: "房间和物业展示功能",
        content:
          "物业历史，周围交通，设施，房间各种房型，设施，提供的服务，支持轮番图，视频展示",
      },
      {
        title: "订房功能",
        content:
          "支持信用卡，微信，支付宝等多种付款方式，支持事前付款，订房前三天扣款等多种扣款方式，支持信用卡自动校验，免押金入驻，发生损坏后自动从信用卡扣款，方便管理; 更独家支持pos机和服务器联网运作，使您免交pos机月租费",
      },
      {
        title: "强大的订单管理功能",
        content:
          "当前入住，即将入住清单，调房功能，取消订单扣款功能，手动或自动refund功能",
      },
      {
        title: "强大的促销功能",
        content:
          "支持尾房促销，活动促销，根据居住时间自动给予折扣，根据入住率自动给予折扣，针对贵宾用户给予折扣等多种促销方式",
      },
      {
        title: "强大的同步功能",
        content:
          "支持和airBNB，booking等第三方平台自动同步，同步时间小于三分钟，彻底杜绝OverBooking",
      },
    ],
    ctaTitle: "预约 30 分钟方案沟通",
    ctaDescription: "告诉我们你的物业规模与运营目标，我们将提供可执行功能清单与排期建议。",
    ctaImage: "/product/proWeb/cta.jpg",
    consultSubject: "咨询旅馆业方案",
  },
  softwareDev: {
    heroTag: "餐饮业数字化解决方案",
    title1: "针对奶茶，咖啡等快消业，我们提供成熟的电子商务解决方案",
    title2:
      "针对网站点单，pos机点单，pos机收款，现金收款，出货通知，出货管理，我们提供完善的解决方案",
    heroImage: "/product/softwareDev/hero.png",
    charactSectionTitle: "围绕获客、点单与履约效率打造门店增长引擎",
    charactDataArray: [
      {
        title: "多种化的获客方式",
        content:
          "用户可通过网站点单，现场自助点单，现金点单，多种方式方便用户，提升效率",
      },
      {
        title: "一体化的管理软件，提升效率，降低人工成本",
        content:
          "用户点单，店员制作，用户通知取货，整个过程全部自动化管理，提高效率",
      },
      {
        title: "支持外卖数据导入，所有销售数据一目了然",
        content: "外卖数据和自家销售数据结合，让您对整个销售情况一目了然",
      },
      {
        title: "支持从底层开发，深度软件定制",
        content:
          "我们满足您的特殊要求，再也不会出现一大堆功能我不需要，我要的功能却没有",
      },
    ],
    functionSectionTitle: "从前台点单到后厨协作与经营分析的完整功能集",
    functionDataArray: [
      {
        title: "建立销售网站",
        content:
          "支持商品展示，支付，支持即时付款和到店付款，支持各种促销和会员功能",
      },
      {
        title: "现场无接触用户自助点单",
        content: "用户通过触摸屏点单，pos机付款，减轻店员工作量提高效率",
      },
      {
        title: "工作流程自动管理",
        content: "用户付款后，店员得到通知，开始制作，制作完毕后，用户即时得到通知",
      },
      {
        title: "强大的客户通知功能",
        content:
          "用户点单后可以通过网站实时了解自己订单进展情况，也可通过店内大屏了解自己订单的状况，提高用户体验，减少用户频繁询问对店家效率影响",
      },
      {
        title: "外卖信息导入，强大的后台管理功能",
        content: "了解不同品种在不同时间的销售情况，今后更可扩展来料管理功能",
      },
    ],
    ctaTitle: "预约门店数字化方案咨询",
    ctaDescription: "告诉我们你的门店数量、出餐流程和经营目标，我们会给出系统模块和上线节奏建议。",
    ctaImage: "/product/softwareDev/cta.png",
    consultSubject: "咨询餐饮软件方案",
  },
  comWeb: {
    heroTag: "网站与 App 增长方案",
    title1: "一般电子商务网站，展示型网站及手机app开发",
    title2: "为您原有的展示型网站增加电子商务功能，将网站流量转变为价值",
    heroImage: "/product/comWeb/hero.png",
    charactSectionTitle: "从品牌展示到交易转化的一体化线上增长体验",
    charactDataArray: [
      {
        title: "电子商务功能",
        content: "支持多种付款方式，包括微信和支付宝",
      },
      {
        title: "为您原有的网站进行定制化的改造",
        content:
          "对原有的网站不满意？交给我们，对您的网站进行重新设计，增加您需要的功能，高度定制化是我们的优势",
      },
      {
        title: "让更多人知道您的网站",
        content: "提供成熟的网站营销方案，提高您网站的曝光率",
      },
      {
        title: "从网站到手机APP，支持安卓和ios平台",
        content:
          "如果您需要开发手机APP，我们采用成熟的React native框架可以同时针对安卓和IOS开发，降低您的投入",
      },
    ],
    functionSectionTitle: "覆盖官网、商城与移动端的多端产品能力",
    functionDataArray: [
      {
        title: "展示型网站的开发",
        content:
          "包含公司介绍，相关产品和服务，成功案例，联系方法等内容，宣传您的公司",
      },
      {
        title: "电子商务网站的开发",
        content: "在展示型网站的基础上增加付款功能",
      },
      {
        title: "手机APP开发",
        content: "根据您的要求，开发安卓和IOS平台APP",
      },
      {
        title: "电子商务网站的促销",
        content: "提供方案增加对谷歌搜索平台上的曝光率",
      },
    ],
    ctaTitle: "预约网站与 App 方案咨询",
    ctaDescription: "告诉我们你的行业和目标，我们将给出从展示到转化的功能与排期建议。",
    ctaImage: "/product/comWeb/cta.png",
    consultSubject: "咨询网站与App方案",
  },
};

const zhTwProductSeeds: Record<ProductId, ProductSeed> = {
  proWeb: {
    ...zhCnProductSeeds.proWeb,
    heroTag: "旅館業數位化解決方案",
    charactSectionTitle: "圍繞入住轉化與營運效率重構產品體驗",
    functionSectionTitle: "覆蓋從展示、下單到營運管理的完整鏈路",
    ctaTitle: "預約 30 分鐘方案溝通",
    ctaDescription: "告訴我們你的物業規模與營運目標，我們將提供可執行功能清單與排期建議。",
    consultSubject: "諮詢旅館業方案",
    charactDataArray:[
      {
        title: "在您自己的網站上用戶可進行訂房操作，不需要向第三方平台付手續費",
        content: "個性化的頁面提升自己物業的價值，向客戶全面推介自己的物業，將用戶掌握在你的手裡",
      },
      {
        title: "底層軟件自主開發，徹底避免重訂房(overBooking)",
        content: "可以和第三方channel manage無縫集成，和第三方訂房平台同步時間小於三分鐘，徹底避免重訂房問題",
      },
      {
        title: "靈活多變的促銷方式，讓您的物業發揮出最大的價值",
        content: "支持尾房促銷，根據居住時間促銷，根據空房率自動促銷等多種促銷方式",
      },
      {
        title: "支持多種付款方式，保護您的利益，減少您的工作量",
        content: "可以不需用戶進行預授權，自動對用戶信用卡進行校驗但不扣款；在用戶入住三天前進行自動扣款，同時實現免押金入住，極大提升用戶體驗，",
      },
    ]
  },
  softwareDev: {
    ...zhCnProductSeeds.softwareDev,
    heroTag: "餐飲業數位化解決方案",
    charactSectionTitle: "圍繞獲客、點單與履約效率打造門店成長引擎",
    functionSectionTitle: "從前台點單到後廚協作與經營分析的完整功能集",
    ctaTitle: "預約門店數位化方案諮詢",
    ctaDescription: "告訴我們你的門店數量、出餐流程和經營目標，我們會給出系統模組和上線節奏建議。",
    consultSubject: "諮詢餐飲軟體方案",
  },
  comWeb: {
    ...zhCnProductSeeds.comWeb,
    heroTag: "網站與 App 成長方案",
    charactSectionTitle: "從品牌展示到交易轉化的一體化線上成長體驗",
    functionSectionTitle: "覆蓋官網、商城與移動端的多端產品能力",
    ctaTitle: "預約網站與 App 方案諮詢",
    ctaDescription: "告訴我們你的行業和目標，我們將給出從展示到轉化的功能與排期建議。",
    consultSubject: "諮詢網站與App方案",
  },
};

const enProductSeeds: Record<ProductId, ProductSeed> = {
  proWeb: {
    ...zhCnProductSeeds.proWeb,
    heroTag: "Hospitality digital solution",
    title1: "A specialized inn solution tailored to your business needs",
    title2:
      "Built with custom-first engineering instead of generic templates, so complex promotions and payment flows can be implemented properly.",
    charactSectionTitle: "Product experience focused on occupancy conversion and operations efficiency",
    functionSectionTitle: "A full workflow from showcase and booking to daily operations",
    ctaTitle: "Book a 30-minute solution call",
    ctaDescription:
      "Share your property scale and operation goals, and we will provide an executable feature scope and implementation timeline.",
    consultSubject: "Consulting for hospitality solution",
  },
  softwareDev: {
    ...zhCnProductSeeds.softwareDev,
    heroTag: "Restaurant digital solution",
    title1: "Proven commerce solutions for beverage and cafe operations",
    title2:
      "From web ordering and POS checkout to fulfillment notification and store workflow management, we provide a complete system.",
    charactSectionTitle: "Build a growth engine around customer acquisition, ordering, and fulfillment",
    functionSectionTitle: "Complete capabilities from front counter to back kitchen collaboration",
    ctaTitle: "Book a store digitalization consultation",
    ctaDescription:
      "Tell us your number of stores, fulfillment flow, and business goals. We will suggest the right modules and launch phases.",
    consultSubject: "Consulting for restaurant software solution",
  },
  comWeb: {
    ...zhCnProductSeeds.comWeb,
    heroTag: "Website and app growth solution",
    title1: "E-commerce websites, showcase sites, and mobile app development",
    title2:
      "Add commerce capabilities to your existing website and convert traffic into business value.",
    charactSectionTitle: "Unified online growth from brand presence to transaction conversion",
    functionSectionTitle: "Multi-platform capabilities across website, storefront, and mobile",
    ctaTitle: "Book a website and app consultation",
    ctaDescription:
      "Share your industry and goals, and we will propose a practical plan from brand showcase to conversion.",
    consultSubject: "Consulting for website and app solution",
  },
};

export const productMapByLocale: LocaleRecord<Record<ProductId, ProductConfig>> = {
  "zh-CN": buildProductMap(zhCnProductSeeds),
  "zh-TW": buildProductMap(zhTwProductSeeds),
  en: buildProductMap(enProductSeeds),
};

export const productUiCopyByLocale: LocaleRecord<ProductUiCopy> = {
  "zh-CN": {
    headerBrandText: "iViolet Product",
    backHomeText: "← 返回首页",
    consultButtonText: "立即邮件咨询",
    featureEyebrow: "核心特点",
    functionEyebrow: "功能模块",
  },
  "zh-TW": {
    headerBrandText: "iViolet Product",
    backHomeText: "← 返回首頁",
    consultButtonText: "立即郵件諮詢",
    featureEyebrow: "核心特點",
    functionEyebrow: "功能模組",
  },
  en: {
    headerBrandText: "iViolet Product",
    backHomeText: "← Back to Home",
    consultButtonText: "Email Us Now",
    featureEyebrow: "Key Features",
    functionEyebrow: "Modules",
  },
};

export const getProductMap = (
  locale: SupportedLocale,
): Record<ProductId, ProductConfig> => productMapByLocale[locale];

export const getProductUiCopy = (locale: SupportedLocale): ProductUiCopy =>
  productUiCopyByLocale[locale];

export const getProductConfig = (
  locale: SupportedLocale,
  productId: ProductId,
): ProductConfig => getProductMap(locale)[productId];

export const productMap = productMapByLocale[defaultLocale];

export const productUiCopy = productUiCopyByLocale[defaultLocale];

export const defaultProductId: ProductId = "proWeb";
