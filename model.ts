import { CharactDataType } from "components/product/Charact";
import { FunctionDataType } from "components/product/Function";

export type ProductDetail = { 
      heroTag:string
      title1:string
      title2:string
      heroImage:string
      charactSectionTitle:string
      charactDataArray:CharactDataType[]
      functionSectionTitle:string
      functionDataArray:FunctionDataType[]
      ctaTitle:string
      ctaDescription:string
      ctaImage:string
}
