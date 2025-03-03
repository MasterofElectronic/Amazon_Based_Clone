import { Product } from "../product/Product";

export type Categort = {
  createdAt: Date;
  id: string;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
