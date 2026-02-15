import { ProductContent } from "components/product/ProductContent";
import type { CharactDataType } from "components/product/Charact";
import type { FunctionDataType } from "components/product/Function";
import {
  title1Inn,
  title2Inn,
  CharactDataForInn,
  functionDataForInn,
  title1Rest,
  title2Rest,
  CharactDataForRest,
  functionDataForRest,
  title1GerWeb,
  title2GerWeb,
  CharactDataForGerWeb,
  functionDataForGerWeb,
} from "content";

type ProductId = "proWeb" | "softwareDev" | "comWeb";

type ProductConfig = {
  heroTag: string;
  title1: string;
  title2: string;
  heroImage: string;
  charactSectionTitle: string;
  charactDataArray: CharactDataType[];
  functionSectionTitle: string;
  functionDataArray: FunctionDataType[];
  ctaTitle: string;
  ctaDescription: string;
  ctaImage: string;
  consultHref: string;
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
  charactDataArray: { title: string; content: string }[],
  featureImages: string[],
): CharactDataType[] =>
  charactDataArray.map((item, index) => ({
    ...item,
    imageSrc: featureImages[index] ?? featureImages[featureImages.length - 1],
    imageAlt: item.title,
  }));

const createMailtoHref = (productLabel: string) =>
  `mailto:ivioletca@gmail.com?subject=${encodeURIComponent(`咨询${productLabel}方案`)}`;

const productMap: Record<ProductId, ProductConfig> = {
  proWeb: {
    heroTag: "旅馆业数字化解决方案",
    title1: title1Inn,
    title2: title2Inn,
    heroImage: "/product/proWeb/hero.jpg",
    charactSectionTitle: "围绕入住转化与运营效率重构产品体验",
    charactDataArray: withFeatureImages(CharactDataForInn, featureImageMap.proWeb),
    functionSectionTitle: "覆盖从展示、下单到运营管理的完整链路",
    functionDataArray: functionDataForInn,
    ctaTitle: "预约 30 分钟方案沟通",
    ctaDescription: "告诉我们你的物业规模与运营目标，我们将提供可执行功能清单与排期建议。",
    ctaImage: "/product/proWeb/cta.jpg",
    consultHref: createMailtoHref("旅馆业"),
  },
  softwareDev: {
    heroTag: "餐饮业数字化解决方案",
    title1: title1Rest,
    title2: title2Rest,
    heroImage: "/product/softwareDev/hero.png",
    charactSectionTitle: "围绕获客、点单与履约效率打造门店增长引擎",
    charactDataArray: withFeatureImages(CharactDataForRest, featureImageMap.softwareDev),
    functionSectionTitle: "从前台点单到后厨协作与经营分析的完整功能集",
    functionDataArray: functionDataForRest,
    ctaTitle: "预约门店数字化方案咨询",
    ctaDescription: "告诉我们你的门店数量、出餐流程和经营目标，我们会给出系统模块和上线节奏建议。",
    ctaImage: "/product/softwareDev/cta.png",
    consultHref: createMailtoHref("餐饮软件"),
  },
  comWeb: {
    heroTag: "网站与 App 增长方案",
    title1: title1GerWeb,
    title2: title2GerWeb,
    heroImage: "/product/comWeb/hero.png",
    charactSectionTitle: "从品牌展示到交易转化的一体化线上增长体验",
    charactDataArray: withFeatureImages(CharactDataForGerWeb, featureImageMap.comWeb),
    functionSectionTitle: "覆盖官网、商城与移动端的多端产品能力",
    functionDataArray: functionDataForGerWeb,
    ctaTitle: "预约网站与 App 方案咨询",
    ctaDescription: "告诉我们你的行业和目标，我们将给出从展示到转化的功能与排期建议。",
    ctaImage: "/product/comWeb/cta.png",
    consultHref: createMailtoHref("网站与App"),
  },
};

const defaultProductId: ProductId = "proWeb";

type ProductPageProps = {
  params: {
    productId: string;
  };
};

export function generateStaticParams() {
  return Object.keys(productMap).map((productId) => ({ productId }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const productData = productMap[params.productId as ProductId] ?? productMap[defaultProductId];

  return (
    <ProductContent
      heroTag={productData.heroTag}
      title1={productData.title1}
      title2={productData.title2}
      heroImage={productData.heroImage}
      charactSectionTitle={productData.charactSectionTitle}
      charactDataArray={productData.charactDataArray}
      functionSectionTitle={productData.functionSectionTitle}
      functionDataArray={productData.functionDataArray}
      ctaTitle={productData.ctaTitle}
      ctaDescription={productData.ctaDescription}
      ctaImage={productData.ctaImage}
      consultHref={productData.consultHref}
    />
  );
}
