import { groq } from "next-sanity";

// Article queries
export const articlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    excerpt,
    featuredImage,
    publishedAt,
    featured,
    "category": category->{
      _id,
      title,
      "slug": slug.current,
      color
    },
    "leader": leader->{
      _id,
      name,
      "slug": slug.current,
      portrait,
      title,
      organization
    }
  }
`;

export const articlesByCategoryQuery = groq`
  *[_type == "article" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    excerpt,
    featuredImage,
    publishedAt,
    featured,
    "category": category->{
      _id,
      title,
      "slug": slug.current,
      color
    },
    "leader": leader->{
      _id,
      name,
      "slug": slug.current,
      portrait,
      title,
      organization
    }
  }
`;

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    excerpt,
    featuredImage,
    content,
    pullQuote,
    publishedAt,
    seo,
    "category": category->{
      _id,
      title,
      "slug": slug.current,
      color
    },
    "leader": leader->{
      _id,
      name,
      "slug": slug.current,
      portrait,
      title,
      organization,
      shortBio,
      keyQuote
    },
    "relatedArticles": relatedArticles[]->{
      _id,
      title,
      "slug": slug.current,
      excerpt,
      featuredImage,
      publishedAt,
      "category": category->{
        title,
        "slug": slug.current
      }
    }
  }
`;

// Leader queries
export const leadersQuery = groq`
  *[_type == "leader"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    portrait,
    title,
    organization,
    shortBio,
    featured
  }
`;

export const featuredLeadersQuery = groq`
  *[_type == "leader" && featured == true] | order(name asc) [0...5] {
    _id,
    name,
    "slug": slug.current,
    portrait,
    title,
    organization
  }
`;

export const leaderBySlugQuery = groq`
  *[_type == "leader" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    portrait,
    title,
    organization,
    shortBio,
    fullBio,
    keyQuote,
    achievements,
    socialLinks,
    seo,
    "articles": *[_type == "article" && references(^._id)] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      featuredImage,
      publishedAt,
      "category": category->{
        title,
        "slug": slug.current
      }
    }
  }
`;

// Category queries
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    heroImage,
    color
  }
`;

export const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    heroImage,
    color,
    seo
  }
`;

// Search query
export const searchQuery = groq`
  *[_type in ["article", "leader"] && (
    title match $query + "*" ||
    name match $query + "*" ||
    excerpt match $query + "*" ||
    shortBio match $query + "*"
  )] | score(
    title match $query + "*",
    name match $query + "*"
  ) | order(_score desc) [0...20] {
    _type,
    _id,
    "title": coalesce(title, name),
    "slug": slug.current,
    "excerpt": coalesce(excerpt, shortBio),
    "image": coalesce(featuredImage, portrait),
    "category": category->{
      title,
      "slug": slug.current
    }
  }
`;

// Homepage queries
export const homepageDataQuery = groq`{
  "featuredArticle": *[_type == "article" && featured == true] | order(publishedAt desc) [0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    featuredImage,
    "category": category->{
      title,
      "slug": slug.current
    },
    "leader": leader->{
      name,
      title,
      keyQuote
    }
  },
  "latestArticles": *[_type == "article"] | order(publishedAt desc) [0...4] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    featuredImage,
    publishedAt,
    "category": category->{
      title,
      "slug": slug.current
    },
    "leader": leader->{
      name
    }
  },
  "featuredLeaders": *[_type == "leader" && featured == true] | order(name asc) [0...5] {
    _id,
    name,
    "slug": slug.current,
    portrait,
    title,
    organization
  },
  "categories": *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "articleCount": count(*[_type == "article" && references(^._id)])
  }
}`;
