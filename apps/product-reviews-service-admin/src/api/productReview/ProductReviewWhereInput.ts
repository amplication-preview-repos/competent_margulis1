import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductReviewWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  rating?: IntNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
