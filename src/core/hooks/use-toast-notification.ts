import { useToasts } from 'react-toast-notifications'

export type ToastType = {
  message: string
  autoDismiss?: boolean
  id?: string
}

const useToast = () => {
  const { addToast, removeToast, updateToast } = useToasts()

  function showSuccess({
    message,
    autoDismiss = true,
    id = '',
  }: ToastType): void {
    const printableText =
      typeof message === 'string' ? message : JSON.stringify(message)
    return addToast(printableText, {
      id,
      appearance: 'success',
      autoDismiss,
    })
  }

  function showInfo({ message, autoDismiss = true, id = '' }: ToastType): void {
    const printableText =
      typeof message === 'string' ? message : JSON.stringify(message)
    return addToast(printableText, {
      id,
      appearance: 'info',
      autoDismiss,
    })
  }

  function showError({
    message,
    autoDismiss = true,
    id = '',
  }: ToastType): void {
    const printableText =
      typeof message === 'string' ? message : JSON.stringify(message)
    return addToast(printableText, {
      id,
      appearance: 'error',
      autoDismiss,
    })
  }

  return { showSuccess, showInfo, showError, removeToast, updateToast }
}
export default useToast
