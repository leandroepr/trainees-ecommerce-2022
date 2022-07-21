import { useRouter } from 'next/router'
import queryString from 'query-string'

export function useQueryParams<T = any>() {
  const router = useRouter()
  const { url, query } = queryString.parseUrl(router.asPath)
  const cleanEmpty = (obj: object) => {
    return Array.isArray(obj)
      ? obj
          .map((v): any => (v && typeof v === 'object' ? cleanEmpty(v) : v))
          .filter((v) => !(v == null))
      : Object.entries(obj)
          .map(([k, v]): any => [
            k,
            v && typeof v === 'object' ? cleanEmpty(v) : v,
          ])
          .reduce(
            (a, [k, v]) =>
              v === null || v === '' || v === undefined ? a : ((a[k] = v), a),
            {}
          )
  }
  return {
    query: { ...router.query, ...query } as unknown as T,
    updateQuery: (params: Partial<T>) => {
      const newQuery = { ...query, ...params }
      const beautyQuery = cleanEmpty(newQuery)

      const urlPath = `${url}?${queryString.stringify(newQuery)}`
      const asPath = `${url}${
        Object.keys(beautyQuery).length > 0
          ? `?${queryString.stringify(beautyQuery)}`
          : ''
      }`

      router.push(urlPath, asPath, { shallow: true })
    },
  }
}
