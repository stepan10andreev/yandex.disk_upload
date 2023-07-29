'use client'
import { Header } from '@/components/ui-components/Header/Header'
import { Title } from '@/components/ui-components/Title/Title'
import { Content } from '@/components/ui-components/Content/Content'
import { UploadForm } from '@/components/UploadForm/UploadForm'

export default function Home() {
  return (
    <>
      <Header>
        <Title text='Загрузчик файлов на Яндекс.Диск' />
      </Header>

      <Content>
        <UploadForm />
      </Content>
    </>
  )
}
