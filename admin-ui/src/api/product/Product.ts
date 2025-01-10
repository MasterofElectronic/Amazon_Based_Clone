import { Categort } from "../categort/Categort";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  categort?: Categort | null;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  dicountedPrice: number;
  id: string;
  images: JsonValue;
  order?: Order | null;
  reviews?: Array<Review>;
  title: string;
  titlePrice: number;
  updatedAt: Date;
  variants: JsonValue;
};
