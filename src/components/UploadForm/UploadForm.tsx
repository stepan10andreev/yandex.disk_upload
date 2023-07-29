'use client'
import React, { FormEventHandler, useEffect, useState } from 'react'
import styles from './UploadForm.module.scss'
import { UIInput } from '../ui-components/UIInput/UIInput'
import { FileInput } from '../ui-components/FileInput/FileInput'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { getFormData } from '@/utils/getFormData'
import { UIText } from '../ui-components/UIText/UIText'

export const UploadForm = () => {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        localStorage.getItem('yandexToken') ? setIsAuth(true) : setIsAuth(false);
    }, [])

    const handleSubmit: FormEventHandler = async (event) => {
        event.preventDefault();
        // const form = event.target as HTMLFormElement;
        // const data = getFormData(form);
        // console.log(form.files.files);


    }


    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <FileInput />


            <UIButton text='Загрузить на Яндекс.Диск' />
        </form>
    )
}
