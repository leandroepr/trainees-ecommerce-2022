import type { AppProps } from 'next/app'
import React from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ToastProvider } from 'react-toast-notifications'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ToastProvider>
  )
}

export default MyApp
