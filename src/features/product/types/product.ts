export type Product = {
  id: string
  slug: string
  name: string
  imageUrl: string
  price: number
  installmentsInfo: string
  condition: string
  soldAmount: number
  stockAmount: number
  categoryId: string
  categories: string[] | string
}
