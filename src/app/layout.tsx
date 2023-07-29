import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'


export const metadata: Metadata = {
  title: 'Upload file | yandex.disk',
  description: 'Upload file in yandex.disk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js"></Script>
        <Script src="/auth.js"></Script>
      </body>
    </html>
  )
}
