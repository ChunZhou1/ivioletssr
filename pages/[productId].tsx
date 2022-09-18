import { ProductContent } from "components/product/ProductContent";
import { CharactDataType } from "components/product/Charact";
import { FunctionDataType } from "components/product/Function";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

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

type ProductProps = {
  title1: string;
  title2: string;
  titlePic: string;
  headerPic: string;
  charactDataArray: CharactDataType[];
  functionDataArray: FunctionDataType[];
};

const Product = ({
  title1,
  title2,
  titlePic,
  headerPic,
  charactDataArray,
  functionDataArray,
}: ProductProps) => {
  return (
    <ProductContent
      title1={title1}
      title2={title2}
      titlePic={titlePic}
      headerPic={headerPic}
      charactDataArray={charactDataArray}
      functionDataArray={functionDataArray}
    />
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  if (!params)
    return {
      props: {
        title1: title1Inn,
        title2: title2Inn,
        titlePic: "/inn1.jpg",
        headerPic: "/bannar22.jpg",
        charactDataArray: CharactDataForInn,
        functionDataArray: functionDataForInn,
      },
    };
  switch (params.productId) {
    case "proWeb":
      return {
        props: {
          title1: title1Inn,
          title2: title2Inn,
          titlePic: "/inn1.jpg",
          headerPic: "/bannar22.jpg",
          charactDataArray: CharactDataForInn,
          functionDataArray: functionDataForInn,
        },
      };
    case "softwareDev":
      return {
        props: {
          title1: title1Rest,
          title2: title2Rest,
          titlePic: "/rest1.jpg",
          headerPic: "/bannar33.jpg",
          charactDataArray: CharactDataForRest,
          functionDataArray: functionDataForRest,
        },
      };
    case "comWeb":
      return {
        props: {
          title1: title1GerWeb,
          title2: title2GerWeb,
          titlePic: "/gerWeb.jpg",
          headerPic: "/bannar11.jpg",
          charactDataArray: CharactDataForGerWeb,
          functionDataArray: functionDataForGerWeb,
        },
      };

    default:
      return {
        props: {
          title1: title1Inn,
          title2: title2Inn,
          titlePic: "/inn1.jpg",
          headerPic: "/bannar22.jpg",
          charactDataArray: CharactDataForInn,
          functionDataArray: functionDataForInn,
        },
      };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { productId: "proWeb" } },
      { params: { productId: "softwareDev" } },
      { params: { productId: "comWeb" } },
    ],

    fallback: true,
  };
};

export default Product;
