export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
  date: string
}

export interface ResearchPaper {
  id: string
  title: string
  abstract: string
  authors: string[]
  publishedDate: string
  journal?: string
  link?: string
  pdf?: string
  keywords: string[]
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedDate: string
  updatedDate?: string
  tags: string[]
  image?: string
  readTime: number
}
