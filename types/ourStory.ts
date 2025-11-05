import { Metadata, ContentBlock } from "./common";

export interface OurStoryPage {
  id: string;
  heading: string;
  content: ContentBlock[];
  metadata: Metadata;
}
