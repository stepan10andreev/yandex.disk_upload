import { Content } from "@/components/ui-components/Content/Content";
import { UIText } from "@/components/ui-components/UIText/UIText";
import { BarLoader, BeatLoader, BounceLoader } from "react-spinners";
import styles from './page.module.scss'
import Link from "next/link";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

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
    cookies().set('yandexToken', `${data.access_token}`, {maxAge: 3600});
    return true;
  } else {
    throw new Error(`${data.error}`)
  }
}

export default async function Auth({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const notSearchParams = Object.keys(searchParams).length === 0;

  const token = searchParams.code ? await getToken(searchParams.code as string) : null;
  
  if (token) {
    redirect('/')
  }

  return (
    <>
      {searchParams.code && (
        <Content>
          <div className={styles.center}>
            <UIText text="...Авторизация" />

            <BeatLoader color="#5e4700" />
          </div>
        </Content>
      )}

      {searchParams.error && (
        <Content>
          <div className={styles.center}>
            <UIText text={searchParams.error_description as string} />
          </div>
        </Content>
      )}

      {notSearchParams && (
        <Content>
          <div className={styles.notFound}>
            <UIText text="Not Found" As="div" />
            <Link href="/">Return Home</Link>
          </div>
        </Content >
      )}
      
    </>

  )
}
