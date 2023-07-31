import React, { ChangeEventHandler, FC } from 'react'
import styles from './FileInput.module.scss'
import { UploadIcon } from '../Icons/UploadIcon'
import { FileItem } from './FileItem/FileItem'
import { IFile } from '@/components/UploadForm/UploadForm'

interface IFileInput {
    onChange: ChangeEventHandler<HTMLInputElement>;
    files: IFile[];
    handleDelete: (id: string) => void
}

export const FileInput: FC<IFileInput> = ({ onChange, files, handleDelete }) => {
    return (
        <>
            <input onChange={onChange} className={styles.input} id='file-input' name="files" type="file" multiple />
            <label htmlFor="file-input" className={styles.label}>
                <span className={styles.icon}><UploadIcon /></span>
                <span className={styles.text}>Выберите файл/файлы</span>
            </label>
            <div className={styles.fileList}>
                {files.map((file) => (
                    <FileItem key={file.id} fileName={file.name} handleDelete={() => handleDelete(file.id)} />
                ))}
            </div>
        </>
    )
}
