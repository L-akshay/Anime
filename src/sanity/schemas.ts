// Sanity CMS Schema Definitions (v3 format)
// Satisfies the backend integration requirements for Neuroblastism

export const authorSchema = {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "avatar",
      title: "Avatar Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
    },
  ],
};

export const categorySchema = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};

export const articleSchema = {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "readTime",
      title: "Reading Time (e.g. 5 MIN READ)",
      type: "string",
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      initialValue: false,
    },
  ],
};

export const animeSchema = {
  name: "anime",
  title: "Anime",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "titleJapanese",
      title: "Japanese Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "studio",
      title: "Studio",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "year",
      title: "Release Year",
      type: "number",
      validation: (Rule: any) => Rule.required().min(1900).max(2100),
    },
    {
      name: "episodes",
      title: "Episode Count",
      type: "number",
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: "genre",
      title: "Genres",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: "rating",
      title: "Overall Rating Score",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0).max(10),
    },
    {
      name: "description",
      title: "Synopsis / Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "poster",
      title: "Poster Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "featured",
      title: "Featured in Spotlight",
      type: "boolean",
      initialValue: false,
    },
  ],
};

export const reviewSchema = {
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    {
      name: "anime",
      title: "Target Anime",
      type: "reference",
      to: [{ type: "anime" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "author",
      title: "Author / Critic",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "date",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "verdict",
      title: "Summary Verdict",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "reviewText",
      title: "Review Text",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "storyScore",
      title: "Story Score (0-10)",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0).max(10),
    },
    {
      name: "charactersScore",
      title: "Characters Score (0-10)",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0).max(10),
    },
    {
      name: "animationScore",
      title: "Animation Score (0-10)",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0).max(10),
    },
    {
      name: "musicScore",
      title: "Soundtrack/Music Score (0-10)",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0).max(10),
    },
    {
      name: "overallScore",
      title: "Overall Score (0-10)",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0).max(10),
    },
  ],
};

export const settingsSchema = {
  name: "settings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      initialValue: "Neuroblastism",
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
    },
    {
      name: "logoText",
      title: "Logo Heading",
      type: "string",
    },
    {
      name: "japaneseSubtitle",
      title: "Japanese Subtitle",
      type: "string",
    },
  ],
};

export const schemaTypes = [
  authorSchema,
  categorySchema,
  articleSchema,
  animeSchema,
  reviewSchema,
  settingsSchema,
];
