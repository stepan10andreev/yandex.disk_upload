import { Metadata } from 'next'

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
      {children}
    </>
  )
}
