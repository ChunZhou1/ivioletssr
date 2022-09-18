import { ProductContent } from "components/product/ProductContent";
import { CharactDataType } from "components/product/Charact";
import { FunctionDataType } from "components/product/Function";

import {
  title1GerWeb,
  title2GerWeb,
  CharactDataForGerWeb,
  functionDataForGerWeb,
} from "content";

type GerWebProps = {
  title1: string;
  title2: string;
  titlePic: string;
  headerPic: string;
  charactDataArray: CharactDataType[];
  functionDataArray: FunctionDataType[];
};

const GerWeb = ({
  title1,
  title2,
  titlePic,
  headerPic,
  charactDataArray,
  functionDataArray,
}: GerWebProps) => {
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

export async function getStaticProps() {
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
}

export default GerWeb;
