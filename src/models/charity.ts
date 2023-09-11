interface Charity {
  slug: string;
  name: string;
  description?: string;
  location?: string;
  tags?: Array<string>;
  profileUrl?: string;
  logoUrl?: string;
  coverImageUrl?: string;
}

export default Charity;
