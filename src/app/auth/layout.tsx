import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Authorization',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js"></Script>
      <Script src="/token.js"></Script>
    </>
  )
}
