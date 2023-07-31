'use client'
import { Header } from '@/components/ui-components/Header/Header'
import { Title } from '@/components/ui-components/Title/Title'
import { Content } from '@/components/ui-components/Content/Content'
import { UploadForm } from '@/components/UploadForm/UploadForm'
import Script from 'next/script'
import { AuthYandexButton } from '@/components/ui-components/AuthYandexButton/AuthYandexButton'

export default function Home() {
  return (
    <>
      <Content>
        <AuthYandexButton />
        {/* <UploadForm /> */}
      </Content>

    </>
  )
}
