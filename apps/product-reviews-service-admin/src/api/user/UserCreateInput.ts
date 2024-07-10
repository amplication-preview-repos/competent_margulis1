import { InputJsonValue } from "../../types";
import { ProductReviewCreateNestedManyWithoutUsersInput } from "./ProductReviewCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  productReviews?: ProductReviewCreateNestedManyWithoutUsersInput;
};
