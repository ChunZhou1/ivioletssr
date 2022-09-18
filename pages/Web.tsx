import { ProductContent } from "components/product/ProductContent";
import { CharactDataType } from "components/product/Charact";
import { FunctionDataType } from "components/product/Function";

import {
  title1Inn,
  title2Inn,
  CharactDataForInn,
  functionDataForInn,
} from "content";

type WebProps = {
  title1: string;
  title2: string;
  titlePic: string;
  headerPic: string;
  charactDataArray: CharactDataType[];
  functionDataArray: FunctionDataType[];
};

const Web = ({
  title1,
  title2,
  titlePic,
  headerPic,
  charactDataArray,
  functionDataArray,
}: WebProps) => {
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
      title1: title1Inn,
      title2: title2Inn,
      titlePic: "/inn1.jpg",
      headerPic: "/bannar22.jpg",
      charactDataArray: CharactDataForInn,
      functionDataArray: functionDataForInn,
    },
  };
}

export default Web;
