import React, { FC } from 'react';
import { DeleteButtonIcon } from '../../Icons/DeleteButtonIcon';
import styles from './FileItem.module.scss'

interface IFileItemProps {
    id?: string;
    fileName: string;
    handleDelete: () => void;
}

export const FileItem: FC<IFileItemProps> = ({ fileName, id, handleDelete }) => {
    return (
        <div className={styles.wrapper}>
            <p>{fileName}</p>

            <button onClick={handleDelete}>
                <DeleteButtonIcon />
            </button>
        </div>
    )
}
