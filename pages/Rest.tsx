import { ProductContent } from "components/product/ProductContent";

import {
  title1Rest,
  title2Rest,
  CharactDataForRest,
  functionDataForRest,
} from "content";

const Rest = () => {
  return (
    <ProductContent
      title1={title1Rest}
      title2={title2Rest}
      titlePic={"/rest1.jpg"}
      headerPic={"/bannar33.jpg"}
      charactDataArray={CharactDataForRest}
      functionDataArray={functionDataForRest}
    />
  );
};

export default Rest;
