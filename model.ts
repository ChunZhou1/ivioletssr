import { CharactDataType } from "components/product/Charact";
import { FunctionDataType } from "components/product/Function";

export type ProductDetail = { 
      title1:string
      title2:string
      titlePic:string
      headerPic:string
      charactDataArray:CharactDataType[]
      functionDataArray:FunctionDataType[]
}