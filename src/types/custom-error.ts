export type CustomError<Payload = any> = {
  message: string
  status: number
  payload?: Payload
}
