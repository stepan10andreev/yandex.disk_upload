import { cookies } from 'next/headers'
import { Content } from '@/components/ui-components/Content/Content'
import { UploadForm } from '@/components/UploadForm/UploadForm'
import { AuthBlock } from '@/components/AuthBlock/AuthBlock'
import { ErrorText } from '@/components/ui-components/ErrorText/ErrorText'

const getToken = async (code: string) => {
  const response = await fetch(`https://oauth.yandex.ru/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(process.env.AUTH_BASIC as string)}`,
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=authorization_code&code=${code}`
  })

  const data = await response.json();

  if (response.ok) {
    return data.access_token;
  } else {
    // activate error.js
    throw new Error(`${data.error}`)
  }
}

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  let token = null;

  const cookieStore = cookies();
  const tokenCookie = cookieStore.get('yandexToken');

  if (tokenCookie) {
    token = tokenCookie.value
    // console.log('tokenCookie', tokenCookie)
  } else {
    token = searchParams.code ? await getToken(searchParams.code as string) : null;
  }


  return (
    <Content>

      {token ? (
        <UploadForm token={token} />
      ) : (
        <AuthBlock />
      )}

      {searchParams.error && (
        <ErrorText errorText={`${searchParams.error}: ${searchParams.error_description}`}/>
      )}

    </Content>
  )
}
