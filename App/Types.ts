export type involvement = {
  role: string,
  company: string,
  logo: string,
  duration: {
    from: String
    to: String
  }
} 

export type person = {
    name: string,
    degrees: string[],
    points: number,
    email: string,
    experiences: involvement[]
  }

  export type project = {
  header: string
  slug: string
  summary: string
  tags: string[]
  image: string
  imagealt: string
  repository: string
  article: string
  createdat: number
  }

  export type contactMessage = {
    person: string
    email: string
    message: string
  }