'use client'
import React, { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import styles from './FileInput.module.scss'
import { UploadIcon } from '../Icons/UploadIcon'
import { FileItem } from './FileItem/FileItem'

interface IFile {
    id: string;
    name: string;
}

export const FileInput = () => {
    const [files, setFiles] = useState<IFile[]>([]);
    const [fileData, setFileData] = useState<File[]>([])


    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        // console.log(event.currentTarget.files)
        const file = (event.currentTarget.files as FileList)[0]
        setFileData([...fileData, file])
        setFiles([...files, { id: crypto.randomUUID(), name: (event.currentTarget.files as FileList)[0].name }])
    }

    const handleDelete = (id: string) => {
        console.log(id)
        // console.log(event?.currentTarget.value)
        setFiles(files.filter((file) => file.id !== id))
    }

    const handleClick = async () => {
        const response = await fetch(`https://cloud-api.yandex.net/v1/disk/resources/upload?path=%2F${fileData[0].name}`, {
            headers: {
                Authorization: 'y0_AgAAAABXj0wmAADLWwAAAADo94AQSburTcXgQ9q1nCtJaKEIfIzR9fA', 
                Accept: 'application/json'
            }
        })

        const link = await response.json()

        console.log(fileData[0])

        const send = await fetch(`${link.href}`, {
            method: 'PUT',
            body: fileData[0]
        })
        console.log(send)

    }

    return (
        <>
            <input onChange={handleChange} className={styles.input} id='file-input' name="files" type="file" multiple />
            <label htmlFor="file-input" className={styles.label}>
                <span className={styles.icon}><UploadIcon /></span>
                <span className={styles.text}>Выберите файл/файлы</span>
            </label>
            <div className={styles.fileList}>
                {files.map((file) => (
                    <FileItem key={file.id} fileName={file.name} handleDelete={() => handleDelete(file.id)} />
                ))}
            </div>
            <button onClick={handleClick}>sasasds</button>
        </>
    )
}
