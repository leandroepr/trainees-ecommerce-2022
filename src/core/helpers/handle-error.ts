import { CustomError } from 'core/types/custom-error'

type Option<Payload = any> = {
  payload?: Payload
  defaultMessage?: string
}
export const handleError = <T = any>(error: any, option?: Option<T>) => {
  const defaultMessage = option?.defaultMessage ?? 'Ocorreu um erro inesperado'
  const message = error?.response?.data?.message || defaultMessage
  const status = error?.response?.status
  const customError: CustomError = { message, status, payload: option?.payload }
  return customError
}
