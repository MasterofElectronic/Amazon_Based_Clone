import { CategortWhereUniqueInput } from "../categort/CategortWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  categort?: CategortWhereUniqueInput | null;
  colors?: InputJsonValue;
  description?: InputJsonValue;
  dicountedPrice?: number;
  images?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  title?: string;
  titlePrice?: number;
  variants?: InputJsonValue;
};
