import { ProductContent } from "components/product/ProductContent";
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

const productMap = {
  proWeb: {
    title1: title1Inn,
    title2: title2Inn,
    titlePic: "/inn1.jpg",
    headerPic: "/bannar22.jpg",
    charactDataArray: CharactDataForInn,
    functionDataArray: functionDataForInn,
  },
  softwareDev: {
    title1: title1Rest,
    title2: title2Rest,
    titlePic: "/rest1.jpg",
    headerPic: "/bannar33.jpg",
    charactDataArray: CharactDataForRest,
    functionDataArray: functionDataForRest,
  },
  comWeb: {
    title1: title1GerWeb,
    title2: title2GerWeb,
    titlePic: "/gerWeb.jpg",
    headerPic: "/bannar11.jpg",
    charactDataArray: CharactDataForGerWeb,
    functionDataArray: functionDataForGerWeb,
  },
};

const defaultProductId = "proWeb";

type ProductPageProps = {
  params: {
    productId: string;
  };
};

export function generateStaticParams() {
  return Object.keys(productMap).map((productId) => ({ productId }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const productData =
    productMap[params.productId as keyof typeof productMap] ??
    productMap[defaultProductId];

  return (
    <ProductContent
      title1={productData.title1}
      title2={productData.title2}
      titlePic={productData.titlePic}
      headerPic={productData.headerPic}
      charactDataArray={productData.charactDataArray}
      functionDataArray={productData.functionDataArray}
    />
  );
}
