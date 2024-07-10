import { User } from "../user/User";

export type ProductReview = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  rating: number | null;
  title: string | null;
  user?: User | null;
};
