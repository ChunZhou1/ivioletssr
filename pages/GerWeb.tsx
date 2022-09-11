import { ProductContent } from "components/product/ProductContent";

import {
  title1GerWeb,
  title2GerWeb,
  CharactDataForGerWeb,
  functionDataForGerWeb,
} from "content";

const GerWeb = () => {
  return (
    <ProductContent
      title1={title1GerWeb}
      title2={title2GerWeb}
      titlePic={"/gerWeb.jpg"}
      headerPic={"/bannar11.jpg"}
      charactDataArray={CharactDataForGerWeb}
      functionDataArray={functionDataForGerWeb}
    />
  );
};

export default GerWeb;
