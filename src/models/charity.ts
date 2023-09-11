import CharityBase from "./charityBase";

interface Charity extends CharityBase {
  description?: string;
  location?: string;
  tags?: Array<string>;
  profileUrl?: string;
  logoUrl?: string;
  coverImageUrl?: string;
}

export default Charity;
