'use client'
import { Content } from '@/components/ui-components/Content/Content'
import { useEffect } from 'react'
import styles from './page.module.scss'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Content>
      <div className={styles.errorWrapper}>
        <h2>Something went wrong!</h2>
        <button
          onClick={
            () => reset()
          }
        >
          Go Home
        </button>
      </div>
    </Content>
  )
}