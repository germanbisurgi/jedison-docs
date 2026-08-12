import { pages } from '@/content/pages.js'

export const searchData = pages.map((page) => ({
  path: page.path,
  name: page.routeName,
  group: page.group,
  description: page.description,
  keywords: page.keywords
}))

export default searchData
