import { CategortWhereUniqueInput } from "../categort/CategortWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  categort?: CategortWhereUniqueInput | null;
  colors: InputJsonValue;
  description: InputJsonValue;
  dicountedPrice: number;
  images?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  title: string;
  titlePrice: number;
  variants: InputJsonValue;
};
