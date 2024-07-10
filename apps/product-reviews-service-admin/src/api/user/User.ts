import { JsonValue } from "type-fest";
import { ProductReview } from "../productReview/ProductReview";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  productReviews?: Array<ProductReview>;
};
