import { InputJsonValue } from "../../types";
import { ProductReviewUpdateManyWithoutUsersInput } from "./ProductReviewUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  productReviews?: ProductReviewUpdateManyWithoutUsersInput;
};
