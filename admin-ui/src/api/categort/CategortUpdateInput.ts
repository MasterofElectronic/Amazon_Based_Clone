import { ProductUpdateManyWithoutCategortsInput } from "./ProductUpdateManyWithoutCategortsInput";

export type CategortUpdateInput = {
  name?: string | null;
  products?: ProductUpdateManyWithoutCategortsInput;
};
