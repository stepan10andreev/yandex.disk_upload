import { Header } from '@/components/ui-components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Title } from '@/components/ui-components/Title/Title'


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
        <Header>
          <Title text='Загрузчик файлов на Яндекс.Диск' />
        </Header>
        {children}
      </body>
    </html>
  )
}
