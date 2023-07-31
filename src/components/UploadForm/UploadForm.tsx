'use client'
import React, { ChangeEventHandler, FC, FormEventHandler, useEffect, useState } from 'react'
import styles from './UploadForm.module.scss'
import { UIInput } from '../ui-components/UIInput/UIInput'
import { FileInput } from '../ui-components/FileInput/FileInput'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { getFormData } from '@/utils/getFormData'
import { UIText } from '../ui-components/UIText/UIText'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { uploadFiles } from '@/utils/uploadFiles'
import { ErrorText } from '../ui-components/ErrorText/ErrorText'

interface IUploadForm {
    token: string;
}

export interface IFile {
    id: string;
    name: string;
    file: File;
}

export const UploadForm: FC<IUploadForm> = ({ token }) => {
    const [files, setFiles] = useState<IFile[]>([]);
    const [error, setError] = useState('');

    const router = useRouter();

    useEffect(() => {
        router.replace('/')
        setCookie('yandexToken', token, { maxAge: 60 * 60 });
    }, [])

    const handleSubmit: FormEventHandler = async (event) => {
        event.preventDefault();
        const filesData = files.map(file => file.file);
        // проверку на наличие токена не нужно так как форма появляется только при наличии токена
        const errorMessage = await uploadFiles(filesData, token)
        errorMessage ? setError(errorMessage) : setError('')
        !errorMessage && setFiles([]);
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const file = (event.currentTarget.files as FileList)[0]
        setFiles([...files, { id: crypto.randomUUID(), name: (event.currentTarget.files as FileList)[0].name, file: file }])
    }

    const handleDelete = (id: string) => {
        setFiles(files.filter((file) => file.id !== id))
    }


    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <FileInput
                files={files}
                handleDelete={handleDelete}
                onChange={handleChange}
            />

            <UIButton text='Загрузить на Яндекс.Диск' disabled={files.length === 0} />

            {error && (<ErrorText errorText={error}/>)}
        </form>
    )
}
