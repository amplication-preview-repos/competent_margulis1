import { SortOrder } from "../../util/SortOrder";

export type ProductReviewOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  rating?: SortOrder;
  title?: SortOrder;
  userId?: SortOrder;
};
