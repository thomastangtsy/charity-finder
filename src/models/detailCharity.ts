import CharityBase from "./charityBase";
import Tag from "./tag";

interface DetailCharity extends CharityBase {
  description?: string;
  descriptionLong?: string;
  locationAddress?: string;
  websiteUrl?: string;
  profileUrl?: string;
  logoUrl?: string;
  coverImageUrl?: string;
  nonprofitTags?: Array<Tag>;
}

export default DetailCharity;
