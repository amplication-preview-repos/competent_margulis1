import { ProductReview as TProductReview } from "../api/productReview/ProductReview";

export const PRODUCTREVIEW_TITLE_FIELD = "title";

export const ProductReviewTitle = (record: TProductReview): string => {
  return record.title?.toString() || String(record.id);
};
