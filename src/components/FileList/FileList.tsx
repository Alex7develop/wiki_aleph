import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { listObjects } from '../../services/s3Service';
import type { FileItem } from '../../services/s3Service';
import folderIcon from '../../assets/folder.svg';

// Контейнер для списка файлов, с адаптивными паддингами и фоном
const FileListContainer = styled.div`
    width: 100vw;
    padding: 48px 2vw 0 2vw;
    min-height: 80vh;
    background: #f7f9f8;
    box-sizing: border-box;
    overflow-x: hidden;
    @media (max-width: 768px) {
        padding: 20px 0.5rem 0 0.5rem;
    }
`;

// Заголовок раздела
const Title = styled.h2`
    font-size: 1.6rem;
    font-weight: 700;
    color: #3cb371;
    margin-bottom: 2rem;
    margin-top: 0;
    @media (max-width: 768px) {
        font-size: 1.1rem;
        margin-bottom: 1.2rem;
        text-align: left;
    }
`;

// Сетка для карточек файлов
const FileGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.2rem;
    margin-top: 2rem;
    width: 100%;
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`;

// Карточка файла
const FileCard = styled.div`
    background: white;
    border-radius: 14px;
    padding: 1.1rem 1rem 1rem 1rem;
    box-shadow: 0 2px 8px rgba(60,179,113,0.07);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 110px;
    position: relative;
    transition: box-shadow 0.2s;
    @media (max-width: 600px) {
        min-height: 80px;
        padding: 0.8rem 0.7rem 0.7rem 0.7rem;
        border-radius: 12px;
        max-width: 48%;
    }

     @media (max-width: 375px) {
        min-height: 70px;
        padding: 0.7rem 0.6rem 0.6rem 0.6rem;
        border-radius: 10px;
        max-width: 37%;
    }
    &:hover {
        box-shadow: 0 4px 16px rgba(60,179,113,0.13);
    }
`;

// Иконка папки
const FolderIcon = styled.img`
    width: 32px;
    height: 32px;
    margin-bottom: 0.5rem;
    flex-shrink: 0;
    @media (max-width: 600px) {
        width: 24px;
        height: 24px;
        margin-bottom: 0.3rem;
    }
`;

// Название файла (с обрезкой длинных строк)
const FileName = styled.div`
    font-size: 1.08rem;
    font-weight: 500;
    color: #222;
    margin-bottom: 0.3rem;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 600px) {
        font-size: 0.98rem;
    }
`;

// Путь к файлу (с обрезкой длинных строк)
const FilePath = styled.div`
    font-size: 0.92rem;
    color: #888;
    margin-bottom: 0.8rem;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 600px) {
        font-size: 0.82rem;
        margin-bottom: 0.5rem;
    }
`;

// Ссылка на файл
const FileLink = styled.a`
    margin-top: auto;
    color: #3cb371;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: underline;
    word-break: break-all;
    transition: color 0.2s;
    @media (max-width: 600px) {
        font-size: 0.98rem;
    }
    &:hover {
        color: #267a4a;
    }
`;

// Сообщение о загрузке
const LoadingMessage = styled.div`
    text-align: center;
    padding: 2rem;
    color: #666;
`;

/**
 * Компонент FileList
 * Получает список файлов с backend и отображает их в виде карточек
 */
export const FileList = () => {
    // Состояние для файлов
    const [files, setFiles] = useState<FileItem[]>([]);
    // Состояние загрузки
    const [loading, setLoading] = useState(true);

    // Получение файлов при монтировании компонента
    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const objects = await listObjects();
                setFiles(objects);
            } catch (error) {
                console.error('Error fetching files:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchFiles();
    }, []);

    if (loading) {
        return <LoadingMessage>Загрузка файлов...</LoadingMessage>;
    }

    return (
        <FileListContainer>
            <Title>Файлы в хранилище</Title>
            <FileGrid>
                {files.map((file) => (
                    <FileCard key={file.url}>
                        {/* Иконка папки */}
                        <FolderIcon src={folderIcon} alt="Папка" />
                        {/* Название файла */}
                        <FileName title={file.name}>{file.name}</FileName>
                        {/* Путь к файлу */}
                        <FilePath title={file.path}>{file.path}</FilePath>
                        {/* Ссылка на файл */}
                        <FileLink href={file.url} target="_blank" rel="noopener noreferrer">
                            Открыть файл
                        </FileLink>
                    </FileCard>
                ))}
            </FileGrid>
        </FileListContainer>
    );
}; 
