import contentfulClient from "@/lib/contentful";

export const getBlogPosts = async () => {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
  });

  return response.items;
};