import { ProductContent } from "components/product/ProductContent";
import { CharactDataType } from "components/product/Charact";
import { FunctionDataType } from "components/product/Function";

import {
  title1Rest,
  title2Rest,
  CharactDataForRest,
  functionDataForRest,
} from "content";

type RestProps = {
  title1: string;
  title2: string;
  titlePic: string;
  headerPic: string;
  charactDataArray: CharactDataType[];
  functionDataArray: FunctionDataType[];
};

const Rest = ({
  title1,
  title2,
  titlePic,
  headerPic,
  charactDataArray,
  functionDataArray,
}: RestProps) => {
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
      title1: title1Rest,
      title2: title2Rest,
      titlePic: "/rest1.jpg",
      headerPic: "/bannar33.jpg",
      charactDataArray: CharactDataForRest,
      functionDataArray: functionDataForRest,
    },
  };
}

export default Rest;
