// type definitions for the Unsplash API response

export type UnsplashPhoto = {
  id: string
  alt_description: string | null
  likes: number
  urls: {
    regular: string
  }
}