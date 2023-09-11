import Tag from "./tag";

interface DetailCharity {
  name: string;
  primarySlug: string;
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
