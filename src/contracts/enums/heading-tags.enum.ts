export const HeadingTags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6"
} as const;
export type HeadingTags = (typeof HeadingTags)[keyof typeof HeadingTags];