import { ProductContent } from "components/product/ProductContent";

import {
  title1Inn,
  title2Inn,
  CharactDataForInn,
  functionDataForInn,
} from "content";

const Web = () => {
  return (
    <ProductContent
      title1={title1Inn}
      title2={title2Inn}
      titlePic={"/inn1.jpg"}
      headerPic={"/bannar22.jpg"}
      charactDataArray={CharactDataForInn}
      functionDataArray={functionDataForInn}
    />
  );
};

export default Web;
