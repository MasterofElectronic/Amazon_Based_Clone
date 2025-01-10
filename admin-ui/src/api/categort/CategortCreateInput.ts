import { ProductCreateNestedManyWithoutCategortsInput } from "./ProductCreateNestedManyWithoutCategortsInput";

export type CategortCreateInput = {
  name?: string | null;
  products?: ProductCreateNestedManyWithoutCategortsInput;
};
