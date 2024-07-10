import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductReviewCreateInput = {
  content?: string | null;
  rating?: number | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
