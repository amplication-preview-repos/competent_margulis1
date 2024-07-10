import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductReviewUpdateInput = {
  content?: string | null;
  rating?: number | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
